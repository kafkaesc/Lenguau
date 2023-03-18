import A from 'elements/A';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

const en = (
	<P>
		This is a{' '}
		<A href="https://reactjs.org" rel="noreferrer" target="_blank">
			React
		</A>{' '}
		site app that uses{' '}
		<A href="https://reactrouter.com" rel="noreferrer" target="_blank">
			React Router
		</A>{' '}
		for routing. It utilizes{' '}
		<A href="https://tailwindcss.com" rel="noreferrer" target="_blank">
			Tailwind
		</A>{' '}
		for site styles.
	</P>
);

const es = (
	<>
		<P>
			Este es un sitio de{' '}
			<A href="https://reactjs.org" rel="noreferrer" target="_blank">
				React
			</A>{' '}
			que usa{' '}
			<A href="https://reactrouter.com" rel="noreferrer" target="_blank">
				React Router
			</A>{' '}
			para enrutamiento. Lo usa{' '}
			<A href="https://tailwindcss.com" rel="noreferrer" target="_blank">
				Tailwind
			</A>{' '}
			para los estilos del sitio.
		</P>
	</>
);

export default function AboutTheFrontend() {
	return <LenguaSpan en={en} es={es} />;
}
