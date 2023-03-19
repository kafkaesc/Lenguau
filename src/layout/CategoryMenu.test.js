import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import CategoryMenu from './CategoryMenu';

it('Has the English category names', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<CategoryMenu />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const aroundTown = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'around town');
	expect(aroundTown).toBeInTheDocument();
	const atTheOffice = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'at the office');
	expect(atTheOffice).toBeInTheDocument();
	const colors = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'colors');
	expect(colors).toBeInTheDocument();
	const literature = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'literature');
	expect(literature).toBeInTheDocument();
	const top50Verbs = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'top 50 verbs');
	expect(top50Verbs).toBeInTheDocument();
});

it('Has the Spanish category names', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<CategoryMenu />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const aroundTown = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'en el pueblo');
	expect(aroundTown).toBeInTheDocument();
	const atTheOffice = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'en la oficina');
	expect(atTheOffice).toBeInTheDocument();
	const colors = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'de colores');
	expect(colors).toBeInTheDocument();
	const literature = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'la literatura');
	expect(literature).toBeInTheDocument();
	const top50Verbs = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === '50 verbos principales');
	expect(top50Verbs).toBeInTheDocument();
});
