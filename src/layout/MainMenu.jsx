import { useState } from 'react';

import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';
import SelectCategory from 'layout/SelectCategory';

export default function MainMenu() {
	const [isMainMenu, setIsMainMenu] = useState(true);

	function toggleMainMenu() {
		setIsMainMenu((val) => !val);
	}

	return (
		<nav>
			{isMainMenu ? (
				<ul>
					<MenuButton onClick={toggleMainMenu}>
						<LenguaSpan en="Select Category" es="Seleccionar una Categoría" />
					</MenuButton>
					<MenuButton to="/Instructions">
						<LenguaSpan en="Instructions" es="Las Instrucciones" />
					</MenuButton>
					<MenuButton to="/About">
						<LenguaSpan en="About" es="Sobre" />
					</MenuButton>
				</ul>
			) : (
				<SelectCategory toggleMenu={toggleMainMenu} />
			)}
		</nav>
	);
}
