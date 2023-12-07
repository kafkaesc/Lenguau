import React, { useContext, useState } from 'react';
import { useUserSettings } from 'hooks/useUserSettings';

const LenguaContext = React.createContext();
const LenguaUpdateContext = React.createContext();

export function useLengua() {
	return useContext(LenguaContext);
}

export function useLenguaUpdate() {
	return useContext(LenguaUpdateContext);
}

export function LenguaProvider({ children }) {
	const { getUserLanguage, setUserLanguage } = useUserSettings();
	const languageCode = getUserLanguage();
	const [lengua, setLengua] = useState(languageCode || 'en');

	function toggleLengua() {
		setLengua((val) => {
			setUserLanguage(val === 'en' ? 'es' : 'en');
			return val === 'en' ? 'es' : 'en';
		});
	}

	return (
		<LenguaContext.Provider value={lengua}>
			<LenguaUpdateContext.Provider value={toggleLengua}>
				{children}
			</LenguaUpdateContext.Provider>
		</LenguaContext.Provider>
	);
}
