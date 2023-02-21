import { Link } from 'react-router-dom';

export default function MenuButton(props) {
	return (
		<li className="m-2 text-center border-2 border-black">
			<Link
				{...props}
				className="block w-full h-full p-4 hover:bg-black hover:text-white"
			></Link>
		</li>
	);
}
