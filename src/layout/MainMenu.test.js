import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LenguaProvider } from 'context/LenguaContext';
import MainMenu from './MainMenu';

it('Has the English menu items', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<MainMenu />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const duoMatch = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'duo match');
	expect(duoMatch).toBeInTheDocument();
	const gridMatch = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'grid match');
	expect(gridMatch).toBeInTheDocument();
	const instructions = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'instructions');
	expect(instructions).toBeInTheDocument();
	const about = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'about');
	expect(about).toBeInTheDocument();
});

it('Has the Spanish menu items', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<MainMenu />
		</LenguaProvider>,
		{ wrapper: MemoryRouter }
	);
	const duoMatch = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'combinar los dúos');
	expect(duoMatch).toBeInTheDocument();
	const gridMatch = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'combinar en la cuadrícula');
	expect(gridMatch).toBeInTheDocument();
	const instructions = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'las instrucciones');
	expect(instructions).toBeInTheDocument();
	const about = screen
		.getAllByRole('listitem')
		.find((li) => li.textContent.toLowerCase() === 'sobre este sitio');
	expect(about).toBeInTheDocument();
});
