import { useEffect, useState } from 'react';

import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';

import TwoColumnMatchSingleColumn from 'components/TwoColumnMatchSingleColumn';

const vocabList = [
	{ en: 'book', es: 'el libro' },
	{ en: 'comedy', es: 'la comedia' },
	{ en: 'drama', es: 'el drama' },
	{ en: 'fantasy', es: 'la literatura fantastica' },
	{ en: 'genre', es: 'el género' },
];

export default function TwoColumnMatch() {
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [correctCount, setCorrectCount] = useState(0);
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});
	const [wrongCount, setWrongCount] = useState(0);

	function clearSelected() {
		setLValue({});
		setRValue({});
	}

	function selectLeftColumn(val) {
		setLValue((prev) => (prev.en === val.en ? {} : val));
	}

	function selectRightColumn(val) {
		setRValue((prev) => (prev.es === val.es ? {} : val));
	}

	function shuffle(array) {
		if (!array || !array.length) {
			console.error(
				'Non-array argument passed to shuffle in the TwoColumnMatch component'
			);
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

	useEffect(() => {
		const checkMatch = () => {
			if (lValue.en && lValue.en === rValue.en && lValue.es === rValue.es) {
				return true;
			}
			return false;
		};

		const checkMismatch = () => {
			if (
				lValue.en &&
				rValue.en &&
				(lValue.en !== rValue.en || lValue.es !== rValue.es)
			) {
				return true;
			}
			return false;
		};

		if (checkMatch()) {
			setCorrectCount((val) => val + 1);
			clearSelected();
		}
		if (checkMismatch()) {
			setWrongCount((val) => val + 1);
			clearSelected();
		}
	}, [lValue, rValue]);

	useEffect(() => {
		const newCols = {
			l: shuffle(vocabList),
			r: shuffle(vocabList),
		};
		setColumns(newCols);
	}, []);

	return (
		<AppBody>
			<div className="w-full">
				<H1>Literature</H1>
				<P className="text-center">
					Correct: {correctCount}; Wrong: {wrongCount};
				</P>
			</div>
			<div className="inline-block w-1/2 p-1">
				<TwoColumnMatchSingleColumn
					languageCode="en"
					select={selectLeftColumn}
					selectedVocab={lValue}
					vocab={columns.l}
				/>
			</div>
			<div className="inline-block w-1/2 p-1">
				<TwoColumnMatchSingleColumn
					languageCode="es"
					select={selectRightColumn}
					selectedVocab={rValue}
					vocab={columns.r}
				/>
			</div>
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
