import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import MainMenu from 'layout/MainMenu';
import PageTitle from 'layout/PageTitle';

export default function Home() {
	return (
		<AppBody>
			<PageTitle hideBack={true}>
				Len<span className="underline">guau</span>
			</PageTitle>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<MainMenu />
		</AppBody>
	);
}
