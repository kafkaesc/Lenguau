import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import Home from './Home';

it('Has the English Page Header', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<Home />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/lenguau/i);
});

it('Has the Spanish Page Header', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<Home />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/lenguau/i);
});
