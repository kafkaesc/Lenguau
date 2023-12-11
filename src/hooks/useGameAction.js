/**
 * This hook contains any logic that is universal across the vocabulary games,
 * right now it just has shuffle
 * @returns A shuffle function
 */
export function useGameAction() {
	/**
	 * Shuffles the array
	 * @param {array} array
	 * @returns {array | undefined} The array arg shuffled, undefined if passed an invalid arg
	 */
	function shuffle(array) {
		if (!Array.isArray(array)) {
			console.error('Non array argument passed to shuffle in useGameAction');
			return;
		}

		let arr = [...array];
		let currIndex = arr.length;
		let randIndex = 0;
		while (currIndex !== 0) {
			randIndex = Math.floor(Math.random() * currIndex);
			currIndex--;

			[arr[currIndex], arr[randIndex]] = [arr[randIndex], arr[currIndex]];
		}
		return arr;
	}

	return { shuffle };
}
