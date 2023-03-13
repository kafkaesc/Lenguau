import React, { useContext } from 'react';

const LenguaApiContext = React.createContext();

export function useLenguaApi() {
	return useContext(LenguaApiContext);
}

export function LenguaApiProvider({ children }) {
	// TODO: Setup API online, return different API path for production based on that release
	const lenguaApiEndpoint = process.env.REACT_APP_LENGUA_API_ENDPOINT;
	return (
		<LenguaApiContext.Provider value={lenguaApiEndpoint}>
			{children}
		</LenguaApiContext.Provider>
	);
}
