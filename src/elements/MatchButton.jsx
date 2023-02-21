export default function MatchButton({
	languageCode,
	selected,
	vocabObj,
	...props
}) {
	return selected ? (
		<button
			{...props}
			className="w-full p-2 my-1 text-white border-2 border-black bg-blue"
		>
			{languageCode === 'en' ? vocabObj.en : vocabObj.es}
		</button>
	) : (
		<button
			{...props}
			className="w-full p-2 my-1 border-2 border-black hover:bg-gray"
		>
			{languageCode === 'en' ? vocabObj.en : vocabObj.es}
		</button>
	);
}
