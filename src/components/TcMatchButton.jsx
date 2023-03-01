export default function TcMatchButton({
	cleared,
	languageCode,
	selected,
	vocabObj,
	...props
}) {
	return cleared ? (
		<div className="inline-block w-full p-2 my-1 text-center border-2 border-faded text-faded">
			{languageCode === 'en' ? vocabObj.en : vocabObj.es}
		</div>
	) : selected ? (
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
