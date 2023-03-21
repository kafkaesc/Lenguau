import A from 'elements/A';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

const En = () => (
	<>
		<P>
			The vocabulary payload is delivered via the Lenguau API, a{' '}
			<A href="https://nodejs.org/" rel="noreferrer" target="_blank">
				Node
			</A>{' '}
			backend using the{' '}
			<A href="https://expressjs.com/" rel="noreferrer" target="_blank">
				Express
			</A>{' '}
			framework. The{' '}
			<A
				href="https://github.com/kafkaesc/Lenguau-API/"
				rel="noreferrer"
				target="_blank"
			>
				full code for the Lenguau API
			</A>{' '}
			can be viewed on GitHub.
		</P>
	</>
);

const Es = () => (
	<>
		<P>
			Los datos de vocabulario son entregados por la API de Lenguau, un backend
			de{' '}
			<A href="https://nodejs.org/" rel="noreferrer" target="_blank">
				Node
			</A>{' '}
			que usa el marco{' '}
			<A href="https://expressjs.com/" rel="noreferrer" target="_blank">
				Express
			</A>
			. El{' '}
			<A
				href="https://github.com/kafkaesc/Lenguau-API/"
				rel="noreferrer"
				target="_blank"
			>
				codigo completo para la API de Lenguau
			</A>{' '}
			se puede ver en GitHub.
		</P>
	</>
);

export default function AboutTheBackend() {
	return <LenguaSpan en={<En />} es={<Es />} />;
}
