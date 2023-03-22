export default function FloatUp({ children, ...props }) {
	return (
		<div
			{...props}
			className="transition duration-300 ease-in-out hover:-translate-y-1"
		>
			{children}
		</div>
	);
}
