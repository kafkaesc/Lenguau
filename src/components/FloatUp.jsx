/**
 *
 * @param {any} children JSX component or HTML element that will go
 * inside the float up div
 * @param {any} props Division element attributes that will be spread
 * onto the float up div
 * @returns {JSX.Element}
 */
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
