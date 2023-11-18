import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

/**
 * @returns {JSX.Element} Page-level component showing an error
 * and providing a link to the homepage
 */
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
