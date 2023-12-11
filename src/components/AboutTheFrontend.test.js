import { render, screen } from '@testing-library/react';
import { LenguaProvider } from 'context/LenguaContext';
import AboutTheFrontend from './AboutTheFrontend';
import { useUserSettings } from 'hooks/useUserSettings';

it('Has the expected links in English', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('en');
	render(
		<LenguaProvider>
			<AboutTheFrontend />
		</LenguaProvider>
	);
	const githubLink = screen.getByRole('link', { name: /full code/i });
	const jestLink = screen.getByRole('link', { name: /jest/i });
	const reactLink = screen.getByRole('link', { name: /react$/i });
	const reactRouterLink = screen.getByRole('link', { name: /react router/i });
	const reactTestingLibrary = screen.getByRole('link', {
		name: /react testing/i,
	});
	const tailwindLink = screen.getByRole('link', { name: /tailwind/i });
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('target', '_blank');
	expect(githubLink).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/Lenguau/'
	);
	expect(jestLink).toBeInTheDocument();
	expect(jestLink).toHaveAttribute('target', '_blank');
	expect(jestLink).toHaveAttribute('href', 'https://jestjs.io/');
	expect(reactLink).toBeInTheDocument();
	expect(reactLink).toHaveAttribute('target', '_blank');
	expect(reactLink).toHaveAttribute('href', 'https://reactjs.org/');
	expect(reactRouterLink).toBeInTheDocument();
	expect(reactRouterLink).toHaveAttribute('target', '_blank');
	expect(reactRouterLink).toHaveAttribute('href', 'https://reactrouter.com/');
	expect(reactTestingLibrary).toBeInTheDocument();
	expect(reactTestingLibrary).toHaveAttribute('target', '_blank');
	expect(reactTestingLibrary).toHaveAttribute(
		'href',
		'https://testing-library.com/'
	);
	expect(tailwindLink).toBeInTheDocument();
	expect(tailwindLink).toHaveAttribute('target', '_blank');
	expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
});

it('Has the expected links in Spanish', () => {
	const { setUserLanguage } = useUserSettings();
	setUserLanguage('es');
	render(
		<LenguaProvider>
			<AboutTheFrontend />
		</LenguaProvider>
	);
	const githubLink = screen.getByRole('link', { name: /codigo completo/i });
	const jestLink = screen.getByRole('link', { name: /jest/i });
	const reactLink = screen.getByRole('link', { name: /react$/i });
	const reactRouterLink = screen.getByRole('link', { name: /react router/i });
	const reactTestingLibrary = screen.getByRole('link', {
		name: /react testing/i,
	});
	const tailwindLink = screen.getByRole('link', { name: /tailwind/i });
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('target', '_blank');
	expect(githubLink).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/Lenguau/'
	);
	expect(jestLink).toBeInTheDocument();
	expect(jestLink).toHaveAttribute('target', '_blank');
	expect(jestLink).toHaveAttribute('href', 'https://jestjs.io/');
	expect(reactLink).toBeInTheDocument();
	expect(reactLink).toHaveAttribute('target', '_blank');
	expect(reactLink).toHaveAttribute('href', 'https://reactjs.org/');
	expect(reactRouterLink).toBeInTheDocument();
	expect(reactRouterLink).toHaveAttribute('target', '_blank');
	expect(reactRouterLink).toHaveAttribute('href', 'https://reactrouter.com/');
	expect(reactTestingLibrary).toBeInTheDocument();
	expect(reactTestingLibrary).toHaveAttribute('target', '_blank');
	expect(reactTestingLibrary).toHaveAttribute(
		'href',
		'https://testing-library.com/'
	);
	expect(tailwindLink).toBeInTheDocument();
	expect(tailwindLink).toHaveAttribute('target', '_blank');
	expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com/');
});
