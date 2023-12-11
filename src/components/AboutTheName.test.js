import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import AboutTheName from './AboutTheName';
import { useUserSettings } from 'hooks/useUserSettings';

it('Explains the name in English :)', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<AboutTheName />
		</LenguaProvider>
	);
	const text = screen.getByText(/lengua means language/i);
	expect(text).toBeInTheDocument();
});

it('Explains the name in Spanish :)', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<AboutTheName />
		</LenguaProvider>
	);
	const text = screen.getByText(/lengua y guau se combinan/i);
	expect(text).toBeInTheDocument();
});
