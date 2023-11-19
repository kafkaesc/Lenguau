/**
 * @param {any} children JSX element or HTML element going inside the
 * anchor element
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the anchor element
 * @param {any} props Anchor element attributes that will be passed along
 * @returns {JSX.IntrinsicElements.a} Anchor element styled according to site styles
 */
export default function A({ children, className, ...props }) {
	return className ? (
		<a {...props} className={`text-blue hover:underline ${className}`}>
			{children}
		</a>
	) : (
		<a {...props} className="text-blue hover:underline">
			{children}
		</a>
	);
}
