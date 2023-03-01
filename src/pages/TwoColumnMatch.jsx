import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shuffle } from 'utilities/GameUtil';

import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import PageTitle from 'layout/PageTitle';

import TcMatchSingleColumn from 'components/TcMatchSingleColumn';

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
	{ en: 'comedy', es: 'la comedia' },
	{ en: 'drama', es: 'el drama' },
	{ en: 'fantasy', es: 'la literatura fantastica' },
	{ en: 'genre', es: 'el género' },
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

export default function TwoColumnMatch() {
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [clearedCount, setClearedCount] = useState(0);
	const [correctCount, setCorrectCount] = useState(0);
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});
	const [wrongCount, setWrongCount] = useState(0);

	const { categoryTitle } = useParams();

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
			setCorrectCount((prev) => prev + 1);
			lValue.cleared = true;
			rValue.cleared = true;
			setClearedCount((prev) => prev + 1);
			clearSelected();
		}
		if (checkMismatch()) {
			setWrongCount((prev) => prev + 1);
			clearSelected();
		}
	}, [lValue, rValue]);

	useEffect(() => {
		if (clearedCount === columns.l.length) {
			const newColumns = {};
			newColumns.l = columns.l.map((vo) => {
				return { ...vo, cleared: false };
			});
			newColumns.r = columns.r.map((vo) => {
				return { ...vo, cleared: false };
			});
			setClearedCount(0);
			setColumns(newColumns);
		}
		// TODO: Make this load n rows at a time from a vocabulary list.
		// The use of columns.l.length will be replaced with a const value.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clearedCount]);

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
		const newCols = {
			l: shuffle(vocabList),
			r: shuffle(vocabList),
		};
		setColumns(newCols);
	}, [categoryTitle]);

	return (
		<AppBody>
			<div className="w-full">
				<PageTitle>
					<LenguaSpan en="Duo Match" es="Combinar los Dúos" />
				</PageTitle>
				<P className="text-center">
					Correct: {correctCount}; Wrong: {wrongCount};
				</P>
			</div>
			<div className="inline-block w-1/2 p-1">
				<TcMatchSingleColumn
					languageCode="en"
					select={selectLeftColumn}
					selectedVocab={lValue}
					vocab={columns.l}
				/>
			</div>
			<div className="inline-block w-1/2 p-1">
				<TcMatchSingleColumn
					languageCode="es"
					select={selectRightColumn}
					selectedVocab={rValue}
					vocab={columns.r}
				/>
			</div>
		</AppBody>
	);
}
