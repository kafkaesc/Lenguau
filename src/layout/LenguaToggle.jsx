import { useLengua, useLenguaUpdate } from 'context/LenguaContext';

export default function LenguaToggle() {
	const lengua = useLengua();
	const toggleLengua = useLenguaUpdate();
	return (
		<button
			onClick={toggleLengua}
			className="w-48 text-sm border-2 border-black"
		>
			{lengua === 'en' ? (
				<span className="inline-block w-1/2 text-white bg-black">English</span>
			) : (
				<span className="inline-block w-1/2">English</span>
			)}
			{lengua === 'es' ? (
				<span className="inline-block w-1/2 text-white bg-black">Español</span>
			) : (
				<span className="inline-block w-1/2">Español</span>
			)}
		</button>
	);
}
