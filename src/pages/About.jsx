import A from 'elements/A';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';
import PageTitle from 'layout/PageTitle';

import BackEndTechLinks from 'components/BackEndTechLinks';
import FrontEndTechLinks from 'components/FrontEndTechLinks';
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
					<FrontEndTechLinks />
				</div>
				<P>
					This is a{' '}
					<A href="https://reactjs.org" rel="noreferrer" target="_blank">
						React
					</A>{' '}
					site app that uses{' '}
					<A href="https://reactrouter.com" rel="noreferrer" target="_blank">
						React Router
					</A>{' '}
					for routing. It utilizes{' '}
					<A href="https://tailwindcss.com" rel="noreferrer" target="_blank">
						Tailwind
					</A>{' '}
					for site styles.
				</P>
				<div className="text-center">
					<BackEndTechLinks />
				</div>
				<P>
					The vocabulary payload is delivered via the Lenguau API, a{' '}
					<A href="https://nodejs.org/" rel="noreferrer" target="_blank">
						Node
					</A>{' '}
					back-end using the{' '}
					<A href="https://expressjs.com/" rel="noreferrer" target="_blank">
						Express
					</A>{' '}
					framework. The{' '}
					<A
						href="https://github.com/kafkaesc/Lenguau-API/"
						rel="noreferrer"
						target="_blank"
					>
						full code for the Lenguau API
					</A>{' '}
					can be viewed on GitHub.
				</P>
				<P>
					The full code for this project can be viewed on{' '}
					<A
						href="https://github.com/kafkaesc/Lenguau"
						rel="noreferrer"
						target="_blank"
					>
						GitHub
					</A>
					.
				</P>
				<div className="text-center">
					<SocialLinks />
				</div>
			</div>
		</AppBody>
	);
}
