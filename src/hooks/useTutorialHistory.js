import { useLocalStorage } from 'hooks/useLocalStorage';

const gmKey = 'gmTutComplete';
const tcKey = 'tcTutComplete';

/**
 * Custom hook for tracking if the user has completed the site tutorials
 * @returns Functions to get and set whether tutorials have been completed
 */
export function useTutorialHistory() {
	const ls = useLocalStorage();

	/**
	 * @returns {boolean} Returns true if the grid match tutorial has been completed
	 */
	function checkGridMatchComplete() {
		return !!ls.get(gmKey);
	}

	/**
	 * @returns {boolean} Returns true if the two column match tutorial has been completed
	 */
	function checkTcMatchComplete() {
		return !!ls.get(tcKey);
	}

	/**
	 * @param {boolean} bool The value to set the completedness of the grid match tutorial
	 */
	function setGridMatchComplete(bool) {
		ls.set(gmKey, bool);
	}

	/**
	 * @param {boolean} bool The value to set the completedness of the two column match tutorial
	 */
	function setTcMatchComplete(bool) {
		ls.set(tcKey, bool);
	}

	return {
		checkGridMatchComplete,
		checkTcMatchComplete,
		setGridMatchComplete,
		setTcMatchComplete,
	};
}
