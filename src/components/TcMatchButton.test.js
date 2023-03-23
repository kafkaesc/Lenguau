import { render, screen } from '@testing-library/react';
import TcMatchButton from './TcMatchButton';

it('Renders a default, clickable button in English', () => {
	render(
		<TcMatchButton
			languageCode="en"
			vocabObj={{ en: 'english', es: 'español' }}
		/>
	);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent(/english/i);
});

it('Renders a default, clickable button in Spanish', () => {
	render(
		<TcMatchButton
			languageCode="es"
			vocabObj={{ en: 'english', es: 'español' }}
		/>
	);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent(/español/i);
});

it('Renders a selected button in English', () => {
	render(
		<TcMatchButton
			languageCode="en"
			selected={true}
			vocabObj={{ en: 'english', es: 'español' }}
		/>
	);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent(/english/i);
	expect(button).toHaveClass('bg-blue');
});

it('Renders a selected button in Spanish', () => {
	render(
		<TcMatchButton
			languageCode="es"
			selected={true}
			vocabObj={{ en: 'english', es: 'español' }}
		/>
	);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent(/español/i);
	expect(button).toHaveClass('bg-blue');
});

it('Renders a cleared button in English', () => {
	render(
		<TcMatchButton
			cleared={true}
			languageCode="en"
			vocabObj={{ en: 'english', es: 'español' }}
		/>
	);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent(/english/i);
	expect(button).toHaveClass('border-faded');
	expect(button).toHaveClass('text-faded');
	expect(button).toHaveAttribute('disabled');
});

it('Renders a cleared button in Español', () => {
	render(
		<TcMatchButton
			cleared={true}
			languageCode="es"
			vocabObj={{ en: 'english', es: 'español' }}
		/>
	);
	const button = screen.getByRole('button');
	expect(button).toBeInTheDocument();
	expect(button).toHaveTextContent(/español/i);
	expect(button).toHaveClass('border-faded');
	expect(button).toHaveClass('text-faded');
	expect(button).toHaveAttribute('disabled');
});
