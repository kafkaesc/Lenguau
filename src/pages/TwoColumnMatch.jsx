import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shuffle } from 'utilities/GameUtil';
import { useVocabBox } from 'hooks/useVocabBox';

import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import Confetti from 'layout/Confetti';
import PageTitle from 'layout/PageTitle';

import TcMatchSingleColumn from 'components/TcMatchSingleColumn';

const ROUND_SIZE = 6;

export default function TwoColumnMatch() {
	// TODO: Break game logic out into a hook
	const [clearedCount, setClearedCount] = useState(0);
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [correctCount, setCorrectCount] = useState(0);
	const [finished, setFinished] = useState(false);
	const [lValue, setLValue] = useState({});
	const [round, setRound] = useState(1);
	const [rValue, setRValue] = useState({});
	const [wrongCount, setWrongCount] = useState(0);

	const { categoryTitle } = useParams();
	const vocabBox = useVocabBox(categoryTitle, ROUND_SIZE);

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
		if (vocabBox && clearedCount === columns.l.length) {
			if (vocabBox.hasRound(round + 1)) {
				let newColumns = [];
				const roundVocab = vocabBox.getRound(round + 1);
				newColumns.l = shuffle(
					roundVocab.map((vo) => {
						return { ...vo, cleared: false };
					})
				);
				newColumns.r = shuffle(
					roundVocab.map((vo) => {
						return { ...vo, cleared: false };
					})
				);
				setClearedCount(0);
				setColumns(newColumns);
				setRound((prev) => prev + 1);
			} else {
				setFinished(true);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clearedCount]);

	useEffect(() => {
		if (vocabBox) {
			const vocabList = vocabBox.getRound(1).map((vo) => {
				return { ...vo, cleared: false };
			});
			const newCols = {
				l: shuffle(vocabList),
				r: shuffle(vocabList),
			};
			console.log('newCols: ', newCols);
			setColumns(newCols);
			setFinished(false);
			setRound(1);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryTitle, vocabBox.title]);

	return (
		<AppBody>
			<div className="w-full">
				<PageTitle>
					<LenguaSpan
						en={vocabBox.title.en || ''}
						es={vocabBox.title.es || ''}
					/>
				</PageTitle>
				<P className="text-center">
					Round: {round}; Correct: {correctCount}; Wrong: {wrongCount};
				</P>
			</div>
			{finished ? (
				<>
					<Confetti />
					<P className="text-center text-7xl">Finished!</P>
				</>
			) : (
				<>
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
				</>
			)}
		</AppBody>
	);
}
