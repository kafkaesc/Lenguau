import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shuffle } from 'utilities/GameUtil';

import H1 from 'elements/H1';
import LenguaSpan from 'elements/LenguaSpan';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';

import GmButton from 'components/GmButton';

const colorsVocab = [
	{ en: 'black', es: 'negro/a' },
	{ en: 'blue', es: 'azul' },
	{ en: 'gold', es: 'dorado/a' },
	{ en: 'gray', es: 'gris' },
	{ en: 'green', es: 'verde' },
	{ en: 'orange', es: 'anaranjado/a' },
];

const literatureVocab = [
	{ en: 'book', es: 'el libro' },
	{ en: 'character', es: 'el personaje' },
	{ en: 'comedy', es: 'la comedia' },
	{ en: 'drama', es: 'el drama' },
	{ en: 'genre', es: 'el género' },
	{ en: 'literature', es: 'la literatura' },
];

const officeVocab = [
	{ en: 'boss', es: 'el/la jefe/a' },
	{ en: 'calculator', es: 'la calculadora' },
	{ en: 'chair', es: 'la silla' },
	{ en: 'computer', es: 'la computadora' },
	{ en: 'coworker', es: 'el/la colega' },
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

export default function GridMatch() {
	const [correctCount, setCorrectCount] = useState(0);
	const [valueA, setValueA] = useState({});
	const [valueB, setValueB] = useState({});
	const [vocab, setVocab] = useState([]);
	const [wrongCount, setWrongCount] = useState(0);

	const { categoryTitle } = useParams();

	function clearSelection() {
		setValueA({});
		setValueB({});
	}

	function selectValue(val, index) {
		if (index === valueA.index) {
			setValueA({});
		} else if (!valueA.en) {
			setValueA({ index: index, ...val });
		} else {
			setValueB({ index: index, ...val });
		}
	}

	useEffect(() => {
		if (valueA.en && valueB.en && valueA.en === valueB.en) {
			setCorrectCount((prev) => prev + 1);
			clearSelection();
		} else if (valueA.en && valueB.en && valueA.en !== valueB.en) {
			setWrongCount((prev) => prev + 1);
			clearSelection();
		}
	}, [valueA, valueB]);

	useEffect(() => {
		let vocabList = [];
		switch (categoryTitle) {
			case 'Around-Town':
				vocabList = [...townVocab];
				break;
			case 'At-the-Office':
				vocabList = [...officeVocab];
				break;
			case 'Colors':
				vocabList = [...colorsVocab];
				break;
			case 'Literature':
				vocabList = [...literatureVocab];
				break;
			default:
				console.error(
					'No vocabulary to match the provided category title: ' + categoryTitle
				);
				break;
		}
		vocabList = vocabList.flatMap((cv) => {
			return [
				{ languageCode: 'en', ...cv },
				{ languageCode: 'es', ...cv },
			];
		});
		setVocab(shuffle(vocabList));
	}, [categoryTitle]);

	return (
		<AppBody>
			<div className="w-full">
				<H1>
					<LenguaSpan en="Grid Match" es="Combinar en la Cuadrícula" />
				</H1>
				<P className="text-center">
					Correct: {correctCount}; Wrong: {wrongCount};
				</P>
			</div>
			<div className="w-full">
				{vocab.map((vo, i) => (
					<GmButton
						key={`${i}-${vo.en}-${vo.es}`}
						languageCode={vo.languageCode}
						onClick={() => selectValue(vo, i)}
						selected={i === valueA.index || i === valueB.index}
						vocabObj={vo}
					/>
				))}
			</div>
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
