import { useEffect, useState } from 'react';
import { shuffle } from 'utilities/GameUtil';
import { useVocabBox } from 'hooks/useVocabBox';

/** Custom hook containing the logic for running the two column match challenge
 * @param {string} categoryTitle
 * @param {number} roundSize
 */
export function useTcMatchRunner(categoryTitle, roundSize) {
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

	const vocabBox = useVocabBox(categoryTitle, roundSize);

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
					return newState;
				});
				setColumns(newColumns);
				setGameState((prev) => {
					const newState = { ...prev };
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
	}, [gameState]);

	return { columns, selectLeftColumn, selectRightColumn, gameState };
}
