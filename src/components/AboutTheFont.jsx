import A from 'elements/A';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

const En = () => (
	<>
		<P>
			Lenguau uses Lato 1.0, a font designed by{' '}
			<A href="http://www.lukaszdziedzic.eu" rel="noreferrer" target="_blank">
				Łukasz Dziedzic
			</A>{' '}
			and made available for free use via{' '}
			<A href="https://fonts.google.com" rel="noreferrer" target="_blank">
				Google Fonts
			</A>{' '}
			and the{' '}
			<A href="https://openfontlicense.org" rel="noreferrer" target="_blank">
				SIL Open Font License
			</A>
			.
		</P>
	</>
);

const Es = () => (
	<>
		<P>
			Lenguau usa Lato 1.0, una fuente diseñada por{' '}
			<A href="http://www.lukaszdziedzic.eu" rel="noreferrer" target="_blank">
				Łukasz Dziedzic
			</A>{' '}
			y disponible por{' '}
			<A href="https://fonts.google.com" rel="noreferrer" target="_blank">
				Google Fonts
			</A>{' '}
			y la{' '}
			<A href="https://openfontlicense.org" rel="noreferrer" target="_blank">
				SIL Open Font License
			</A>
			.
		</P>
	</>
);

export default function AboutTheFont() {
	return <LenguaSpan en={<En />} es={<Es />} />;
}
