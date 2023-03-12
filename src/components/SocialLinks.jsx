import { useLengua } from 'context/LenguaContext';
import { sanitizeImageName } from 'utilities/PathUtil';

const socialLinks = [
	{
		altTextEn: 'GitHub Logo',
		altTextEs: 'El logo de GitHub',
		siteName: 'GitHub',
		url: 'https://www.github.com/kafkaesc',
	},
	{
		altTextEn: 'Twitter Logo',
		altTextEs: 'El logo de Twitter',
		siteName: 'Twitter',
		url: 'https://www.twitter.com/_kafkaesc',
	},
	{
		altTextEn: 'Instagram Logo',
		altTextEs: 'El logo de Instagram',
		siteName: 'Instagram',
		url: 'https://www.instagram.com/kafkaesc',
	},
];

export default function SocialLinks() {
	const lengua = useLengua();
	return (
		<ul className="mb-2 list-none">
			{socialLinks.map((so) => (
				<li className="inline-block" key={`social-${so.siteName}`}>
					<a href={so.url} rel="noreferrer" target="_blank">
						<img
							alt={lengua === 'en' ? so.altTextEn : so.altTextEs}
							className="h-8 mx-3"
							src={require(`assets/images/social/${sanitizeImageName(
								so.siteName
							)}.png`)}
						/>
					</a>
				</li>
			))}
		</ul>
	);
}
