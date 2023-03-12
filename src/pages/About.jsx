import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

import SocialLinks from 'components/SocialLinks';
import TechLinks from 'components/TechLinks';

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
					<TechLinks />
				</div>
				<div className="text-center">
					<SocialLinks />
				</div>
			</div>
		</AppBody>
	);
}
