import FloatUp from 'components/FloatUp';
import { useLengua } from 'context/LenguaContext';
import { usePathSanitizer } from 'hooks/usePathSanitizer';

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
	{
		altTextEn: '',
		altTextEs: '',
		siteName: 'LinkedIn',
		url: 'https://www.linkedin.com/in/jahettinger',
	},
];

/**
 * @returns {JSX.Element} Linked icons for social media accounts
 */
export default function SocialLinks() {
	const lengua = useLengua();
	const { sanitizeImageName } = usePathSanitizer();
	return (
		<ul className="mb-2 list-none">
			{socialLinks.map((so) => (
				<li className="inline-block" key={`social-${so.siteName}`}>
					<FloatUp>
						<a href={so.url} rel="noreferrer" target="_blank">
							<img
								alt={lengua === 'en' ? so.altTextEn : so.altTextEs}
								className="h-6 mx-3"
								src={require(`assets/images/social/${sanitizeImageName(
									so.siteName
								)}.png`)}
							/>
						</a>
					</FloatUp>
				</li>
			))}
		</ul>
	);
}
