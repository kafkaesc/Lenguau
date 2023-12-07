/**
 * The lsPrefix is used to prefix the keys being used in local storage and
 * provide the site with some namespace protection if it's in a shared domain.
 */
const lsPrefix = 'le::';

/**
 * Custom hook for managing local storage from the React app
 * @returns Functions for managing local storage
 */
export function useLocalStorage() {
	/**
	 * Add a new value to localStorage at key
	 * @param {string} key The key for storage in localStorage
	 * @param {any} val The value to store at key in localStorage
	 * @param {boolean?} arrayFlag Optional boolean, pass true if val should go into an array
	 */
	function add(key, val, arrayFlag) {
		const fullKey = lsPrefix + key;
		if (typeof val === 'undefined') {
			val = null;
		}
		if (localStorage.getItem(fullKey)) {
			const prevStorage = JSON.parse('' + localStorage.getItem(fullKey));
			if (prevStorage && Array.isArray(prevStorage)) {
				localStorage.setItem(fullKey, JSON.stringify([...prevStorage, val]));
			} else if (prevStorage && typeof prevStorage === 'object') {
				// TODO: Override object attributes,
				// add new object attributes,
				// leave the rest of the object untouched
			} else {
				localStorage.setItem(fullKey, JSON.stringify([prevStorage, val]));
			}
		} else if (arrayFlag) {
			localStorage.setItem(fullKey, JSON.stringify([val]));
		} else {
			localStorage.setItem(fullKey, JSON.stringify(val));
		}
	}

	/** Clear all local storage */
	function clearAll() {
		localStorage.clear();
	}

	/**
	 * Delete a specific attribute from local storage
	 * @param {string} key The key to delete in local storage
	 */
	function clear(key) {
		delete localStorage[lsPrefix + key];
	}

	/**
	 * Retrieve data from local storage
	 * @param {string} key The key for the data to retrieve
	 * @returns {any} The value tied to key in localStorage
	 */
	function get(key) {
		return JSON.parse('' + localStorage.getItem(lsPrefix + key));
	}

	/**
	 * Sets the value of key to val in localStorage. Previous stored
	 * value(s) at key will be overwritten.
	 * @param {string} key The key for storage in localStorage
	 * @param {string} val The value to store at key in localStorage
	 */
	function set(key, val) {
		if (typeof val === 'undefined') {
			val = null;
		}
		localStorage.setItem(lsPrefix + key, JSON.stringify(val));
	}

	return { add, clearAll, clear, get, set };
}
