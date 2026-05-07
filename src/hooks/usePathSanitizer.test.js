import { usePathSanitizer } from './usePathSanitizer';

afterEach(() => jest.restoreAllMocks());

it('Converts spaces to hyphens in sanitizeImageName', () => {
	const { sanitizeImageName } = usePathSanitizer();
	expect(sanitizeImageName('Around Town')).toBe('around-town');
});

it('Converts underscores to hyphens in sanitizeImageName', () => {
	const { sanitizeImageName } = usePathSanitizer();
	expect(sanitizeImageName('at_the_office')).toBe('at-the-office');
});

it('Lowercases the string in sanitizeImageName', () => {
	const { sanitizeImageName } = usePathSanitizer();
	expect(sanitizeImageName('Colors')).toBe('colors');
});

it('Returns an empty string for a non-string argument to sanitizeImageName', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { sanitizeImageName } = usePathSanitizer();
	expect(sanitizeImageName(42)).toBe('');
});

it('Converts spaces to hyphens in sanitizeJsonName', () => {
	const { sanitizeJsonName } = usePathSanitizer();
	expect(sanitizeJsonName('Around Town')).toBe('around-town');
});

it('Converts underscores to hyphens in sanitizeJsonName', () => {
	const { sanitizeJsonName } = usePathSanitizer();
	expect(sanitizeJsonName('at_the_office')).toBe('at-the-office');
});

it('Lowercases the string in sanitizeJsonName', () => {
	const { sanitizeJsonName } = usePathSanitizer();
	expect(sanitizeJsonName('Colors')).toBe('colors');
});

it('Returns an empty string for a non-string argument to sanitizeJsonName', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { sanitizeJsonName } = usePathSanitizer();
	expect(sanitizeJsonName(42)).toBe('');
});

it('Converts spaces to hyphens in sanitizeRoute', () => {
	const { sanitizeRoute } = usePathSanitizer();
	expect(sanitizeRoute('Around Town')).toBe('Around-Town');
});

it('Converts underscores to hyphens in sanitizeRoute', () => {
	const { sanitizeRoute } = usePathSanitizer();
	expect(sanitizeRoute('at_the_office')).toBe('at-the-office');
});

it('Does not lowercase the string in sanitizeRoute', () => {
	const { sanitizeRoute } = usePathSanitizer();
	expect(sanitizeRoute('Colors')).toBe('Colors');
});

it('Returns an empty string for a non-string argument to sanitizeRoute', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { sanitizeRoute } = usePathSanitizer();
	expect(sanitizeRoute(42)).toBe('');
});
