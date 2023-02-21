import { useLengua } from 'context/LenguaContext';

export default function LenguaSpan({ en, es }) {
	const lengua = useLengua();
	return <>{lengua === 'en' ? en : es}</>;
}
