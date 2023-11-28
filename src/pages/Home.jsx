import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import MainMenu from 'layout/MainMenu';
import PageTitle from 'layout/PageTitle';

/**
 * @returns {JSX.Element} Page-level JSX component for the homepage
 */
export default function Home() {
	return (
		<AppBody>
			<PageTitle hideBack={true} noMargin={true}>
				<div className="h-24">
					<img
						alt="¡Lenguau!"
						className="inline-block h-full"
						src="/lenguau-logo.png"
					/>
				</div>
			</PageTitle>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<MainMenu />
		</AppBody>
	);
}
