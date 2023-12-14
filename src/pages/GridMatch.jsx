import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';
import AppBody from 'layout/AppBody';
import Confetti from 'layout/Confetti';
import PageTitle from 'layout/PageTitle';
import GmGrid from 'components/GmGrid';
import { useGameAction } from 'hooks/useGameAction';
import { useVocabBox } from 'hooks/useVocabBox';

const ROUND_SIZE = 6;

export default function GridMatch() {
	// TODO: Break game logic out into a hook
	const [grid, setGrid] = useState([]);
	const [valueA, setValueA] = useState({});
	const [valueB, setValueB] = useState({});
	const [gameState, setGameState] = useState({
		cleared: 0,
		correct: 0,
		finished: false,
		round: 1,
		wrong: 0,
	});

	const { categoryTitle } = useParams();
	const { shuffle } = useGameAction();
	const vocabBox = useVocabBox(categoryTitle, ROUND_SIZE);

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
		if (vocabBox) {
			let vocabList = vocabBox.getRound(1).map((vo) => {
				return { ...vo, cleared: false };
			});
			vocabList = vocabList.flatMap((vo) => {
				return [
					{ cleared: false, languageCode: 'en', ...vo },
					{ cleared: false, languageCode: 'es', ...vo },
				];
			});
			setGrid(shuffle(vocabList));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryTitle, vocabBox.title]);

	useEffect(() => {
		function tagCleared() {
			const newVocab = grid.map((vo) => {
				if (
					(vo.languageCode === valueA.languageCode && vo.en === valueA.en) ||
					(vo.languageCode === valueB.languageCode && vo.en === valueB.en)
				) {
					vo.cleared = true;
				}
				return vo;
			});
			setGrid(newVocab);
		}

		if (valueA.en && valueB.en && valueA.en === valueB.en) {
			setGameState((prev) => {
				const newState = { ...prev };
				newState.correct += 1;
				newState.cleared += 1;
				return newState;
			});
			tagCleared();
			clearSelection();
		} else if (valueA.en && valueB.en && valueA.en !== valueB.en) {
			setGameState((prev) => {
				const newState = { ...prev };
				newState.wrong += 1;
				return newState;
			});
			clearSelection();
		}
	}, [valueA, valueB, grid]);

	useEffect(() => {
		if (grid.length && gameState.cleared * 2 === grid.length) {
			if (vocabBox.hasRound(gameState.round + 1)) {
				let newVocab = vocabBox.getRound(gameState.round + 1);
				newVocab = newVocab.flatMap((vo) => {
					return [
						{ cleared: false, languageCode: 'en', ...vo },
						{ cleared: false, languageCode: 'es', ...vo },
					];
				});
				setGrid(shuffle(newVocab));
				setGameState((prev) => {
					const newState = { ...prev };
					newState.cleared = 0;
					newState.round += 1;
					return newState;
				});
			} else {
				setGameState((prev) => {
					const newState = { ...prev };
					newState.finished = true;
					return newState;
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameState.cleared]);

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
					<LenguaSpan en="Round" es="La Ronda" />: {gameState.round};{' '}
					<LenguaSpan en="Correct" es="Correcto" />: {gameState.correct};{' '}
					<LenguaSpan en="Wrong" es="Equivocado" />: {gameState.wrong};
				</P>
			</div>
			<div className="w-full">
				{gameState.finished ? (
					<>
						<Confetti />
						<P className="text-center text-7xl">
							<LenguaSpan en="Finished!" es="¡Terminado!" />
						</P>
					</>
				) : (
					<GmGrid
						select={selectValue}
						selectedA={valueA}
						selectedB={valueB}
						vocab={grid}
					/>
				)}
			</div>
		</AppBody>
	);
}
