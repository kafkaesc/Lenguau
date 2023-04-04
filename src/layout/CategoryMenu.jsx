import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenguaApi } from 'context/LenguaApiContext';

import LenguaSpan from 'elements/LenguaSpan';
import MenuButton from 'elements/MenuButton';

export default function CategoryMenu() {
	const [categories, setCategories] = useState([]);

	const gamePath = useLocation().pathname.split('/')[1];
	const apiBase = useLenguaApi();

	useEffect(() => {
		async function myFetch() {
			await fetch(`${apiBase}vocab/`)
				.then((res) => res.json())
				.then((data) => {
					setCategories(data.categoryList);
				});
		}

		myFetch().catch((err) => {
			console.error('Error fetching the category data for the category menu');
			console.log('Using offline vocab categories.');

			// TODO: Break this into OfflineUtil
			const localCategories = require(`assets/offline-data/set-categories.json`);
			setCategories(localCategories.categoryList);
		});
	}, [apiBase]);

	return (
		<ul>
			{categories.map((ca, i) => {
				return (
					<MenuButton key={i} to={`/${gamePath}/${ca.kebab}`}>
						<LenguaSpan en={ca.en} es={ca.es} />
					</MenuButton>
				);
			})}
		</ul>
	);
}
