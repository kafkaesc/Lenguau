import { render, screen } from '@testing-library/react';
import Input from './Input';

it('Loads a simple input', () => {
	render(<Input />);
	const input = screen.getByRole('textbox');
	expect(input).toBeInTheDocument();
});

it('Loads an input with defaultValue, name, and placeholder', () => {
	render(
		<Input
			defaultValue="Spock"
			name="name"
			placeholder="Enter your name"
			type="text"
		/>
	);
	const input = screen.getByRole('textbox');
	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('name', 'name');
	expect(input).toHaveAttribute('placeholder', 'Enter your name');
	expect(input).toHaveAttribute('type', 'text');
	expect(input).toHaveAttribute('value', 'Spock');
});

it('Loads a disabled input', () => {
	render(<Input disabled />);
	const input = screen.getByRole('textbox');
	expect(input).toBeInTheDocument();
	expect(input).toHaveAttribute('disabled', '');
});
