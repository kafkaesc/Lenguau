import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import FontLinks from './FontLinks';
import { useUserSettings } from 'hooks/useUserSettings';

it('Has the font links in English', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<FontLinks />
		</LenguaProvider>
	);
	const googleFontsLink = screen.getByRole('link', {
		name: /google fonts logo/i,
	});
	const oflLink = screen.getByRole('link', {
		name: /sil open font license logo/i,
	});
	expect(googleFontsLink).toBeInTheDocument();
	expect(oflLink).toBeInTheDocument();
});

it('Has the font links in Spanish', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<FontLinks />
		</LenguaProvider>
	);
	const googleFontsLink = screen.getByRole('link', {
		name: /el logo de google fonts/i,
	});
	const oflLink = screen.getByRole('link', {
		name: /el logo de sil open font license/i,
	});
	expect(googleFontsLink).toBeInTheDocument();
	expect(oflLink).toBeInTheDocument();
});
