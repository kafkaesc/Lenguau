import { useRef, useState } from 'react';

// TODO: Move tutorialGameData and tutorialSteps to the Lenguau API
const tutorialGameData = {
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

export function useTcStepEnforcer() {
	const _step_i = useRef(0);
	const [_step, _setStep] = useState(tutorialSteps[0]);

	function nextStep() {
		_step_i.current =
			_step_i.current < tutorialSteps.length - 1
				? _step_i.current + 1
				: _step_i.current;
		_setStep({ ...tutorialSteps[_step_i.current] });
	}

	function restart() {
		_step_i.current = 0;
		_setStep({ ...tutorialSteps[0] });
	}

	return {
		nextStep,
		restart,
		step: _step,
		tutorialGameData,
	};
}
