import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function MainMenu() {
	return (
		<nav>
			<ul>
				<MenuButton to="/DuoMatch/Select-Category">
					<LenguaSpan en="Duo Match" es="Combinar los Dúos" />
				</MenuButton>
				<MenuButton to="/GridMatch/Select-Category">
					<LenguaSpan en="Grid Match" es="Combinar en la Cuadrícula" />
				</MenuButton>
				<MenuButton to="/Instructions">
					<LenguaSpan en="Instructions" es="Las Instrucciones" />
				</MenuButton>
				<MenuButton to="/About">
					<LenguaSpan en="About" es="Sobre Este Sitio" />
				</MenuButton>
			</ul>
		</nav>
	);
}
