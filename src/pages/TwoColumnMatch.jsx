import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLenguaApi } from 'context/LenguaApiContext';
import { shuffle } from 'utilities/GameUtil';

import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import PageTitle from 'layout/PageTitle';

import TcMatchSingleColumn from 'components/TcMatchSingleColumn';

export default function TwoColumnMatch() {
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [correctCount, setCorrectCount] = useState(0);
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});
	const [vocabularyTitle, setVocabularyTitle] = useState('Vocabulary Practice');
	const [wrongCount, setWrongCount] = useState(0);

	const { categoryTitle } = useParams();
	const apiBase = useLenguaApi();

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
			clearSelected();
		}
		if (checkMismatch()) {
			setWrongCount((prev) => prev + 1);
			clearSelected();
		}
	}, [lValue, rValue]);

	useEffect(() => {
		fetch(`${apiBase}vocab/${categoryTitle}`)
			.then((res) => res.json())
			.then((data) => {
				setVocabularyTitle(data.title);
				const newCols = {
					l: shuffle(data.vocabList),
					r: shuffle(data.vocabList),
				};
				setColumns(newCols);
			});
	}, [apiBase, categoryTitle]);

	return (
		<AppBody>
			<div className="w-full">
				<PageTitle>
					<LenguaSpan en={vocabularyTitle.en} es={vocabularyTitle.es} />
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
