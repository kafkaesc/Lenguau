import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';

export default function About() {
	return (
		<AppBody>
			<H1>About Component</H1>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<P>About this project</P>
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
