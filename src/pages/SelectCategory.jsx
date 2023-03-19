import AppBody from 'layout/AppBody';
import CategoryMenu from 'layout/CategoryMenu';
import LenguaSpan from 'elements/LenguaSpan';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

export default function SelectCategory() {
	return (
		<AppBody>
			<PageTitle>
				<LenguaSpan en="Select a Category" es="Seleccionar una Categoría" />
			</PageTitle>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<CategoryMenu />
		</AppBody>
	);
}
