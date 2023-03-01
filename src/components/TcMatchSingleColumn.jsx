import TcMatchButton from 'components/TcMatchButton';

export default function TcMatchSingleColumn({
	languageCode,
	select,
	selectedVocab,
	vocab,
}) {
	return (
		<>
			{vocab.map((vo, i) => (
				<TcMatchButton
					key={i}
					languageCode={languageCode}
					onClick={() => select(vo)}
					selected={selectedVocab[languageCode] === vo[languageCode]}
					vocabObj={vo}
				/>
			))}
		</>
	);
}
