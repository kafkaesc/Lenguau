import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function SelectCategory({ toggleMenu }) {
	return (
		<ul>
			<MenuButton to="/Match">
				<LenguaSpan en="Around Town" es="En el Pueblo" />
			</MenuButton>
			<MenuButton to="/Match">
				<LenguaSpan en="At the Office" es="En la Oficina" />
			</MenuButton>
			<MenuButton to="/Match">
				<LenguaSpan en="Literature" es="La Literatura" />
			</MenuButton>
			<MenuButton onClick={toggleMenu}>
				<LenguaSpan en="Back" es="Volver" />
			</MenuButton>
		</ul>
	);
}
