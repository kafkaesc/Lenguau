import { useEffect, useState } from 'react';
import { useLenguaApi } from 'context/LenguaApiContext';
import { shuffle } from 'utilities/GameUtil';
import { sanitizeJsonName } from 'utilities/PathUtil';

export function useVocabBox(categoryTitle, roundSize) {
	const [__categoryTitle, __setCategoryTitle] = useState('');
	const [__vocabTitle, __setVocabTitle] = useState({ en: '', es: '' });
	const [__roundSize, __setRoundSize] = useState(0);
	const [__vocabBox, __setVocabBox] = useState([]);

	const apiBase = useLenguaApi();

	function getRound(round) {
		if (!Array.isArray(__vocabBox) || !hasRound(round)) {
			return [];
		}
		if (__vocabBox.length > 0) {
			return __vocabBox.slice(
				(round - 1) * __roundSize,
				(round - 1) * __roundSize + 1 * __roundSize
			);
		}
	}

	function hasRound(round) {
		return !((round - 1) * __roundSize >= __vocabBox.length);
	}

	function loadLocalVocab(categoryTitle) {
		const localVocab = require(`assets/offline-data/${sanitizeJsonName(
			categoryTitle
		)}.json`);
		__setVocabBox(shuffle([...localVocab.vocabList]));
		__setVocabTitle({ en: localVocab.title.en, es: localVocab.title.es });
	}

	useEffect(() => {
		if (categoryTitle !== __categoryTitle || roundSize !== __roundSize) {
			__setCategoryTitle(categoryTitle);
			__setRoundSize(roundSize);

			async function myFetch() {
				await fetch(`${apiBase}vocab/${categoryTitle}`)
					.then((res) => res.json())
					.then((data) => {
						__setVocabBox(shuffle([...data.vocabList]));
						__setVocabTitle(data.title);
					})
					.catch((err) => {
						console.error('Error fetching vocabulary for useVocabBox: ', err);
						console.log('Using offline vocab set.');

						// TODO: Break this into a hook
						switch (categoryTitle) {
							case 'Around-Town':
							case 'At-the-Office':
							case 'Colors':
							case 'Literature':
							case 'Top-50-Verbs':
								loadLocalVocab(categoryTitle);
								break;
							default:
								console.error(
									'useVocabBox offline error: No vocabulary to match the provided category title: ' +
										categoryTitle
								);
								break;
						}
					});
			}

			myFetch();
		}
	}, [__categoryTitle, __roundSize, apiBase, categoryTitle, roundSize]);

	return { title: __vocabTitle, getRound, hasRound };
}
