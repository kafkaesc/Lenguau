export default function P(props) {
	return props.className ? (
		<p {...props} className={`mb-2 ${props.className}`}></p>
	) : (
		<p {...props} className="mb-2 "></p>
	);
}
