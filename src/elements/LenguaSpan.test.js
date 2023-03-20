import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import LenguaSpan from './LenguaSpan';

it('Displays the en prop', () => {
	render(
		<LenguaProvider languageCode={'en'}>
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
	render(
		<LenguaProvider languageCode={'es'}>
			<LenguaSpan en="hello world" es="hola mundo" />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const enSpan = screen.queryByText('hello world');
	const esSpan = screen.getByText('hola mundo');
	expect(enSpan).not.toBeInTheDocument();
	expect(esSpan).toBeInTheDocument();
});
