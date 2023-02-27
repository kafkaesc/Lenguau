export default function GridMatchButton({
	languageCode,
	selected,
	vocabObj,
	...props
}) {
	return (
		<div className="inline-block w-1/3 p-1 md:w-1/4 aspect-square">
			{selected ? (
				<button
					{...props}
					className="w-full h-full text-white border border-black bg-blue"
				>
					{languageCode === 'en' ? vocabObj.en : vocabObj.es}
				</button>
			) : (
				<button
					{...props}
					className="w-full h-full border border-black hover:bg-gray"
				>
					{languageCode === 'en' ? vocabObj.en : vocabObj.es}
				</button>
			)}
		</div>
	);
}
