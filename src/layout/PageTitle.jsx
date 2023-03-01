import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function PageTitle({ children, hideBack }) {
	hideBack = !!hideBack;
	return (
		<div className="flex mb-2">
			<div className="flex-none w-12 h-12 text-center align-middle">
				{!hideBack && (
					<Link
						aria-label="Navigate to homepage"
						className="inline-block w-full h-full"
						to="/"
					>
						<ChevronLeftIcon className="h-full pt-1" />
					</Link>
				)}
			</div>
			<h1 className="text-5xl text-center grow">{children}</h1>
			<div className="flex-none w-12 h-12 text-center align-middle"></div>
		</div>
	);
}
