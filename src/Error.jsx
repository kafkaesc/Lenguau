import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

export default function Error() {
	return (
		<div>
			<H1>¡Ay!</H1>
			<P className="text-center">There was an error</P>
			<P className="text-center">
				<Link to="/">Return Home</Link>
			</P>
		</div>
	);
}
