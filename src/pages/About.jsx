import H2 from 'elements/H2';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';
import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';
import AboutTheBackend from 'components/AboutTheBackend';
import AboutTheFont from 'components/AboutTheFont';
import AboutTheFrontend from 'components/AboutTheFrontend';
import AboutTheName from 'components/AboutTheName';
import BackendTechLinks from 'components/BackendTechLinks';
import FrontendTechLinks from 'components/FrontendTechLinks';
import SocialLinks from 'components/SocialLinks';

/**
 * @returns {JSX.Element} Page-level JSX component for the about page
 */
export default function About() {
	return (
		<AppBody>
			<PageTitle>
				<LenguaSpan en="About" es="Sobre Este Sitio" />
			</PageTitle>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<div>
				<P className="text-center">
					<LenguaSpan
						en="Built by Jared Hettinger"
						es="Construido por Jared Hettinger"
					/>
				</P>
				<div className="text-center">
					<SocialLinks />
				</div>
				<H2>
					<LenguaSpan en="The Name" es="El Nombre" />
				</H2>
				<AboutTheName />
				<H2 className="mb-0">
					<LenguaSpan en="The Front End" es="El Frontend" />
				</H2>
				<div className="text-center">
					<FrontendTechLinks />
				</div>
				<AboutTheFrontend />
				<H2 className="mb-0">
					<LenguaSpan en="The Back End" es="El Backend" />
				</H2>
				<div className="text-center">
					<BackendTechLinks />
				</div>
				<AboutTheBackend />
				<H2 className="mb-0">
					<LenguaSpan en="The Font" es="La Fuente" />
				</H2>
				<AboutTheFont />
			</div>
		</AppBody>
	);
}
