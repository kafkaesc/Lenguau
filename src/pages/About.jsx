import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

import AboutTheBackend from 'components/AboutTheBackend';
import AboutTheFrontend from 'components/AboutTheFrontend';
import BackendTechLinks from 'components/BackendTechLinks';
import FrontendTechLinks from 'components/FrontendTechLinks';
import SocialLinks from 'components/SocialLinks';

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
					<FrontendTechLinks />
				</div>
				<AboutTheFrontend />
				<div className="text-center">
					<BackendTechLinks />
				</div>
				<AboutTheBackend />
				<div className="text-center">
					<SocialLinks />
				</div>
			</div>
		</AppBody>
	);
}
