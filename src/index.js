import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from 'pages/About';
import Error from 'Error';
import GridMatch from 'pages/GridMatch';
import Home from 'pages/Home';
import Instructions from 'pages/Instructions';
import SelectCategory from 'pages/SelectCategory';
import TcMatchTutorial from 'components/TcMatchTutorial';
import TwoColumnMatch from 'pages/TwoColumnMatch';
import TypeOut from 'pages/TypeOut';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/About', element: <About /> },
			{ path: '/DuoMatch/Select-Category', element: <SelectCategory /> },
			// TODO: Remove this path when tutorial is ready and via localStorage
			// have it load the first time visiting the Duo Match game
			{ path: '/DuoMatch/Tutorial', element: <TcMatchTutorial /> },
			{ path: '/DuoMatch/:categoryTitle', element: <TwoColumnMatch /> },
			{ path: '/GridMatch/Select-Category', element: <SelectCategory /> },
			{ path: '/GridMatch/:categoryTitle', element: <GridMatch /> },
			{ path: '/Home', element: <Home /> },
			{ path: '/Instructions', element: <Instructions /> },
			{ path: '/TypeOut', element: <SelectCategory /> },
			{ path: '/TypeOut/:categoryTitle', element: <TypeOut /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
