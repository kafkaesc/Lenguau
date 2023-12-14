import { useParams } from 'react-router-dom';

import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';
import AppBody from 'layout/AppBody';
import Confetti from 'layout/Confetti';
import PageTitle from 'layout/PageTitle';
import GmGrid from 'components/GmGrid';

import { useGmRunner } from 'hooks/useGmRunner';

const ROUND_SIZE = 6;

export default function GridMatch() {
	const { categoryTitle } = useParams();
	const { bilingualTitle, gameState, grid, selectValue, valueA, valueB } =
		useGmRunner(categoryTitle, ROUND_SIZE);

	return (
		<AppBody>
			<div className="w-full">
				<PageTitle>
					<LenguaSpan
						en={bilingualTitle.en || ''}
						es={bilingualTitle.es || ''}
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
