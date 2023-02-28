import { useEffect, useState } from 'react';
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

export default function GridMatch() {
	const [correctCount, setCorrectCount] = useState(0);
	const [valueA, setValueA] = useState({});
	const [valueB, setValueB] = useState({});
	const [vocab, setVocab] = useState([]);
	const [wrongCount, setWrongCount] = useState(0);

	function clearSelection() {
		setValueA({});
		setValueB({});
	}

	// TODO: Block selecting the same item twice (great hack for points tho)
	// Undo the selection when a selected value is clicked again
	function selectValue(val) {
		if (!valueA.en) {
			setValueA(val);
		} else {
			setValueB(val);
		}
	}

	function isSelected(vocabObj) {
		return (
			(vocabObj.languageCode === 'en' &&
				(vocabObj.en === valueA.en || vocabObj.en === valueB.en)) ||
			(vocabObj.languageCode === 'es ' &&
				(vocabObj.es === valueA.es || vocabObj.es === valueB.es))
		);
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
		if (!vocab || vocab.length === 0) {
			let shuffledVocab = [];
			shuffledVocab = colorsVocab.flatMap((cv) => {
				return [
					{ languageCode: 'en', ...cv },
					{ languageCode: 'es', ...cv },
				];
			});
			setVocab(shuffle(shuffledVocab));
		}
	}, [vocab]);

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
						onClick={() => selectValue(vo)}
						selected={isSelected(vo)}
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
