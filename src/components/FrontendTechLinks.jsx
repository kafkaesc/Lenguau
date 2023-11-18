import { useLengua } from 'context/LenguaContext';

import FloatUp from './FloatUp';

import JestLogo from 'assets/images/tech/jest.svg';
import ReactLogo from 'assets/images/tech/react.svg';
import ReactRouterLogo from 'assets/images/tech/react-router.svg';
import TailwindLogo from 'assets/images/tech/tailwindcss.svg';

const techLinks = [
	{
		altTextEn: 'React Logo',
		altTextEs: 'El logo de React',
		imgSrc: ReactLogo,
		name: 'React',
		url: 'https://reactjs.org/',
	},
	{
		altTextEn: 'React Router Logo',
		altTextEs: 'El logo de React Router',
		imgSrc: ReactRouterLogo,
		name: 'React Router',
		url: 'https://reactrouter.com/',
	},
	{
		altTextEn: 'Tailwind Logo',
		altTextEs: 'El logo de Tailwind',
		imgSrc: TailwindLogo,
		name: 'Tailwind',
		url: 'https://tailwindcss.com/',
	},
	{
		altTextEn: 'Jest Logo',
		altTextEs: 'El logo de Jest',
		imgSrc: JestLogo,
		name: 'Jest',
		url: 'https://jestjs.io',
	},
];

/**
 * @returns {JSX.Element} Linked icons for the technology used for the frontend
 */
export default function FrontendTechLinks() {
	const lengua = useLengua();
	return (
		<ul className="list-none">
			{techLinks.map((te) => (
				<li className="inline-block w-1/5 p-3" key={`tech-${te.name}`}>
					<FloatUp>
						<a href={te.url} rel="noreferrer" target="_blank">
							<img
								alt={lengua === 'en' ? te.altTextEn : te.altTextEs}
								className={te.name === 'Jest' ? 'w-full max-h-16' : 'w-full'}
								src={te.imgSrc}
							/>
						</a>
					</FloatUp>
				</li>
			))}
		</ul>
	);
}
