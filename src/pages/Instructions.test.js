import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import Instructions from './Instructions';

it('Has the English Page Header', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<Instructions />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/instructions/i);
});

it('Has the Spanish Page Header', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<Instructions />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/las instrucciones/i);
});
