import AppBody from 'layout/AppBody';
import LenguauTitle from 'layout/LenguauTitle';
import LenguaToggle from 'layout/LenguaToggle';
import MainMenu from 'layout/MainMenu';
//import PageTitle from 'layout/PageTitle';

export default function Home() {
	return (
		<AppBody>
			{/*<PageTitle hasBack={true}>Lenguau</PageTitle>*/}
			<LenguauTitle />
			<div className="text-center">
				<LenguaToggle />
			</div>
			<MainMenu />
		</AppBody>
	);
}
