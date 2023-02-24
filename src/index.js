import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import About from 'pages/About';
import Error from 'Error';
import Home from 'pages/Home';
import Instructions from 'pages/Instructions';
import SelectCategory from 'pages/SelectCategory';
import TwoColumnMatch from 'pages/TwoColumnMatch';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/About', element: <About /> },
			{ path: '/Home', element: <Home /> },
			{ path: '/Instructions', element: <Instructions /> },
			{ path: '/Match/:categoryTitle', element: <TwoColumnMatch /> },
			{ path: '/Select-Category', element: <SelectCategory /> },
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
