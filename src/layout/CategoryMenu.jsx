import { useLocation } from 'react-router-dom';

import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function CategoryMenu() {
	const gamePath = useLocation().pathname.split('/')[1];
	return (
		<ul>
			<MenuButton to={`/${gamePath}/Around-Town`}>
				<LenguaSpan en="Around Town" es="En el Pueblo" />
			</MenuButton>
			<MenuButton to={`/${gamePath}/At-the-Office`}>
				<LenguaSpan en="At the Office" es="En la Oficina" />
			</MenuButton>
			<MenuButton to={`/${gamePath}/Colors`}>
				<LenguaSpan en="Colors" es="De Colores" />
			</MenuButton>
			<MenuButton to={`/${gamePath}/Literature`}>
				<LenguaSpan en="Literature" es="La Literatura" />
			</MenuButton>
			{/*<MenuButton to={`/${gamePath}/Top-50-Verbs`}>
				<LenguaSpan en="Top 50 Verbs" es="50 Verbos Principales" />
			</MenuButton>*/}
		</ul>
	);
}
