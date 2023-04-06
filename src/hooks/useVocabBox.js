import { useEffect, useState } from 'react';
import { useLenguaApi } from 'context/LenguaApiContext';
import { shuffle } from 'utilities/GameUtil';
import { getOfflineVocab } from 'utilities/OfflineUtil';

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
		const localVocab = getOfflineVocab(categoryTitle);
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
					});
			}

			myFetch().catch((err) => {
				console.error('Error fetching vocabulary for useVocabBox: ', err);
				console.log('Using offline vocab set.');

				loadLocalVocab(categoryTitle);
			});
		}
	}, [__categoryTitle, __roundSize, apiBase, categoryTitle, roundSize]);

	return { title: __vocabTitle, getRound, hasRound };
}
