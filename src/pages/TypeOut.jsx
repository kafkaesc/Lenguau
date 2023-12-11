import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from 'elements/Button';
import H2 from 'elements/H2';
import Input from 'elements/Input';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';
import AppBody from 'layout/AppBody';
import PageTitle from 'layout/PageTitle';

import { useVocabBox } from 'hooks/useVocabBox';

const ROUND_SIZE = 1;

/**
 * WIP: Intention is to have the user type a translation to match the provided word
 * @returns {JSX.Element} Page-level JSX component for the type out game
 */
export default function TypeOut() {
	// TODO: Make default value null when loading from vocabBox
	const [activeWords /*, setActiveWords*/] = useState({
		en: 'water',
		es: 'el agua',
	});
	const [correctCount, setCorrectCount] = useState(0);
	const [enteredWord, setEnteredWord] = useState('');
	//const [round, setRound] = useState(1);
	const [wrongCount, setWrongCount] = useState(0);

	const { categoryTitle } = useParams();
	const vocabBox = useVocabBox(categoryTitle, ROUND_SIZE);

	console.log('vocabBox: ', vocabBox);

	function matchesValidEnglishAlternatives(guess, englishString) {
		return false;
	}

	function matchesValidSpanishAlternatives(guess, spanishString) {
		return false;
	}

	function hasValidGuess(guess, languageCode) {
		if (languageCode === 'en') {
			if (
				guess === activeWords.es ||
				matchesValidSpanishAlternatives(guess, activeWords.es)
			) {
				return true;
			}
		} else if (languageCode === 'es') {
			if (
				guess === activeWords.en ||
				matchesValidEnglishAlternatives(guess, activeWords.en)
			) {
				return true;
			}
		}
		return false;
	}

	function onSubmit(ev) {
		// Prevent browsers from reloading the page
		ev.preventDefault();

		// TODO: Check if the submitted answer is valid
		if (hasValidGuess('guess', 'es')) {
			setCorrectCount((prev) => prev + 1);
		} else {
			setWrongCount((prev) => prev + 1);
		}

		console.log('fn onSubmit');
	}

	useEffect(() => {
		if (vocabBox) {
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [categoryTitle, vocabBox.title]);

	return (
		<AppBody>
			<PageTitle>
				<LenguaSpan en="Type Out" es="Tecleala" />
			</PageTitle>
			<P className="text-center">
				Correct: {correctCount}; Wrong: {wrongCount};
			</P>
			<form onSubmit={onSubmit}>
				<H2>
					{activeWords.en} / {activeWords.es}
				</H2>
				<Input
					name="enteredWord"
					onChange={(ev) => setEnteredWord(ev.target.value)}
					placeholder="Enter the translation"
					type="text"
					value={enteredWord}
				/>
				<Button className="block mx-auto" type="submit">
					Submit
				</Button>
			</form>
			{/*<code>Submitted answer: ; Acceptable guesses: en: ; es: ;</code>*/}
		</AppBody>
	);
}
