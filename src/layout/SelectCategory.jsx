import LenguaSpan from 'elements/LenguaSpan';
import MenuButton2 from 'elements/MenuButton2';

export default function SelectCategory({ toggleMenu }) {
	return (
		<ul>
			<MenuButton2 to="/Match/Around-Town">
				<LenguaSpan en="Around Town" es="En el Pueblo" />
			</MenuButton2>
			<MenuButton2 to="/Match/At-the-Office">
				<LenguaSpan en="At the Office" es="En la Oficina" />
			</MenuButton2>
			<MenuButton2 to="/Match/Literature">
				<LenguaSpan en="Literature" es="La Literatura" />
			</MenuButton2>
			<MenuButton2 onClick={toggleMenu}>
				<LenguaSpan en="Back" es="Volver" />
			</MenuButton2>
		</ul>
	);
}
