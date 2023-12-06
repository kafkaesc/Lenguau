import { useEffect, useState } from 'react';
import AppBody from 'layout/AppBody';
import Button from 'elements/Button';
import LenguaSpan from 'elements/LenguaSpan';
import PageTitle from 'layout/PageTitle';
import TcMatchSingleColumn from 'components/TcMatchSingleColumn';

// TODO: Move tutorialData and tutorialSteps to the Lenguau API
const tutorialData = {
	l: [
		{ cleared: false, en: 'dog', es: 'el perro', highlight: true },
		{ cleared: false, en: 'cat', es: 'el gato' },
	],
	r: [
		{ cleared: false, en: 'cat', es: 'el gato' },
		{ cleared: false, en: 'dog', es: 'el perro' },
	],
};

const tutorialSteps = [
	{
		languageCode: 'en',
		val: 'dog',
		uiInstruction: {
			en: "Click on 'dog' to select a word in English",
			es: "Oprima en 'dog' para seleccionar una palabra en inglés",
		},
	},
	{
		languageCode: 'es',
		val: 'el perro',
		uiInstruction: {
			en: "Click on 'el perro' to select the matching word in Spanish",
			es: "Oprima en 'el perro' para seleccionar la palabra que hacen juego en español",
		},
	},
	{
		languageCode: 'es',
		val: 'el gato',
		uiInstruction: {
			en: "Click on 'el gato' to select a word in Spanish",
			es: "Oprima en 'el gato' para seleccionar una palabra en español",
		},
	},
	{
		languageCode: 'en',
		val: 'cat',
		uiInstruction: {
			en: "Click on 'cat' to select the matching word in English",
			es: "Oprima en 'cat' para seleccionar la palabra que hacen juego en inglés",
		},
	},
];

export default function TcMatchTutorial() {
	const [step, setStep] = useState(0);
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});

	function highlightNextButton() {
		if (columns && columns.l) {
			const newL = columns.l.map((li) => {
				tutorialSteps[step].languageCode === 'en' &&
				tutorialSteps[step].val === li.en
					? (li.highlight = true)
					: (li.highlight = false);
				return li;
			});
			const newR = columns.r.map((ri) => {
				tutorialSteps[step].languageCode === 'es' &&
				tutorialSteps[step].val === ri.es
					? (ri.highlight = true)
					: (ri.highlight = false);
				return ri;
			});
			setColumns({ l: newL, r: newR });
		}
	}

	function takeNextStep() {
		setStep((prev) => (prev < tutorialSteps.length - 1 ? prev + 1 : prev));
	}

	function selectLeftColumn(val) {
		setLValue((prev) => (prev.en === val.en ? {} : val));
	}

	function selectRightColumn(val) {
		setRValue((prev) => (prev.es === val.es ? {} : val));
	}

	useEffect(() => {
		highlightNextButton();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [step]);

	useEffect(() => {
		setColumns(tutorialData);
	}, []);

	return (
		<AppBody>
			<div>
				<PageTitle>
					<LenguaSpan
						en={'Duo Match Tutorial'}
						es={'El Tutorial de Combinar los Dúos'}
					/>
				</PageTitle>
			</div>
			<div className="h-12 text-center">
				<span>
					<div className="table-cell h-12 mx-2 align-middle">
						<LenguaSpan
							en={tutorialSteps[step].uiInstruction.en}
							es={tutorialSteps[step].uiInstruction.es}
						/>
					</div>
				</span>
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
			<div className="text-center">
				{/* TODO: Remove this when buttons themselves are working to move the tutorial forward */}
				<Button onClick={takeNextStep}>Next</Button>
				<Button onClick={() => setStep(0)}>Reset</Button>
				<br />
				step: {step}; tutorialSteps.length: {tutorialSteps.length};
			</div>
		</AppBody>
	);
}
