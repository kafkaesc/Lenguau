export default function A({ children, className, ...props }) {
	return className ? (
		<a {...props} className={`text-blue hover:underline ${className}`}>
			{children}
		</a>
	) : (
		<a {...props} className="text-blue hover:underline">
			{children}
		</a>
	);
}
