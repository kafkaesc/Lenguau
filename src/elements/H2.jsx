export default function H2({ children, className, ...props }) {
	return className ? (
		<h2 {...props} className={`mb-2 text-2xl text-center ${className}`}>
			{children}
		</h2>
	) : (
		<h2 {...props} className="mb-2 text-2xl text-center">
			{children}
		</h2>
	);
}
