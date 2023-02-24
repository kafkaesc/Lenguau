import AppBody from 'layout/AppBody';
import LenguauTitle from 'layout/LenguauTitle';
import LenguaToggle from 'layout/LenguaToggle';
import CategoryMenu from 'layout/CategoryMenu';

export default function Home() {
	return (
		<AppBody>
			<LenguauTitle />
			<div className="text-center">
				<LenguaToggle />
			</div>
			<CategoryMenu />
		</AppBody>
	);
}
