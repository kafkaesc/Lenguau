import { Link as RRLink } from 'react-router-dom';

/**
 * @param {string|undefined} className Optional string, if it exists it
 * will be appended to the classes for the react-router link component
 * @param {any} props Link component props that will be passed along
 * @returns {JSX.Element}
 */
export default function Link({ className, ...props }) {
	return className ? (
		<RRLink
			{...props}
			className={`text-blue hover:underline ${props.className}`}
		></RRLink>
	) : (
		<RRLink {...props} className="text-blue hover:underline"></RRLink>
	);
}
