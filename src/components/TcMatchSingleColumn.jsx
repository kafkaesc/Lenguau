import Outliner from './Outliner';
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
				vocab.map((vo) =>
					vo.highlight ? (
						<Outliner key={`${languageCode}-${vo.en}-${vo.es}`}>
							<TcMatchButton
								cleared={vo.cleared}
								languageCode={languageCode}
								onClick={() => select(vo)}
								selected={selectedVocab[languageCode] === vo[languageCode]}
								vocabObj={vo}
							/>
						</Outliner>
					) : (
						<TcMatchButton
							cleared={vo.cleared}
							key={`${languageCode}-${vo.en}-${vo.es}`}
							languageCode={languageCode}
							onClick={() => select(vo)}
							selected={selectedVocab[languageCode] === vo[languageCode]}
							vocabObj={vo}
						/>
					)
				)}
		</>
	);
}
