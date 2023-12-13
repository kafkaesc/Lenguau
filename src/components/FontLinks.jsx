import FloatUp from './FloatUp';

import { useLengua } from 'context/LenguaContext';

import GoogleFontsLogo from 'assets/images/tech/google-fonts.png';
import SilOpenFontLicenseLogo from 'assets/images/tech/ofl.png';

const fontLinks = [
	{
		altTextEn: 'Google Fonts Logo',
		altTextEs: 'El logo de Google Fonts',
		imgSrc: GoogleFontsLogo,
		name: 'Google Fonts',
		url: 'https://fonts.google.com/',
	},
	{
		altTextEn: 'SIL Open Font License Logo',
		altTextEs: 'El logo de SIL Open Font License',
		imgSrc: SilOpenFontLicenseLogo,
		name: 'SIL Open Font License',
		url: 'https://openfontlicense.org/',
	},
];

export default function FontLinks() {
	const lengua = useLengua();
	return (
		<>
			<ul className="list-none">
				{fontLinks.map((fo) => (
					<li className="inline-block w-1/5 p-3" key={`font-${fo.name}`}>
						<FloatUp>
							<a href={fo.url} rel="noreferrer" target="_blank">
								<img
									alt={lengua === 'en' ? fo.altTextEn : fo.altTextEs}
									className={fo.name === 'Jest' ? 'w-full max-h-16' : 'w-full'}
									src={fo.imgSrc}
								/>
							</a>
						</FloatUp>
					</li>
				))}
			</ul>
		</>
	);
}
