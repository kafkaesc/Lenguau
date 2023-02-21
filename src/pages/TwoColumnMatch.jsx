import { useEffect, useState } from 'react';

import H1 from 'elements/H1';
import MatchButton from 'elements/MatchButton';
import Link from 'elements/Link';
import P from 'elements/P';

import AppBody from 'layout/AppBody';

export default function TwoColumnMatch() {
	const [lValue, setLValue] = useState(null);
	const [rValue, setRValue] = useState(null);
	const debug = false;

	function selectLeftColumn(val) {
		setLValue(val);
	}

	function selectRightColumn(val) {
		setRValue(val);
	}

	useEffect(() => {
		console.log('lValue: ' + lValue + '; rValue: ' + rValue + ';');
	}, [lValue, rValue]);

	return (
		<AppBody>
			<div className="w-full">
				<H1 className="text-5xl font-bold text-center">Category Name</H1>
			</div>
			<div className="inline-block w-1/2 p-1">
				<MatchButton onClick={() => selectLeftColumn('Abc')}>Abc</MatchButton>
				<MatchButton onClick={() => selectLeftColumn('Def')}>Def</MatchButton>
				<MatchButton onClick={() => selectLeftColumn('Ghi')}>Ghi</MatchButton>
				{debug && (
					<P>
						<code>lval: </code>
						{lValue}
					</P>
				)}
			</div>
			<div className="inline-block w-1/2 p-1">
				<MatchButton onClick={() => selectRightColumn('Rst')}>Rst</MatchButton>
				<MatchButton onClick={() => selectRightColumn('Uvw')}>Uvw</MatchButton>
				<MatchButton onClick={() => selectRightColumn('Xyz')}>Xyz</MatchButton>
				{debug && (
					<P>
						<code>rval: </code>
						{rValue}
					</P>
				)}
			</div>
			<P className="text-center">
				<Link to="/">Home</Link>
			</P>
		</AppBody>
	);
}
