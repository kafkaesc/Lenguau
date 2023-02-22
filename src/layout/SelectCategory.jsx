import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function SelectCategory({ toggleMenu }) {
	return (
		<ul>
			<MenuButton to="/Match/Around-Town">
				<LenguaSpan en="Around Town" es="En el Pueblo" />
			</MenuButton>
			<MenuButton to="/Match/At-the-Office">
				<LenguaSpan en="At the Office" es="En la Oficina" />
			</MenuButton>
			<MenuButton to="Match/Colors">
				<LenguaSpan en="Colors" es="De Colores" />
			</MenuButton>
			<MenuButton to="/Match/Literature">
				<LenguaSpan en="Literature" es="La Literatura" />
			</MenuButton>
			<MenuButton onClick={toggleMenu}>
				<LenguaSpan en="Back" es="Volver" />
			</MenuButton>
		</ul>
	);
}
