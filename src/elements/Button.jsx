/**
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the button element
 * @param {boolean} disabled Optional boolean, if true the input field will be
 * disabled, the default value value is false
 * @param {any} props Optional string, if it exists it will be appended to the
 * classes for the button element
 * @returns {JSX.IntrinsicElements.button} Button element styled according to
 * site styles
 */
export default function Button({ className, disabled, ...props }) {
	return disabled ? (
		className ? (
			<button
				{...props}
				disabled={true}
				className={`px-4 py-2 mx-4 my-2 border-2 cursor-not-allowed border-gray text-gray ${className}`}
			></button>
		) : (
			<button
				{...props}
				disabled={true}
				className="px-4 py-2 mx-4 my-2 border-2 cursor-not-allowed border-gray text-gray"
			></button>
		)
	) : className ? (
		<button
			{...props}
			className={`px-4 py-2 mx-4 my-2 border-2 border-black hover:bg-black hover:text-white ${className}`}
		></button>
	) : (
		<button
			{...props}
			className="px-4 py-2 mx-4 my-2 border-2 border-black hover:bg-black hover:text-white"
		></button>
	);
}
