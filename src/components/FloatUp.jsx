export default function FloatUp({ children }) {
	return (
		<div className="transition duration-300 ease-in-out hover:-translate-y-1">
			{children}
		</div>
	);
}
