import { useLengua } from 'context/LenguaContext';

/**
 * @param {string} en Text in English
 * @param {string} es Text in Spanish
 * @returns {JSX.IntrinsicElements.span} A span element that displays the
 * English or Spanish text according to the Lengua context.
 */
export default function LenguaSpan({ en, es }) {
	const lengua = useLengua();
	return <>{lengua === 'en' ? en : es}</>;
}
