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
				the matching buttons in the left and right columns. When all pairs on
				screen have been matched, another round will load. After you have
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
		<div className="mt-2">
			<H2>Combinar los Dúos</H2>
			<P>
				El ejercicio Combinar los Dúos presenta dos columnas de vocabulario:
				inglés a la izquierda y español a la derecha. Puedes combinar los pares
				por haciendo clic en los botones que hacen juego en las columnas
				derechas e izquierdas. Cuando todos los pares en la pantalla se
				combinaron, otra ronda va a cargarse. Después de los combinas todos los
				artículos en la colección de vocabulario el juego va a acabar.
			</P>
			<H2>Combinar en la Cuadrícula</H2>
			<P>
				El ejercicio Combinar en la Cuadrícula presenta una cuadrícula de
				botones&mdash;4x3 por escritorio y 3x4 por móvil. La mitad de los
				botones son españoles y la otra mitad son ingeleses que hacen juego.
				Puedes hacer clic dos botones a tiempo para crear un par. Cuando todo de
				los 12 botones se combinaron correctamente, una ronda nueva va a cagarse
				con 12 botones nuevos. Cuando todo del vocabulario se combinaron para la
				categoría seleccionada el juego va a acabar.
			</P>
		</div>
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
