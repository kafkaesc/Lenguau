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
		if (typeof val === 'undefined') {
			val = null;
		}
		if (localStorage.getItem(key)) {
			const prevStorage = JSON.parse('' + localStorage.getItem(key));
			if (prevStorage && Array.isArray(prevStorage)) {
				localStorage.setItem(key, JSON.stringify([...prevStorage, val]));
			} else if (prevStorage && typeof prevStorage === 'object') {
				// TODO: Override object attributes,
				// add new object attributes,
				// leave the rest of the object untouched
			} else {
				localStorage.setItem(key, JSON.stringify([prevStorage, val]));
			}
		} else if (arrayFlag) {
			localStorage.setItem(key, JSON.stringify([val]));
		} else {
			localStorage.setItem(key, JSON.stringify(val));
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
		delete localStorage[key];
	}

	/**
	 * Retrieve data from local storage
	 * @param {string} key The key for the data to retrieve
	 * @returns {any} The value tied to key in localStorage
	 */
	function get(key) {
		return JSON.parse('' + localStorage.getItem(key));
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
		localStorage.setItem(key, JSON.stringify(val));
	}

	return { add, clearAll, clear, get, set };
}
