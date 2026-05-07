import { useGameAction } from './useGameAction';

afterEach(() => jest.restoreAllMocks());

it('Returns an array of the same length', () => {
	const { shuffle } = useGameAction();
	expect(shuffle([1, 2, 3, 4, 5])).toHaveLength(5);
});

it('Returns an array containing the same elements', () => {
	const { shuffle } = useGameAction();
	const arr = [1, 2, 3, 4, 5];
	expect(shuffle(arr)).toEqual(expect.arrayContaining(arr));
});

it('Does not mutate the original array', () => {
	const { shuffle } = useGameAction();
	const arr = [1, 2, 3];
	const original = [...arr];
	shuffle(arr);
	expect(arr).toEqual(original);
});

it('Returns an empty array when passed an empty array', () => {
	const { shuffle } = useGameAction();
	expect(shuffle([])).toEqual([]);
});

it('Returns undefined for a string argument', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { shuffle } = useGameAction();
	expect(shuffle('not an array')).toBeUndefined();
});

it('Returns undefined for a null argument', () => {
	jest.spyOn(console, 'error').mockImplementation(() => {});
	const { shuffle } = useGameAction();
	expect(shuffle(null)).toBeUndefined();
});
