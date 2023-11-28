import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function PageTitle({ children, hideBack, noMargin }) {
	hideBack = !!hideBack;
	const child = (
		<div className="flex">
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

	return noMargin ? (
		<div className="m-0">{child}</div>
	) : (
		<div className="mb-2">{child}</div>
	);
}
