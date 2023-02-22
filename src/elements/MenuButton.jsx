import { Link } from 'react-router-dom';

export default function MenuButton({ children, ...props }) {
	return (
		<>
			<li className="relative block mx-4 my-2 overflow-hidden text-center text-black text-white border-2 border-black group">
				<span className="absolute h-0 transition-all duration-300 origin-center rotate-45 translate-x-12 bg-black w-96 top-1/2 group-focus-within:h-96 group-hover:h-96 group-focus-within:-translate-y-48 group-hover:-translate-y-48 ease"></span>
				<Link
					{...props}
					className="relative inline-block w-full p-4 text-black transition duration-300 group-focus-within:text-white group-hover:text-white ease"
				>
					{children}
				</Link>
			</li>
		</>
	);
}
