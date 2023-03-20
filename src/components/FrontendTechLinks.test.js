import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import FrontendTechLinks from './FrontendTechLinks';

it('Has the frontend links in English', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<FrontendTechLinks />
		</LenguaProvider>
	);
	const reactLink = screen.getByRole('link', { name: /react logo/i });
	const reactRouterLink = screen.getByRole('link', {
		name: /react router logo/i,
	});
	const tailwindLink = screen.getByRole('link', { name: /tailwind logo/i });
	expect(reactLink).toBeInTheDocument();
	expect(reactRouterLink).toBeInTheDocument();
	expect(tailwindLink).toBeInTheDocument();
});

it('Has the frontend links in English with no Spanish', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<FrontendTechLinks />
		</LenguaProvider>
	);
	const reactLink = screen.queryByRole('link', { name: /el logo de react$/i });
	const reactRouterLink = screen.queryByRole('link', {
		name: /el logo de react router/i,
	});
	const tailwindLink = screen.queryByRole('link', {
		name: /el logo de tailwind/i,
	});
	expect(reactLink).not.toBeInTheDocument();
	expect(reactRouterLink).not.toBeInTheDocument();
	expect(tailwindLink).not.toBeInTheDocument();
});

it('Has the frontend links in Spanish', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<FrontendTechLinks />
		</LenguaProvider>
	);
	const reactLink = screen.getByRole('link', { name: /el logo de react$/i });
	const reactRouterLink = screen.getByRole('link', {
		name: /el logo de react router/i,
	});
	const tailwindLink = screen.getByRole('link', {
		name: /el logo de tailwind/i,
	});
	expect(reactLink).toBeInTheDocument();
	expect(reactRouterLink).toBeInTheDocument();
	expect(tailwindLink).toBeInTheDocument();
});

it('Has the frontend links in Spanish with no English', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<FrontendTechLinks />
		</LenguaProvider>
	);
	const reactLink = screen.queryByRole('link', { name: /react logo/i });
	const reactRouterLink = screen.queryByRole('link', {
		name: /react router logo/i,
	});
	const tailwindLink = screen.queryByRole('link', { name: /tailwind logo/i });
	expect(reactLink).not.toBeInTheDocument();
	expect(reactRouterLink).not.toBeInTheDocument();
	expect(tailwindLink).not.toBeInTheDocument();
});

it('Has the frontend logos with English alt text', () => {
	render(
		<LenguaProvider languageCode={'en'}>
			<FrontendTechLinks />
		</LenguaProvider>
	);
	const reactLogo = screen.getByAltText(/react logo/i);
	const reactRouterLogo = screen.getByAltText(/react router logo/i);
	const tailwindLogo = screen.getByAltText(/tailwind logo/i);
	expect(reactLogo).toBeInTheDocument();
	expect(reactRouterLogo).toBeInTheDocument();
	expect(tailwindLogo).toBeInTheDocument();
});

it('Has the frontend logos with Spanish alt text', () => {
	render(
		<LenguaProvider languageCode={'es'}>
			<FrontendTechLinks />
		</LenguaProvider>
	);
	const reactLogo = screen.getByAltText(/el logo de react$/i);
	const reactRouterLogo = screen.getByAltText(/el logo de react router/i);
	const tailwindLogo = screen.getByAltText(/el logo de tailwind/i);
	expect(reactLogo).toBeInTheDocument();
	expect(reactRouterLogo).toBeInTheDocument();
	expect(tailwindLogo).toBeInTheDocument();
});
