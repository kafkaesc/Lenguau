export function sanitizeImageName(st) {
	if (typeof st !== 'string') {
		console.error('non string argument passed to sanitizeImagePath');
		return '';
	}
	return st.toLowerCase().replace(/ /g, '-').replace(/_/g, '-');
}

export function sanitizeRoute(st) {
	if (typeof st !== 'string') {
		console.error('non string argument passed to sanitizeRoute');
		return '';
	}
	return st.replace(/ /g, '-').replace(/_/g, '-');
}
