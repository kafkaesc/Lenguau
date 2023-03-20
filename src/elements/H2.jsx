/* This is a wrapper component--the element content should be passed via props. */
/* eslint-disable jsx-a11y/heading-has-content */
export default function H1({ className, ...props }) {
	return className ? (
		<h2 {...props} className={`mb-2 text-2xl text-center ${className}`}></h2>
	) : (
		<h2 {...props} className="mb-2 text-2xl text-center"></h2>
	);
}
