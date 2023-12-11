import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import About from './About';
import { useUserSettings } from 'hooks/useUserSettings';

it('Has the English Page Header', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<About />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/about/i);
});

it('Has the Spanish Page Header', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<About />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/sobre este sitio/i);
});
