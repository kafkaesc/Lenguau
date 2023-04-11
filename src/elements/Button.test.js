import { render, screen } from '@testing-library/react';
import Button from './Button';

it('Loads as a simple button', () => {
	render(<Button>Square</Button>);
	const squareButton = screen.getByRole('button');
	expect(squareButton).toBeInTheDocument();
	expect(squareButton).toHaveTextContent(/square/i);
});

it('Loads a disabled button', () => {
	render(<Button disabled>Triangle</Button>);
	const triangleButton = screen.getByRole('button');
	expect(triangleButton).toBeInTheDocument();
	expect(triangleButton).toHaveTextContent(/triangle/i);
	expect(triangleButton).toHaveAttribute('disabled', '');
});

it('Loads as type="button" with onClick', () => {
	const namedFn = () => {
		return 'ABXYw';
	};
	render(
		<Button onClick={namedFn} type="button">
			Circle
		</Button>
	);
	const circleButton = screen.getByRole('button');
	expect(circleButton).toBeInTheDocument();
	expect(circleButton).toHaveTextContent(/circle/i);
	expect(circleButton).toHaveAttribute('type', 'button');
});

it('Loads an X button with aria-label', () => {
	render(<Button aria-label="Close">X</Button>);
	const xButton = screen.getByRole('button');
	expect(xButton).toBeInTheDocument();
	expect(xButton).toHaveTextContent(/x/i);
	expect(xButton).toHaveAttribute('aria-label', 'Close');
});
