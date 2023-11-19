/**
 * @param {any} children JSX element or HTML element going inside the
 * p element
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the heading element
 * @param {any} props Paragraph element attributes that will be passed along
 * @returns {JSX.IntrinsicElements.p} Paragraph element styled according
 * to site styles
 */
export default function P({ children, className, ...props }) {
	return className ? (
		<p {...props} className={`mb-2 ${className}`}>
			{children}
		</p>
	) : (
		<p {...props} className="mb-2">
			{children}
		</p>
	);
}
