import Head from 'next/head';

import Header from '../components/header/header';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>YHR</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Header />
			<>{children}</>
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
