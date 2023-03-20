/* This is a wrapper component--the element content should be passed via props. */
/* eslint-disable jsx-a11y/heading-has-content */
export default function H1({ className, ...props }) {
	return className ? (
		<h1 {...props} className={`mb-2 text-4xl text-center ${className}`}></h1>
	) : (
		<h1 {...props} className="mb-2 text-4xl text-center"></h1>
	);
}
