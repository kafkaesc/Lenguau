// This is a wrapper component--the element content should be passed via props.
/* eslint-disable jsx-a11y/anchor-has-content */
export default function A({ className, ...props }) {
	return className ? (
		<a {...props} className={`text-blue hover:underline ${className}`}></a>
	) : (
		<a {...props} className="text-blue hover:underline"></a>
	);
}
