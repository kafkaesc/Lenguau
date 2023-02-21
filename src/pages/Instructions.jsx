import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';

export default function Instructions() {
	return (
		<AppBody>
			<H1 className="text-5xl font-bold text-center">Instructions</H1>
			<P>How to use this project to practice</P>
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
