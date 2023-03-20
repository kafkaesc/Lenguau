export default function P({ className, ...props }) {
	return className ? (
		<p {...props} className={`mb-2 ${className}`}></p>
	) : (
		<p {...props} className="mb-2"></p>
	);
}
