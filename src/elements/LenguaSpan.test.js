import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import LenguaSpan from './LenguaSpan';
import { useUserSettings } from 'hooks/useUserSettings';

it('Displays the en prop', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<LenguaSpan en="hello world" es="hola mundo" />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const enSpan = screen.getByText('hello world');
	const esSpan = screen.queryByText('hola mundo');
	expect(enSpan).toBeInTheDocument();
	expect(esSpan).not.toBeInTheDocument();
});

it('Displays the es prop', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<LenguaSpan en="hello world" es="hola mundo" />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const enSpan = screen.queryByText('hello world');
	const esSpan = screen.getByText('hola mundo');
	expect(enSpan).not.toBeInTheDocument();
	expect(esSpan).toBeInTheDocument();
});
