import { useEffect, useState } from 'react';
import { default as RConfetti } from 'react-confetti';

/**
 * @returns {JSX.Element} Returns a JSX element that will
 * drop animated confetti downward
 */
export default function Confetti() {
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	function updateDimensions() {
		setDimensions({ height: window.innerHeight, width: window.innerWidth });
	}

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	}, []);

	return (
		<RConfetti
			height={dimensions.height}
			opacity={0.4}
			width={dimensions.width}
		/>
	);
}
