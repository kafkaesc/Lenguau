import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import About from './About';

it('Has the English Page Header', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<About />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/about/i);
});

it('Has the Spanish Page Header', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<About />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/sobre este sitio/i);
});
