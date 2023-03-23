import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuButton from './MenuButton';

it('Create a list item for the homepage', () => {
	render(<MenuButton to="/">Home</MenuButton>, { wrapper: MemoryRouter });
	const mb = screen.getByRole('listitem');
	expect(mb).toBeInTheDocument();
	expect(mb).toHaveTextContent(/home/i);
});

it('Create a link to the homepage', () => {
	render(<MenuButton to="/">Home</MenuButton>, { wrapper: MemoryRouter });
	const mb = screen.getByRole('link');
	expect(mb).toBeInTheDocument();
	expect(mb).toHaveTextContent(/home/i);
	expect(mb).toHaveAttribute('href', '/');
});

it('Create a list item for the about page', () => {
	render(<MenuButton to="/About">About</MenuButton>, { wrapper: MemoryRouter });
	const mb = screen.getByRole('listitem');
	expect(mb).toBeInTheDocument();
	expect(mb).toHaveTextContent(/about/i);
});

it('Create a link to the about page', () => {
	render(<MenuButton to="/About">About</MenuButton>, { wrapper: MemoryRouter });
	const mb = screen.getByRole('link');
	expect(mb).toBeInTheDocument();
	expect(mb).toHaveTextContent(/about/i);
	expect(mb).toHaveAttribute('href', '/About');
});
