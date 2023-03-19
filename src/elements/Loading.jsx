import { ReactComponent as LoadingGlobeIcon } from 'assets/images/loading-globe.svg';

export default function Loading({ isLoading, children }) {
	return isLoading ? (
		<>
			<LoadingGlobeIcon className="w-1/4 mx-auto animate-pulse" />
		</>
	) : (
		<>{children}</>
	);
}
