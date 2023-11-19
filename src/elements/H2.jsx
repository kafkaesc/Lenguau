/**
 * @param {any} children JSX element or HTML element going inside the
 * h2 element
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the heading element
 * @param {any} props Heading element attributes that will be passed along
 * @returns {JSX.IntrinsicElements.h2} Heading 2 element styled according
 * to site styles
 */
export default function H2({ children, className, ...props }) {
	return className ? (
		<h2 {...props} className={`mb-2 text-2xl text-center ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="mb-2 text-2xl text-center">
			{children}
		</h2>
	);
}
