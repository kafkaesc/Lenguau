import { shuffle } from 'utilities/GameUtil';

const colorsVocab = [
	{ en: 'black', es: 'negro/a' },
	{ en: 'blue', es: 'azul' },
	{ en: 'gold', es: 'dorado/a' },
	{ en: 'gray', es: 'gris' },
	{ en: 'green', es: 'verde' },
	{ en: 'orange', es: 'anaranjado/a' },
	{ en: 'pink', es: 'rosado/a' },
	{ en: 'purple', es: 'morado/a' },
	{ en: 'yellow', es: 'amarillo/a' },
	{ en: 'red', es: 'rojo/a' },
	{ en: 'silver', es: 'plateaado/a' },
	{ en: 'white', es: 'blanco/a' },
];

const literatureVocab = [
	{ en: 'book', es: 'el libro' },
	{ en: 'chapter', es: 'el capítulo' },
	{ en: 'character', es: 'el personaje' },
	{ en: 'comedy', es: 'la comedia' },
	{ en: 'drama', es: 'el drama' },
	{ en: 'fantasy', es: 'la literatura fantastica' },
	{ en: 'genre', es: 'el género' },
	{ en: 'horror', es: 'el terror' },
	{ en: 'literature', es: 'la literatura' },
	{ en: 'novel', es: 'la novela' },
	{ en: 'novella', es: 'la novela corta' },
	{ en: 'satire', es: 'la sátira' },
	{ en: 'science fiction', es: 'la ciencia ficción' },
	{ en: 'setting', es: 'el ambientación' },
	{ en: 'short story', es: 'el cuento' },
	{ en: 'theme', es: 'el tema' },
	{ en: 'tragedy', es: 'la tragedia' },
];

const officeVocab = [
	{ en: 'boss', es: 'el jefe/la jefa' },
	{ en: 'calculator', es: 'la calculadora' },
	{ en: 'chair', es: 'la silla' },
	{ en: 'computer', es: 'la computadora' },
	{ en: 'coworker', es: 'el colega/la colega' },
	{ en: 'desk', es: 'el escritorio' },
];

const townVocab = [
	{ en: 'airport', es: 'el aeropuerto' },
	{ en: 'bakery', es: 'la panadería' },
	{ en: 'bank', es: 'el banco' },
	{ en: 'bar', es: 'el bar' },
	{ en: 'bookstore', es: 'la librería' },
	{ en: 'bus stop', es: 'la parada de autobús' },
];

let __vocabBox = [];
let __roundSize = 0;

function getRound(round) {
	console.log('round: ', round);
	if (__vocabBox.length === 0) {
		console.error(
			'pop was called on the __vocabBox, but there is no data to return.'
		);
	}
	if (__vocabBox.length > 0) {
		const start = (round - 1) * __roundSize;
		const end = start + __roundSize;

		return __vocabBox.slice(start, end);
	}
}

function hasRound(round) {
	return (round - 1) * __roundSize >= __vocabBox.length ? false : true;
}

// TODO: Update this to call the API.
export function useVocabBox(categoryTitle, roundSize) {
	let loaded = false;
	__roundSize = roundSize;
	switch (categoryTitle) {
		case 'Around-Town':
			__vocabBox = shuffle([...townVocab]);
			loaded = true;
			break;
		case 'At-the-Office':
			__vocabBox = shuffle([...officeVocab]);
			loaded = true;
			break;
		case 'Colors':
			__vocabBox = shuffle([...colorsVocab]);
			loaded = true;
			break;
		case 'Literature':
			__vocabBox = shuffle([...literatureVocab]);
			loaded = true;
			break;
		default:
			console.error(
				'No vocabulary to match the provided category title: ' + categoryTitle
			);
			break;
	}
	return { getRound, hasRound, loaded };
}
