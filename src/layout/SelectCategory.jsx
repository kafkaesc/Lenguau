import MenuButton from 'elements/MenuButton';

export default function SelectCategory({ toggleMenu }) {
	return (
		<ul>
			<MenuButton to="/Match">Around Town</MenuButton>
			<MenuButton to="/Match">At the Office</MenuButton>
			<MenuButton onClick={toggleMenu}>Back</MenuButton>
		</ul>
	);
}
