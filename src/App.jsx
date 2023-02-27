import React from 'react';
import { Outlet } from 'react-router-dom';
import 'App.css';
import 'output.css';
import { LenguaProvider } from 'context/LenguaContext';
import { LenguaApiProvider } from 'context/LenguaApiContext';

export const LenguaContext = React.createContext();

export default function App() {
	return (
		<LenguaProvider>
			<LenguaApiProvider>
				<Outlet />
			</LenguaApiProvider>
		</LenguaProvider>
	);
}
