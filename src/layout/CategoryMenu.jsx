import { useLocation } from 'react-router-dom';

import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function CategoryMenu() {
	const {
		categoryList: categories,
	} = require(`assets/offline-data/set-categories.json`);
	const gamePath = useLocation().pathname.split('/')[1];
	return (
		<ul>
			{categories.map((ca) => {
				return (
					<MenuButton to={`/${gamePath}/${ca.kebab}`}>
						<LenguaSpan en={ca.en} es={ca.es} />
					</MenuButton>
				);
			})}
		</ul>
	);
}
