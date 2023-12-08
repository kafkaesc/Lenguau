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
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});
	const [gameState, setGameState] = useState({
		cleared: 0,
		correct: 0,
		finished: false,
		round: 1,
		wrong: 0,
	});

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
			setGameState((prev) => {
				const newState = { ...prev };
				newState.cleared += 1;
				newState.correct += 1;
				return newState;
			});
			lValue.cleared = true;
			rValue.cleared = true;
			clearSelected();
		}
		if (checkMismatch()) {
			setGameState((prev) => {
				const newState = { ...prev };
				newState.wrong += 1;
				return newState;
			});
			clearSelected();
		}
	}, [lValue, rValue]);

	useEffect(() => {
		if (vocabBox && gameState.cleared === columns.l.length) {
			if (vocabBox.hasRound(gameState.round + 1)) {
				let newColumns = [];
				const roundVocab = vocabBox.getRound(gameState.round + 1);
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
				setGameState((prev) => {
					const newState = { ...prev };
					newState.cleared = 0;
					newState.round += 1;
					return newState;
				});
				setColumns(newColumns);
			} else {
				setGameState((prev) => {
					const newState = { ...prev };
					newState.finished = true;
					return newState;
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameState]);

	useEffect(() => {
		if (vocabBox) {
			const vocabList = vocabBox.getRound(1).map((vo) => {
				return { ...vo, cleared: false };
			});
			const newCols = {
				l: shuffle(vocabList),
				r: shuffle(vocabList),
			};
			setColumns(newCols);
			setGameState((prev) => {
				const newState = { ...prev };
				newState.finished = false;
				newState.round = 1;
				return newState;
			});
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
					Round: {gameState.round}; Correct: {gameState.correct}; Wrong:{' '}
					{gameState.wrong};
				</P>
			</div>
			{gameState.finished ? (
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
