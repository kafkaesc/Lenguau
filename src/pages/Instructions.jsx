import H2 from 'elements/H2';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

export default function Instructions() {
	const en = (
		<div className="mt-2">
			<H2>Duo Match</H2>
			<P>
				The Duo Match exercise will present two columns of vocabulary: English
				on the left and Spanish on the right. You can match pairs by clicking
				the matching buttons in the left and right columns. Once all pairs on
				screen have been matched, another round will be loaded. After yuo have
				matched all items in the vocabulary set the game will finish.
			</P>
			<H2>Grid Match</H2>
			<P>
				The Grid Match exercise will present a grid of buttons&mdash;4x3 on
				desktop and 3x4 on mobile. Half the buttons will be in Spanish and the
				other half will be the matching English word. You can click any two
				buttons at a time to make a match. Once all 12 buttons have been
				correctly matched a new round will load with 12 new buttons. Once all
				vocabulary has been matched for the selected category the game will
				finish.
			</P>
		</div>
	);
	const es = (
		<>
			<H2>Combinar los Dúos</H2>
			<P>La caja fue, como dije, oblanga</P>
			<H2>Combinar en la Cuadrícula</H2>
			<P>La caja fue, como dije, oblanga</P>
		</>
	);

	return (
		<AppBody>
			<PageTitle>
				<LenguaSpan en="Instructions" es="Las Instrucciones" />
			</PageTitle>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<LenguaSpan en={en} es={es} />
		</AppBody>
	);
}
