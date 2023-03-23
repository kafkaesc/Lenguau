import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Link from './Link';

it('Successfully creates a link to the homepage', () => {
	render(<Link to="/">Home</Link>, { wrapper: MemoryRouter });
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/home/i);
	expect(link).toHaveAttribute('href', '/');
});

it('Successfully creates a link to the about page with target _blank', () => {
	render(
		<Link rel="noreferrer" target="_blank" to="/About">
			About
		</Link>,
		{ wrapper: MemoryRouter }
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/about/i);
	expect(link).toHaveAttribute('href', '/About');
	expect(link).toHaveAttribute('target', '_blank');
});
