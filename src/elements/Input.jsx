/**
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the input element
 * @param {boolean} disabled Optional boolean, if true the input field will be
 * disabled, the default value value is false
 * @param {any} props
 * @returns {JSX.Input.input} Input element styled according
 * to site styles
 */
export default function Input({ className, disabled, ...props }) {
	return disabled ? (
		className ? (
			<input
				{...props}
				disabled={true}
				className={`block px-3 py-2 mx-auto border-2 border-gray text-gray ${className}`}
			/>
		) : (
			<input
				{...props}
				disabled={true}
				className="block px-3 py-2 mx-auto border-2 border-gray text-gray"
			/>
		)
	) : className ? (
		<input
			{...props}
			className={`block px-3 py-2 mx-auto border-2 border-black focus:outline-none focus:border-blue ${className}`}
		/>
	) : (
		<input
			{...props}
			className="block px-3 py-2 mx-auto border-2 border-black focus:outline-none focus:border-blue"
		/>
	);
}
