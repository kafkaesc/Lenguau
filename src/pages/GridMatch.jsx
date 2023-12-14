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
	const [clearedCount, setClearedCount] = useState(0);
	const [correctCount, setCorrectCount] = useState(0);
	const [finished, setFinished] = useState(false);
	const [round, setRound] = useState(1);
	const [valueA, setValueA] = useState({});
	const [valueB, setValueB] = useState({});
	const [vocab, setVocab] = useState([]);
	const [wrongCount, setWrongCount] = useState(0);

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
			setVocab(shuffle(vocabList));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryTitle, vocabBox.title]);

	useEffect(() => {
		function tagCleared() {
			const newVocab = vocab.map((vo) => {
				if (
					(vo.languageCode === valueA.languageCode && vo.en === valueA.en) ||
					(vo.languageCode === valueB.languageCode && vo.en === valueB.en)
				) {
					vo.cleared = true;
				}
				return vo;
			});
			setVocab(newVocab);
		}

		if (valueA.en && valueB.en && valueA.en === valueB.en) {
			setCorrectCount((prev) => prev + 1);
			setClearedCount((prev) => prev + 1);
			tagCleared();
			clearSelection();
		} else if (valueA.en && valueB.en && valueA.en !== valueB.en) {
			setWrongCount((prev) => prev + 1);
			clearSelection();
		}
	}, [valueA, valueB, vocab]);

	useEffect(() => {
		if (vocab.length && clearedCount * 2 === vocab.length) {
			if (vocabBox.hasRound(round + 1)) {
				let newVocab = vocabBox.getRound(round + 1);
				newVocab = newVocab.flatMap((vo) => {
					return [
						{ cleared: false, languageCode: 'en', ...vo },
						{ cleared: false, languageCode: 'es', ...vo },
					];
				});
				setVocab(shuffle(newVocab));
				setClearedCount(0);
				setRound((prev) => prev + 1);
			} else {
				setFinished(true);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clearedCount]);

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
					<LenguaSpan en="Round" es="La Ronda" />: {round};{' '}
					<LenguaSpan en="Correct" es="Correcto" />: {correctCount};{' '}
					<LenguaSpan en="Wrong" es="Equivocado" />: {wrongCount};
				</P>
			</div>
			<div className="w-full">
				{finished ? (
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
						vocab={vocab}
					/>
				)}
			</div>
		</AppBody>
	);
}
