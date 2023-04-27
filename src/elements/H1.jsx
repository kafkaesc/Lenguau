export default function H1({ children, className, ...props }) {
	return className ? (
		<h1 {...props} className={`mb-2 text-4xl text-center ${className}`}>
			{children}
		</h1>
	) : (
		<h1 {...props} className="mb-2 text-4xl text-center">
			{children}
		</h1>
	);
}
