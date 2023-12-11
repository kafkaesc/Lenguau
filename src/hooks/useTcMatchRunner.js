import { useEffect, useState } from 'react';
import { shuffle } from 'utilities/GameUtil';
import { useVocabBox } from 'hooks/useVocabBox';

/** Custom hook containing the logic for running the two column match challenge
 * @param {string} categoryTitle The category of vocab for the game
 * @param {number} roundSize The amount of rows per round for the game
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

	/**
	 * Clear both the left and right column selections
	 */
	function clearSelected() {
		setLValue({});
		setRValue({});
	}

	/**
	 * @param {*} val Vocab object containing en, es, representing the
	 * matching English and Spanish words
	 *
	 * Highlight the left column item matching val
	 */
	function selectLeftColumn(val) {
		setLValue((prev) => (prev.en === val.en ? {} : val));
	}

	/**
	 * @param {*} val Vocab object containing en, es, representing the
	 * matching English and Spanish words
	 *
	 * Highlight the right column item matching val
	 */
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lValue, rValue]);

	useEffect(() => {
		if (
			vocabBox &&
			columns.l.length > 0 &&
			gameState.cleared === columns.l.length
		) {
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

	return {
		bilingualTitle: vocabBox.title,
		columns,
		lValue,
		rValue,
		selectLeftColumn,
		selectRightColumn,
		gameState,
	};
}
