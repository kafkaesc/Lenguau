import React, { useContext, useState } from 'react';

const LenguaContext = React.createContext();
const LenguaUpdateContext = React.createContext();

export function useLengua() {
	return useContext(LenguaContext);
}

export function useLenguaUpdate() {
	return useContext(LenguaUpdateContext);
}

export function LenguaProvider({ children }) {
	const [lengua, setLengua] = useState('en');

	function toggleLengua() {
		setLengua((val) => (val === 'en' ? 'es' : 'en'));
	}

	return (
		<LenguaContext.Provider value={lengua}>
			<LenguaUpdateContext.Provider value={toggleLengua}>
				{children}
			</LenguaUpdateContext.Provider>
		</LenguaContext.Provider>
	);
}
