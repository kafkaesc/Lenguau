export default function PageTitle({ children, hasBack }) {
	hasBack = !!hasBack;
	return (
		<div className="flex mb-2">
			<div className="flex-none w-8 text-center align-middle">
				{hasBack && (
					<button className="inline-block w-full h-full border border-blue">
						&lt;
					</button>
				)}
			</div>
			<h1 className="text-5xl font-bold text-center grow">{children}</h1>
			<div className="flex-none w-8 text-center align-middle"></div>
		</div>
	);
}
