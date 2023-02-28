import H1 from 'elements/H1';

import AppBody from 'layout/AppBody';
import LenguaSpan from 'elements/LenguaSpan';
import LenguaToggle from 'layout/LenguaToggle';
import CategoryMenu from 'layout/CategoryMenu';

export default function SelectCategory() {
	return (
		<AppBody>
			<H1>
				<LenguaSpan en="Select a Category" es="Selecionar una Categoría" />
			</H1>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<CategoryMenu />
		</AppBody>
	);
}
