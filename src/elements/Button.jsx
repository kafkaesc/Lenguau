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
