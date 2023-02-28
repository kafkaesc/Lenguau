import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

export default function Instructions() {
	return (
		<AppBody>
			<PageTitle>
				<LenguaSpan en="Instructions" es="Las Instrucciones" />
			</PageTitle>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<P>How to use this project to practice</P>
		</AppBody>
	);
}
