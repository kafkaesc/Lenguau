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
	{ en: 'boss', es: 'el/la jefe/a' },
	{ en: 'calculator', es: 'la calculadora' },
	{ en: 'chair', es: 'la silla' },
	{ en: 'computer', es: 'la computadora' },
	{ en: 'coworker', es: 'el/la colega' },
	{ en: 'desk', es: 'el escritorio' },
	{ en: 'email', es: 'el correo electrónico' },
	{ en: 'job', es: 'el trabajo' },
	{ en: 'keyboard', es: 'el teclado' },
	{ en: 'mail', es: 'el correo' },
	{ en: 'office', es: 'la oficina' },
	{ en: 'paper', es: 'el papel' },
	{ en: 'pencil', es: 'un lápiz' },
	{ en: 'pen', es: 'el bolígrafo' },
	{ en: 'profession', es: 'la profesión' },
	{ en: 'staple', es: 'la grapa' },
	{ en: 'stapler', es: 'la grapadora' },
];

const top50Verbs = [
	{ en: 'to accept', es: 'aceptar' },
	{ en: 'to arrive', es: 'llegar' },
	{ en: 'to be (innate)', es: 'ser' },
	{ en: 'to ber (state', es: 'estar' },
	{ en: 'to begin', es: 'comenzar' },
	{ en: 'to believe', es: 'creer' },
	{ en: 'to call', es: 'llamar' },
	{ en: 'to carry', es: 'llevar' },
	{ en: 'to change', es: 'cambiar' },
	{ en: 'to count', es: 'contar' },
	{ en: 'to create', es: 'crear' },
	{ en: 'to do', es: 'hacer' },
	{ en: 'to exist', es: 'existir' },
	{ en: 'to explain', es: 'explicar' },
	{ en: 'to feel', es: 'sentir' },
	{ en: 'to find', es: 'encontrar' },
	{ en: 'to give', es: 'dar' },
	{ en: 'to go', es: 'ir' },
	{ en: 'to go out', es: 'salir' },
	{ en: 'to have', es: 'tener' },
	{ en: 'to help', es: 'ayudar' },
	{ en: 'to play (sport, game)', es: 'jugar' },
	{ en: 'to know (personally)', es: 'conocer' },
	{ en: 'to know (data)', es: 'saber' },
	{ en: 'to listen', es: 'escuchar' },
	{ en: 'to live', es: 'vivir' },
	{ en: 'to look for', es: 'buscar' },
	{ en: 'to lose', es: 'perder' },
	{ en: 'to need', es: 'necesitar' },
	{ en: 'to open', es: 'abrir' },
	{ en: 'to owe', es: 'deber' },
	{ en: 'to pay', es: 'pagar' },
	{ en: 'to read', es: 'leer' },
	{ en: 'to remember', es: 'recordar' },
	{ en: 'to return', es: 'volver' },
	{ en: 'to run', es: 'correr' },
	{ en: 'to say', es: 'decir' },
	{ en: 'to see', es: 'ver' },
	{ en: 'to speak, to talk', es: 'hablar' },
	{ en: 'to start', es: 'empezar' },
	{ en: 'to study', es: 'estudiar' },
	{ en: 'to touch, to play (instrument)', es: 'tocar' },
	{ en: 'to understand', es: 'comprender, entender' },
	{ en: 'to walk', es: 'caminar' },
	{ en: 'to want', es: 'querer' },
	{ en: 'to wait', es: 'esperar' },
	{ en: 'to watch', es: 'mirar' },
	{ en: 'to win', es: 'ganar' },
	{ en: 'to work', es: 'trabajar' },
	{ en: 'to write', es: 'escribir' },
];

const townVocab = [
	{ en: 'airport', es: 'el aeropuerto' },
	{ en: 'bakery', es: 'la panadería' },
	{ en: 'bank', es: 'el banco' },
	{ en: 'bar', es: 'el bar' },
	{ en: 'bookstore', es: 'la librería' },
	{ en: 'bus stop', es: 'la parada de autobús' },
	{ en: 'church', es: 'la iglesia' },
	{ en: 'coffee shop', es: 'el café' },
	{ en: 'concert', es: 'el concierto' },
	{ en: 'factory', es: 'la fábrica' },
	{ en: 'game (sports)', es: 'el partido' },
	{ en: 'gas station', es: 'la gasolinera' },
	{ en: 'grocery store', es: 'el supermercado' },
	{ en: 'hotel', es: 'el hotel' },
	{ en: 'library', es: 'la biblioteca' },
	{ en: 'mosque', es: 'la mezquita' },
	{ en: 'movie theater', es: 'el cine' },
	{ en: 'museum', es: 'el museo' },
	{ en: 'the park', es: 'el parque' },
	{ en: 'plaza/square', es: 'la plaza' },
	{ en: 'restaurant', es: 'el restaurante' },
	{ en: 'school', es: 'la escuela' },
	{ en: 'stadium', es: 'el estadio' },
	{ en: 'store', es: 'la tienda' },
	{ en: 'synagogue', es: 'la sinagoga' },
	{ en: 'taco stand/restaurant', es: 'la taquería' },
	{ en: 'theater', es: 'el teatro' },
	{ en: 'university', es: 'la universidad' },
];

let __categoryTitle = null;
let __roundSize = 0;
let __vocabBox = [];

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
	return !((round - 1) * __roundSize >= __vocabBox.length);
}

// TODO: Update this to call the API.
export function useVocabBox(categoryTitle, roundSize) {
	if (categoryTitle !== __categoryTitle || roundSize !== __roundSize) {
		__roundSize = roundSize;
		switch (categoryTitle) {
			case 'Around-Town':
				__vocabBox = shuffle([...townVocab]);
				break;
			case 'At-the-Office':
				__vocabBox = shuffle([...officeVocab]);
				break;
			case 'Colors':
				__vocabBox = shuffle([...colorsVocab]);
				break;
			case 'Literature':
				__vocabBox = shuffle([...literatureVocab]);
				break;
			case 'Top-50-Verbs':
				__vocabBox = shuffle([...top50Verbs]);
				break;
			default:
				console.error(
					'No vocabulary to match the provided category title: ' + categoryTitle
				);
				break;
		}
	}
	return { getRound, hasRound };
}
