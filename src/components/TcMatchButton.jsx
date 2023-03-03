export default function TcMatchButton({
	cleared,
	languageCode,
	selected,
	vocabObj,
	...props
}) {
	return cleared ? (
		<button
			className="inline-block w-full p-2 my-1 text-center border-2 border-faded text-faded"
			disabled={true}
		>
			{languageCode === 'en' ? vocabObj.en : vocabObj.es}
		</button>
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
