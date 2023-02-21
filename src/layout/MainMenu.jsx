import { useState } from 'react';

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
					<MenuButton onClick={toggleMainMenu}>Select Category</MenuButton>
					<MenuButton to="/Instructions">Instructions</MenuButton>
					<MenuButton to="/About">About</MenuButton>
				</ul>
			) : (
				<SelectCategory toggleMenu={toggleMainMenu} />
			)}
		</nav>
	);
}
