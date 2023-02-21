import H1 from 'elements/H1';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';
import LenguaToggle from 'layout/LenguaToggle';

export default function Instructions() {
	return (
		<AppBody>
			<H1>Instructions</H1>
			<div className="text-center">
				<LenguaToggle />
			</div>
			<P>How to use this project to practice</P>
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
