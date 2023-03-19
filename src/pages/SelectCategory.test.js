import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import SelectCategory from './SelectCategory';

it('Has the English Page Header', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<SelectCategory />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/select a category/i);
});

it('Has the Spanish Page Header', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<SelectCategory />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const pageHeader = screen.getByRole('heading', { level: 1 });
	expect(pageHeader).toBeInTheDocument();
	expect(pageHeader).toHaveTextContent(/seleccionar una categoría/i);
});
