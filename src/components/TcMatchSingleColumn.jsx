import MatchButton from 'components/MatchButton';

export default function TcMatchSingleColumn({
	languageCode,
	select,
	selectedVocab,
	vocab,
}) {
	return (
		<>
			{vocab.map((vo, i) => (
				<MatchButton
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
