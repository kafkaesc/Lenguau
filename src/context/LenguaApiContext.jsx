import React, { useContext } from 'react';

const LenguaApiContext = React.createContext();

export function useLenguaApi() {
	return useContext(LenguaApiContext);
}

export function LenguaApiProvider({ children }) {
	// TODO: Return different API paths based on dev or release
	return (
		<LenguaApiContext.Provider value={'http://localhost:3010/'}>
			{children}
		</LenguaApiContext.Provider>
	);
}
