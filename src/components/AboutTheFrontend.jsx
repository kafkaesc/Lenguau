import A from 'elements/A';
import LenguaSpan from 'elements/LenguaSpan';
import P from 'elements/P';

//TODO: Add Jest to en and es.
const En = () => (
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
		for site styles. The code is tested with the{' '}
		<A href="https://testing-library.com/" rel="noreferrer" target="_blank">
			React Testing Library
		</A>{' '}
		and{' '}
		<A href="https://jestjs.io/" rel="noreferrer" target="_blank">
			Jest
		</A>
		.
	</P>
);

const Es = () => (
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
			para los estilos del sitio. El codigo se prueba con{' '}
			<A href="https://testing-library.com/" rel="noreferrer" target="_blank">
				React Testing Library
			</A>{' '}
			y{' '}
			<A href="https://jestjs.io/" rel="noreferrer" target="_blank">
				Jest
			</A>
			.
		</P>
	</>
);

export default function AboutTheFrontend() {
	return <LenguaSpan en={<En />} es={<Es />} />;
}
