export function shuffle(array) {
	if (!Array.isArray(array)) {
		console.error('Non-array argument passed to shuffle in GameUtil');
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
