import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageTitle from './PageTitle';

it('Renders the heading and back button by default', () => {
	render(<PageTitle>Hello World</PageTitle>, { wrapper: MemoryRouter });
	const title = screen.getByRole('heading', { level: 1 });
	expect(title).toBeInTheDocument();
	expect(title).toHaveTextContent(/hello world/i);
	const back = screen.getByRole('link');
	expect(back).toBeInTheDocument();
	expect(back).toHaveAttribute('href', '/');
});

it('Renders the heading and back button by prop', () => {
	render(<PageTitle hideBack={false}>Hello World</PageTitle>, {
		wrapper: MemoryRouter,
	});
	const title = screen.getByRole('heading', { level: 1 });
	expect(title).toBeInTheDocument();
	expect(title).toHaveTextContent(/hello world/i);
	const back = screen.getByRole('link');
	expect(back).toBeInTheDocument();
	expect(back).toHaveAttribute('href', '/');
});

it('Renders the heading and hides the back button', () => {
	render(<PageTitle hideBack={true}>Hello World</PageTitle>, {
		wrapper: MemoryRouter,
	});
	const title = screen.getByRole('heading', { level: 1 });
	expect(title).toBeInTheDocument();
	expect(title).toHaveTextContent(/hello world/i);
	const back = screen.queryByRole('link');
	expect(back).not.toBeInTheDocument();
});
