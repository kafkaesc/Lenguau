import { useEffect, useState } from 'react';
import AppBody from 'layout/AppBody';
import Button from 'elements/Button';
import LenguaSpan from 'elements/LenguaSpan';
import PageTitle from 'layout/PageTitle';
import TcMatchSingleColumn from 'components/TcMatchSingleColumn';
import { useTcStepEnforcer } from 'hooks/useTcStepEnforcer';

export default function TcMatchTutorial() {
	const { nextStep, restart, step, tutorialGameData } = useTcStepEnforcer();
	const [columns, setColumns] = useState({ l: [], r: [] });
	const [lValue, setLValue] = useState({});
	const [rValue, setRValue] = useState({});

	function highlightNextButton() {
		if (columns && columns.l) {
			const newL = columns.l.map((li) => {
				step.languageCode === 'en' && step.val === li.en
					? (li.highlight = true)
					: (li.highlight = false);
				return li;
			});
			const newR = columns.r.map((ri) => {
				step.languageCode === 'es' && step.val === ri.es
					? (ri.highlight = true)
					: (ri.highlight = false);
				return ri;
			});
			setColumns({ l: newL, r: newR });
		}
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
		setColumns(tutorialGameData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
						<LenguaSpan en={step.uiInstruction.en} es={step.uiInstruction.es} />
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
				<Button onClick={nextStep}>Next</Button>
				<Button onClick={() => restart()}>Reset</Button>
				<br />
			</div>
		</AppBody>
	);
}
