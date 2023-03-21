import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

const En = () => (
	<P>
		Lengua means language in Spanish. Guau is wow&mdash;it is literally wow
		written phonetically. Put them together and you get leng-wow!
	</P>
);

const Es = () => (
	<P className="text-center">Lengua y guau se combinan convertirse Len-guau!</P>
);

export default function AboutTheName() {
	return <LenguaSpan en={<En />} es={<Es />} />;
}
