import { Link as RRLink } from 'react-router-dom';

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
