import { useEffect, useState } from 'react';

import AppBody from 'layout/AppBody';
import LenguaSpan from 'elements/LenguaSpan';
import PageTitle from 'layout/PageTitle';
import TcMatchSingleColumn from 'components/TcMatchSingleColumn';

const tutorialData = {
	l: [
		{ en: 'dog', es: 'el perro', cleared: false },
		{ en: 'cat', es: 'el gato', cleared: false },
	],
	r: [
		{ en: 'cat', es: 'el gato', cleared: false },
		{ en: 'dog', es: 'el perro', cleared: false },
	],
};

export default function TcMatchTutorial() {
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});

	function selectLeftColumn(val) {
		setLValue((prev) => (prev.en === val.en ? {} : val));
	}

	function selectRightColumn(val) {
		setRValue((prev) => (prev.es === val.es ? {} : val));
	}

	useEffect(() => {
		setColumns(tutorialData);
	}, []);

	return (
		<AppBody>
			<div className="w-full">
				<PageTitle>
					<LenguaSpan
						en={'Duo Match Tutorial'}
						es={'El Tutorial de Combinar los Dúos'}
					/>
				</PageTitle>
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
