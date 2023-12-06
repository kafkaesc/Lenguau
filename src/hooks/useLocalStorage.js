// TODO: Built out these functions
export function useLocalStorage() {
	function add(key, val) {}

	function clearAll() {
		localStorage.clear();
	}

	function clear(key) {
		delete localStorage[key];
	}

	function get(key) {
		return JSON.parse('' + localStorage.getItem(key));
	}

	return { add, clearAll, clear, get };
}
