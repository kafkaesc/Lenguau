import { useVocabFuzzyMatcher } from './useVocabFuzzyMatcher';

afterEach(() => jest.restoreAllMocks());

it('Removes the Spanish article el', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('el perro')).toBe('perro');
});

it('Removes the Spanish article la', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('la gata')).toBe('gata');
});

it('Removes the Spanish article las', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('las perras')).toBe('perras');
});

it('Removes the Spanish article los', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('los perros')).toBe('perros');
});

it('Removes the Spanish article un', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('un libro')).toBe('libro');
});

it('Removes the Spanish article una', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('una mesa')).toBe('mesa');
});

it('Removes the English article a', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('a dog')).toBe('dog');
});

it('Removes the English article an', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('an apple')).toBe('apple');
});

it('Removes the English article the', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('the house')).toBe('house');
});

it('Returns the string unchanged when there is no article', () => {
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles('perro')).toBe('perro');
});

it('Returns undefined for a non-string argument to removeArticles', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { removeArticles } = useVocabFuzzyMatcher();
	expect(removeArticles(42)).toBeUndefined();
});

it('Strips the accent from a single accented character', () => {
	const { stripAccents } = useVocabFuzzyMatcher();
	expect(stripAccents('año')).toBe('ano');
});

it('Strips accents from multiple accented characters', () => {
	const { stripAccents } = useVocabFuzzyMatcher();
	expect(stripAccents('café olé')).toBe('cafe ole');
});

it('Returns an unaccented string unchanged', () => {
	const { stripAccents } = useVocabFuzzyMatcher();
	expect(stripAccents('hello')).toBe('hello');
});

it('Returns an empty string unchanged from stripAccents', () => {
	const { stripAccents } = useVocabFuzzyMatcher();
	expect(stripAccents('')).toBe('');
});

it('Returns undefined for a non-string argument to stripAccents', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { stripAccents } = useVocabFuzzyMatcher();
	expect(stripAccents(42)).toBeUndefined();
});
