/**
 * This hooks provides functions to help fuzzy match the vocabulary in some
 * of the Lenguau games. Functions will do things like remove accents, remove
 * articles, or other changes to test for fuzzy matches.
 * @returns Functions for fuzzy matching vocabulary related strings
 */
export function useVocabFuzzyMatcher() {
	/**
	 * Takes the string st and if it begins with an English or Spanish article,
	 * the article and its trailing space will be removed from the beginning
	 * @param {string} st The string to remove articles from
	 * @returns {string} The string arg without any articles (English or Spanish) at the start
	 */
	function removeArticles(st) {
		if (typeof st !== 'string') {
			console.error('Non string argument passed to removeArticles in GameUtil');
			return;
		}
		let rmString = st;
		// Spanish articles
		if (rmString.substring(0, 3) === 'el ') {
			rmString = rmString.substring(3);
		} else if (rmString.substring(0, 3) === 'la ') {
			rmString = rmString.substring(3);
		} else if (rmString.substring(0, 3) === 'las ') {
			rmString = rmString.substring(3);
		} else if (rmString.substring(0, 3) === 'los ') {
			rmString = rmString.substring(3);
		} else if (rmString.substring(0, 3) === 'un ') {
			rmString = rmString.substring(3);
		} else if (rmString.substring(0, 4) === 'una ') {
			rmString = rmString.substring(4);
		}
		// English articles
		else if (rmString.substring(0, 2) === 'a ') {
			rmString = rmString.substring(2);
		} else if (rmString.substring(0, 3) === 'an ') {
			rmString = rmString.substring(3);
		} else if (rmString.substring(0, 4) === 'the ') {
			rmString = rmString.substring(4);
		}
		return rmString;
	}

	/**
	 * Takes the string st and returns it without any accents on the letters,
	 * e.g., año becomes ano
	 * @param {string} st The string to strip articles from
	 * @returns {string} The string arg without any articles accents
	 */
	function stripAccents(st) {
		if (typeof st !== 'string') {
			console.error('Non string argument passed to stripAccents in GameUtil');
			return;
		}
		return st.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
	}

	return { removeArticles, stripAccents };
}
