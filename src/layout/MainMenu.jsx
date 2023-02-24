import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function MainMenu() {
	return (
		<nav>
			<ul>
				<MenuButton to="/Select-Category">
					<LenguaSpan en="Select Category" es="Seleccionar una Categoría" />
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
