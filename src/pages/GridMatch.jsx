import { useEffect, useState } from 'react';

import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';

import GridMatchButton from 'components/GridMatchButton';

const colorsVocab = [
	{ en: 'black', es: 'negro/a' },
	{ en: 'blue', es: 'azul' },
	{ en: 'gold', es: 'dorado/a' },
	{ en: 'gray', es: 'gris' },
	{ en: 'green', es: 'verde' },
	{ en: 'orange', es: 'anaranjado/a' },
];

const debug = true;

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

	// TODO: Undo the selection when a selected value is clicked again
	function selectValue(val) {
		if (!valueA.en) {
			setValueA(val);
		} else {
			setValueB(val);
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
		if (!vocab || vocab.length === 0) {
			let shuffledVocab = [];
			shuffledVocab = colorsVocab.flatMap((cv) => {
				return [
					{ languageCode: 'en', ...cv },
					{ languageCode: 'es', ...cv },
				];
			});
			// TODO: Shuffle the shuffledVocab
			setVocab(shuffledVocab);
		}
	}, [vocab]);

	return (
		<AppBody>
			<div className="w-full">
				<H1>Grid Match</H1>
			</div>
			<div className="w-full">
				{vocab.map((vo, i) => (
					<GridMatchButton
						key={`${i}-${vo.en}-${vo.es}`}
						languageCode={vo.languageCode}
						onClick={() => selectValue(vo)}
						vocabObj={vo}
					/>
				))}
			</div>
			{debug && (
				<P>
					<code>
						Correct: {correctCount}; Wrong: {wrongCount}; Debug: A: {valueA.en}-
						{valueA.es}; B: {valueB.en}-{valueB.es};
					</code>
				</P>
			)}
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
