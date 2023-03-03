export default function GmButton({
	cleared,
	languageCode,
	selected,
	vocabObj,
	...props
}) {
	return (
		<div className="inline-block w-1/3 p-1 md:w-1/4 aspect-square">
			{cleared ? (
				<button
					className="inline-block w-full h-full text-center align-top border-2 border-faded text-faded"
					disabled={true}
				>
					{languageCode === 'en' ? vocabObj.en : vocabObj.es}
				</button>
			) : selected ? (
				<button
					{...props}
					className="w-full h-full text-white align-top border-2 border-black bg-blue"
				>
					{languageCode === 'en' ? vocabObj.en : vocabObj.es}
				</button>
			) : (
				<button
					{...props}
					className="w-full h-full align-top border-2 border-black hover:bg-gray"
				>
					{languageCode === 'en' ? vocabObj.en : vocabObj.es}
				</button>
			)}
		</div>
	);
}
