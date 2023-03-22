import { render, screen } from '@testing-library/react';
import FloatUp from './FloatUp';

it('Loads an anchor element into the component', () => {
	render(
		<FloatUp data-testid="float-test">
			<a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past">
				a link to the past
			</a>
		</FloatUp>
	);
	const a = screen.getByRole('link');
	expect(a).toBeInTheDocument();
	expect(a).toHaveAttribute(
		'href',
		'https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past'
	);
	const float = screen.getByTestId('float-test');
	expect(float).toBeInTheDocument();
	expect(float).toHaveClass('transition');
});

it('Loads a span element into the component', () => {
	render(
		<FloatUp data-testid="float-test">
			<span>the length of the island manhattan</span>
		</FloatUp>
	);
	const span = screen.getByText(/the length/i);
	expect(span).toBeInTheDocument();
	const float = screen.getByTestId('float-test');
	expect(float).toBeInTheDocument();
	expect(float).toHaveClass('transition');
});

it('Loads a division elements into the component', () => {
	render(
		<FloatUp data-testid="float-test">
			<div>
				<p>site section</p>
			</div>
		</FloatUp>
	);
	const float = screen.getByTestId('float-test');
	expect(float).toBeInTheDocument();
	expect(float).toHaveClass('transition');
});

it('Loads an image element into the component', () => {
	render(
		<FloatUp data-testid="float-test">
			<img alt="GitHub Logo" src="assets/images/social/github.png" />
		</FloatUp>
	);
	const img = screen.getByRole('img');
	expect(img).toBeInTheDocument();
	expect(img).toHaveAttribute('alt', 'GitHub Logo');
	expect(img).toHaveAttribute('src', 'assets/images/social/github.png');
	const float = screen.getByTestId('float-test');
	expect(float).toBeInTheDocument();
	expect(float).toHaveClass('transition');
});
