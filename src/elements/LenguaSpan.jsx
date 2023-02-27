import { useLengua } from 'context/LenguaContext';

// TODO: Build out to handle being passed en+es or an { en: "", es: ""} object
export default function LenguaSpan({ en, es }) {
	const lengua = useLengua();
	return <>{lengua === 'en' ? en : es}</>;
}
