import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import AboutTheBackend from './AboutTheBackend';

it('Has the expected links in English', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<AboutTheBackend />
		</LenguaProvider>
	);
	const expressLink = screen.getByRole('link', { name: /express/i });
	const githubLink = screen.getByRole('link', { name: /full/i });
	const nodeLink = screen.getByRole('link', { name: /node/i });
	expect(expressLink).toBeInTheDocument();
	expect(expressLink).toHaveAttribute('target', '_blank');
	expect(expressLink).toHaveAttribute('href', 'https://expressjs.com/');
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('target', '_blank');
	expect(githubLink).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/Lenguau-API/'
	);
	expect(nodeLink).toBeInTheDocument();
	expect(nodeLink).toHaveAttribute('target', '_blank');
	expect(nodeLink).toHaveAttribute('href', 'https://nodejs.org/');
});

it('Has the expected links in Spanish', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<AboutTheBackend />
		</LenguaProvider>
	);
	const expressLink = screen.getByRole('link', { name: /express/i });
	const githubLink = screen.getByRole('link', { name: /codigo completo/i });
	const nodeLink = screen.getByRole('link', { name: /node/i });
	expect(expressLink).toBeInTheDocument();
	expect(expressLink).toHaveAttribute('target', '_blank');
	expect(expressLink).toHaveAttribute('href', 'https://expressjs.com/');
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('target', '_blank');
	expect(githubLink).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/Lenguau-API/'
	);
	expect(nodeLink).toBeInTheDocument();
	expect(nodeLink).toHaveAttribute('target', '_blank');
	expect(nodeLink).toHaveAttribute('href', 'https://nodejs.org/');
});
