import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import BackendTechLinks from './BackendTechLinks';

it('Has the backend links in English', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<BackendTechLinks />
		</LenguaProvider>
	);
	const nodeLink = screen.getByRole('link', { name: /node logo/i });
	const expressLink = screen.getByRole('link', { name: /express logo/i });
	const netlifyLink = screen.getByRole('link', { name: /netlify logo/i });
	expect(nodeLink).toBeInTheDocument();
	expect(nodeLink).toHaveAttribute('target', '_blank');
	expect(expressLink).toBeInTheDocument();
	expect(expressLink).toHaveAttribute('target', '_blank');
	expect(netlifyLink).toBeInTheDocument();
	expect(netlifyLink).toHaveAttribute('target', '_blank');
});

it('Has the backend links in English with no Spanish', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<BackendTechLinks />
		</LenguaProvider>
	);
	const nodeLink = screen.queryByRole('link', { name: /el logo de node/i });
	const expressLink = screen.queryByRole('link', {
		name: /el logo de express/i,
	});
	const netlifyLink = screen.queryByRole('link', {
		name: /el logo de netlify/i,
	});
	expect(nodeLink).not.toBeInTheDocument();
	expect(expressLink).not.toBeInTheDocument();
	expect(netlifyLink).not.toBeInTheDocument();
});

it('Has the backend links in Spanish', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<BackendTechLinks />
		</LenguaProvider>
	);
	const nodeLink = screen.getByRole('link', { name: /el logo de node/i });
	const expressLink = screen.getByRole('link', { name: /el logo de express/i });
	const netlifyLink = screen.getByRole('link', { name: /el logo de netlify/i });
	expect(nodeLink).toBeInTheDocument();
	expect(nodeLink).toHaveAttribute('target', '_blank');
	expect(expressLink).toBeInTheDocument();
	expect(expressLink).toHaveAttribute('target', '_blank');
	expect(netlifyLink).toBeInTheDocument();
	expect(netlifyLink).toHaveAttribute('target', '_blank');
});

it('Has the backend links in Spanish with no English', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<BackendTechLinks />
		</LenguaProvider>
	);
	const nodeLink = screen.queryByRole('link', { name: /node logo/i });
	const expressLink = screen.queryByRole('link', { name: /express logo/i });
	const netlifyLink = screen.queryByRole('link', { name: /netlify logo/i });
	expect(nodeLink).not.toBeInTheDocument();
	expect(expressLink).not.toBeInTheDocument();
	expect(netlifyLink).not.toBeInTheDocument();
});

it('Has the backend logos with English alt text', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<BackendTechLinks />
		</LenguaProvider>
	);
	const nodeLogo = screen.getByAltText(/node logo/i);
	const expressLogo = screen.getByAltText(/express logo/i);
	const netlifyLogo = screen.getByAltText(/netlify logo/i);
	expect(nodeLogo).toBeInTheDocument();
	expect(expressLogo).toBeInTheDocument();
	expect(netlifyLogo).toBeInTheDocument();
});

it('Has the backend logos with Spanish alt text', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<BackendTechLinks />
		</LenguaProvider>
	);
	const nodeLogo = screen.getByAltText(/el logo de node/i);
	const expressLogo = screen.getByAltText(/el logo de express/i);
	const netlifyLogo = screen.getByAltText(/el logo de netlify/i);
	expect(nodeLogo).toBeInTheDocument();
	expect(expressLogo).toBeInTheDocument();
	expect(netlifyLogo).toBeInTheDocument();
});
