import { useParams } from 'react-router-dom';

import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';
import AppBody from 'layout/AppBody';
import Confetti from 'layout/Confetti';
import PageTitle from 'layout/PageTitle';
import TcMatchSingleColumn from 'components/TcMatchSingleColumn';

import { useTcMatchRunner } from 'hooks/useTcMatchRunner';

const ROUND_SIZE = 6;

/**
 * TwoColumnMatch will present two columns of English and Spanish words on
 * the left and right respectively. A user can select one word at a time from
 * each column. When the two selected words are a match they will be disabled
 * and the score will increment.
 */
export default function TwoColumnMatch() {
	const { categoryTitle } = useParams();

	const {
		bilingualTitle,
		columns,
		lValue,
		rValue,
		selectLeftColumn,
		selectRightColumn,
		gameState,
	} = useTcMatchRunner(categoryTitle, ROUND_SIZE);

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
					Round: {gameState.round}; Correct: {gameState.correct}; Wrong:{' '}
					{gameState.wrong};
				</P>
			</div>
			{gameState && gameState.finished ? (
				<>
					<Confetti />
					<P className="text-center text-7xl">Finished!</P>
				</>
			) : (
				<>
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
				</>
			)}
		</AppBody>
	);
}
