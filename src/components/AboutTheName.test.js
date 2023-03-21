import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import AboutTheName from './AboutTheName';

it('Explains the name in English :)', () => {
	render(
		<LenguaProvider languageCode="en">
			<AboutTheName />
		</LenguaProvider>
	);
	const text = screen.getByText(/lengua means language/i);
	expect(text).toBeInTheDocument();
});

it('Explains the name in Spanish :)', () => {
	render(
		<LenguaProvider languageCode="es">
			<AboutTheName />
		</LenguaProvider>
	);
	const text = screen.getByText(/lengua y guau se combinan/i);
	expect(text).toBeInTheDocument();
});
