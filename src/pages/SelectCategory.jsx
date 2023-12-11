import AppBody from 'layout/AppBody';
import CategoryMenu from 'layout/CategoryMenu';
import LenguaSpan from 'elements/LenguaSpan';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

/**
 * @returns {JSX.Element} Page-level JSX component for selecting a vocabulary category
 */
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
