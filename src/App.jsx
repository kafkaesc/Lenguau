import React from 'react';
import { Outlet } from 'react-router-dom';
import 'App.css';
import 'output.css';
import { LenguaProvider } from 'context/LenguaContext';

export const LenguaContext = React.createContext();

export default function App() {
	return (
		<LenguaProvider>
			<Outlet />
		</LenguaProvider>
	);
}
