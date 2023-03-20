import { render, screen } from '@testing-library/react';
import A from './A';

it('Loads as a simple A wrapper', () => {
	render(
		<A href="https://www.github.com/kafkaesc" target="_blank">
			GitHub link
		</A>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveAttribute('href', 'https://www.github.com/kafkaesc');
	expect(link).toHaveAttribute('target', '_blank');
});

it('Loads the className prop onto the child a element', () => {
	render(
		<A className="red" href="https://www.github.com/kafkaesc" target="_blank">
			GitHub link, but red
		</A>
	);
	const link = screen.getByRole('link');
	expect(link).toBeInTheDocument();
	expect(link).toHaveTextContent(/github link, but red/i);
	expect(link).toHaveClass('red');
});
