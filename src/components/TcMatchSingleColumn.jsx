import TcMatchButton from 'components/TcMatchButton';

export default function TcMatchSingleColumn({
	languageCode,
	select,
	selectedVocab,
	vocab,
}) {
	return (
		<>
			{vocab &&
				vocab.map((vo, i) => (
					<TcMatchButton
						cleared={vo.cleared}
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
