export default function A(props) {
	// This is a wrapper component--the element content
	// should be passed via props.
	/* eslint-disable */
	return props.className ? (
		<a
			{...props}
			className={`text-blue hover:underline ${props.className}`}
		></a>
	) : (
		<a {...props} className="text-blue hover:underline"></a>
	);
	/* eslint-enable */
}
