import { useLengua } from 'context/LenguaContext';

import FloatUp from './FloatUp';

import ExpressLogo from 'assets/images/tech/express.svg';
import NetlifyLogo from 'assets/images/tech/netlify.svg';
import NodeLogo from 'assets/images/tech/node.svg';

const techLinks = [
	{
		altTextEn: 'Node Logo',
		altTextEs: 'El logo de Node',
		imgSrc: NodeLogo,
		name: 'Node',
		url: 'https://nodejs.org/',
	},
	{
		altTextEn: 'Express Logo',
		altTextEs: 'El logo de Express',
		imgSrc: ExpressLogo,
		name: 'Express',
		url: 'https://expressjs.com/',
	},
	{
		altTextEn: 'Netlify Logo',
		altTextEs: 'El logo de Netlify',
		imgSrc: NetlifyLogo,
		name: 'Netlify',
		url: 'https://www.netlify.com/',
	},
];

/**
 * @returns {JSX.Element} Linked icons for the technology used for the backend
 */
export default function BackendTechLinks() {
	const lengua = useLengua();
	return (
		<>
			{techLinks.map((te) => (
				<li
					className="inline-block w-1/3 p-3 align-middle"
					key={`tech-${te.name}`}
				>
					<FloatUp>
						<a href={te.url} rel="noreferrer" target="_blank">
							<img
								alt={lengua === 'en' ? te.altTextEn : te.altTextEs}
								className="w-full"
								src={te.imgSrc}
							/>
						</a>
					</FloatUp>
				</li>
			))}
		</>
	);
}
