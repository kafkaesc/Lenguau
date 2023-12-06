export default function Outliner({ children, display, ...props }) {
	return display === 'inline' ? (
		<span
			className="inline-block outline outline-action-highlight outline-offset-1"
			{...props}
		>
			{children}
		</span>
	) : (
		<div
			className="outline outline-action-highlight outline-offset-1"
			{...props}
		>
			{children}
		</div>
	);
}
