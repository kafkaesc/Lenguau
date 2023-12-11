import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import SocialLinks from './SocialLinks';
import { useUserSettings } from 'hooks/useUserSettings';

it('Has the social links in English', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<SocialLinks />
		</LenguaProvider>
	);
	const githubLink = screen.getByRole('link', { name: /github logo/i });
	const twitterLink = screen.getByRole('link', { name: /twitter logo/i });
	const instagramLink = screen.getByRole('link', { name: /instagram logo/i });
	expect(githubLink).toBeInTheDocument();
	expect(twitterLink).toBeInTheDocument();
	expect(instagramLink).toBeInTheDocument();
});

it('Has the social links in English with no Spanish', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<SocialLinks />
		</LenguaProvider>
	);
	const githubLink = screen.queryByRole('link', { name: /el logo de github/i });
	const twitterLink = screen.queryByRole('link', {
		name: /el logo de twitter/i,
	});
	const instagramLink = screen.queryByRole('link', {
		name: /el logo de instagram/i,
	});
	expect(githubLink).not.toBeInTheDocument();
	expect(twitterLink).not.toBeInTheDocument();
	expect(instagramLink).not.toBeInTheDocument();
});

it('Has the social links in Spanish', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<SocialLinks />
		</LenguaProvider>
	);
	const githubLink = screen.getByRole('link', { name: /el logo de github/i });
	const twitterLink = screen.getByRole('link', { name: /el logo de twitter/i });
	const instagramLink = screen.getByRole('link', {
		name: /el logo de instagram/i,
	});
	expect(githubLink).toBeInTheDocument();
	expect(twitterLink).toBeInTheDocument();
	expect(instagramLink).toBeInTheDocument();
});

it('Has the social links in Spanish with no English', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<SocialLinks />
		</LenguaProvider>
	);
	const githubLink = screen.queryByRole('link', { name: /github logo/i });
	const twitterLink = screen.queryByRole('link', { name: /twitter logo/i });
	const instagramLink = screen.queryByRole('link', { name: /instagram logo/i });
	expect(githubLink).not.toBeInTheDocument();
	expect(twitterLink).not.toBeInTheDocument();
	expect(instagramLink).not.toBeInTheDocument();
});

it('Has the social logos with English alt text', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<SocialLinks />
		</LenguaProvider>
	);
	const githubLogo = screen.getByAltText(/github logo/i);
	const twitterLogo = screen.getByAltText(/twitter logo/i);
	const instagramLogo = screen.getByAltText(/instagram logo/i);
	expect(githubLogo).toBeInTheDocument();
	expect(twitterLogo).toBeInTheDocument();
	expect(instagramLogo).toBeInTheDocument();
});

it('Has the social logos with Spanish alt text', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<SocialLinks />
		</LenguaProvider>
	);
	const githubLogo = screen.getByAltText(/el logo de github/i);
	const twitterLogo = screen.getByAltText(/el logo de twitter/i);
	const instagramLogo = screen.getByAltText(/el logo de instagram/i);
	expect(githubLogo).toBeInTheDocument();
	expect(twitterLogo).toBeInTheDocument();
	expect(instagramLogo).toBeInTheDocument();
});
