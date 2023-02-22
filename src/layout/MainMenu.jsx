import { useState } from 'react';

import LenguaSpan from 'elements/LenguaSpan';
import SelectCategory from 'layout/SelectCategory';
import MenuButton2 from 'elements/MenuButton2';

export default function MainMenu() {
	const [isMainMenu, setIsMainMenu] = useState(true);

	function toggleMainMenu() {
		setIsMainMenu((val) => !val);
	}

	return (
		<nav>
			{isMainMenu ? (
				<ul>
					<MenuButton2 onClick={toggleMainMenu}>
						<LenguaSpan en="Select Category" es="Seleccionar una Categoría" />
					</MenuButton2>
					<MenuButton2 to="/Instructions">
						<LenguaSpan en="Instructions" es="Las Instrucciones" />
					</MenuButton2>
					<MenuButton2 to="/About">
						<LenguaSpan en="About" es="Sobre Este Sitio" />
					</MenuButton2>
				</ul>
			) : (
				<SelectCategory toggleMenu={toggleMainMenu} />
			)}
		</nav>
	);
}
