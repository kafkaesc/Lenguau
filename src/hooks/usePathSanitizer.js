export function usePathSanitizer() {
	function sanitizeImageName(st) {
		if (typeof st !== 'string') {
			console.error('non string argument passed to sanitizeImagePath');
			return '';
		}
		return st.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
	}

	function sanitizeJsonName(st) {
		if (typeof st !== 'string') {
			console.error('non string argument passed to sanitizeImagePath');
			return '';
		}
		return st.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
	}

	function sanitizeRoute(st) {
		if (typeof st !== 'string') {
			console.error('non string argument passed to sanitizeRoute');
			return '';
		}
		return st.replace(/ /g, '-').replace(/_/g, '-');
	}

	return { sanitizeImageName, sanitizeJsonName, sanitizeRoute };
}
