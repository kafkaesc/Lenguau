// This is a wrapper component--the element content should be passed via props.
/* eslint-disable jsx-a11y/anchor-has-content */
export default function Button({ className, ...props }) {
	return className ? (
		<button
			{...props}
			className={`px-4 py-2 mx-4 my-2 border-2 border-black ${className}`}
		></button>
	) : (
		<button
			{...props}
			className="px-4 py-2 mx-4 my-2 border-2 border-black"
		></button>
	);
}
