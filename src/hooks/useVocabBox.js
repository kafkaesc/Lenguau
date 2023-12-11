import { useEffect, useState } from 'react';
import { useLenguaApi } from 'context/LenguaApiContext';
import { shuffle } from 'utilities/GameUtil';
import { getOfflineVocab } from 'utilities/OfflineUtil';

/**
 * This hook creates a "box" of shuffled vocab objects a component
 * can move through by rounds
 * @param {string} categoryTitle The vocabulary category for this box
 * @param {number} roundSize How many words should be included per round
 * @returns title: an en/es object with the titles for the category;
 * getRound, hasRound: functions to move through the vocabulary rounds
 */
export function useVocabBox(categoryTitle, roundSize) {
	const [__categoryTitle, __setCategoryTitle] = useState('');
	const [__roundSize, __setRoundSize] = useState(0);
	const [__vocabBox, __setVocabBox] = useState([]);
	const [__vocabTitle, __setVocabTitle] = useState({ en: '', es: '' });

	const apiBase = useLenguaApi();

	/**
	 * @param {number} round The round (1-indexed) to retrieve the vocabulary for
	 * @returns {array} Array of vocab objects, the length will match the hook assigned roundSize
	 */
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

	/**
	 * @param {number} round The round (1-indexed) to check if it exists
	 * @returns true if a round exists for the argument, otherwise false
	 */
	function hasRound(round) {
		return !((round - 1) * __roundSize >= __vocabBox.length);
	}

	/**
	 * If there is an issue calling the data from Lenguau API, this is
	 * the fallback to use a smaller set of local data.
	 * @param {string} categoryTitle The vocabulary category for this box
	 */
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
