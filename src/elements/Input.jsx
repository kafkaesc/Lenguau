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
