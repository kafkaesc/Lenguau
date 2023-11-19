/**
 * @param {any} children JSX element or HTML element going inside the
 * h1 element
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the heading element
 * @param {any} props Heading element attributes that will be passed along
 * @returns {JSX.IntrinsicElements.h1} Heading 1 element styled according
 * to site styles
 */
export default function H1({ children, className, ...props }) {
	return className ? (
		<h1 {...props} className={`mb-2 text-4xl text-center ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="mb-2 text-4xl text-center">
			{children}
		</h1>
	);
}
