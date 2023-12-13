import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import AboutTheFont from './AboutTheFont';
import { useUserSettings } from 'hooks/useUserSettings';

it('Has the expected links in English', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<AboutTheFont />
		</LenguaProvider>
	);
	const lukaszLink = screen.getByRole('link', { name: /łukasz dziedzic/i });
	const googleFontsLink = screen.getByRole('link', { name: /google fonts/i });
	const oflLink = screen.getByRole('link', { name: /sil open font license/i });
	expect(lukaszLink).toBeInTheDocument();
	expect(lukaszLink).toHaveAttribute('target', '_blank');
	expect(lukaszLink).toHaveAttribute('href', 'http://www.lukaszdziedzic.eu');
	expect(googleFontsLink).toBeInTheDocument();
	expect(googleFontsLink).toHaveAttribute('target', '_blank');
	expect(googleFontsLink).toHaveAttribute('href', 'https://fonts.google.com');
	expect(oflLink).toBeInTheDocument();
	expect(oflLink).toHaveAttribute('target', '_blank');
	expect(oflLink).toHaveAttribute('href', 'https://openfontlicense.org');
});

it('Has the expected links in Spanish', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<AboutTheFont />
		</LenguaProvider>
	);
	const lukaszLink = screen.getByRole('link', { name: /łukasz dziedzic/i });
	const googleFontsLink = screen.getByRole('link', { name: /google fonts/i });
	const oflLink = screen.getByRole('link', { name: /sil open font license/i });
	expect(lukaszLink).toBeInTheDocument();
	expect(lukaszLink).toHaveAttribute('target', '_blank');
	expect(lukaszLink).toHaveAttribute('href', 'http://www.lukaszdziedzic.eu');
	expect(googleFontsLink).toBeInTheDocument();
	expect(googleFontsLink).toHaveAttribute('target', '_blank');
	expect(googleFontsLink).toHaveAttribute('href', 'https://fonts.google.com');
	expect(oflLink).toBeInTheDocument();
	expect(oflLink).toHaveAttribute('target', '_blank');
	expect(oflLink).toHaveAttribute('href', 'https://openfontlicense.org');
});
