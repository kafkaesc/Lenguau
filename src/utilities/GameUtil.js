export function shuffle(array) {
	if (!Array.isArray(array)) {
		console.error('Non array argument passed to shuffle in GameUtil');
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

export function stripAccents(st) {
	if (typeof st !== 'string') {
		console.error('Non string argument passed to stripAccents in GameUtil');
		return;
	}
	return st.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
}

export function removeArticles(st) {
	if (typeof st !== 'string') {
		console.error('Non string argument passed to removeArticles in GameUtil');
		return;
	}
	let rmString = st;
	if (rmString.substring(0, 3) === 'el ') {
		rmString = rmString.substring(3);
	} else if (rmString.substring(0, 3) === 'la ') {
		rmString = rmString.substring(3);
	} else if (rmString.substring(0, 3) === 'un ') {
		rmString = rmString.substring(3);
	} else if (rmString.substring(0, 4) === 'una ') {
		rmString = rmString.substring(4);
	} else if (rmString.substring(0, 2) === 'a ') {
		rmString = rmString.substring(2);
	} else if (rmString.substring(0, 3) === 'an ') {
		rmString = rmString.substring(3);
	} else if (rmString.substring(0, 4) === 'the ') {
		rmString = rmString.substring(4);
	}
	return rmString;
}
