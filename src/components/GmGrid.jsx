import GmButton from 'components/GmButton';

export default function GmGrid({ select, selectedA, selectedB, vocab }) {
	return (
		<>
			{vocab.map((vo, i) => (
				<GmButton
					cleared={vo.cleared}
					key={`${i}-${vo.en}-${vo.es}`}
					languageCode={vo.languageCode}
					onClick={() => select(vo, i)}
					selected={i === selectedA.index || i === selectedB.index}
					vocabObj={vo}
				/>
			))}
		</>
	);
}
