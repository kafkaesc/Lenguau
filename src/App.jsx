import React from 'react';
import { Outlet } from 'react-router-dom';
import 'App.css';
import 'output.css';
import { LenguaApiProvider } from 'context/LenguaApiContext';
import { LenguaProvider } from 'context/LenguaContext';

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
