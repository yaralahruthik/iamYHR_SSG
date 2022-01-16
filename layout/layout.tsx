import Head from 'next/head';

import classes from './layout.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Layout: React.FC = ({ children }) => {
	return (
		<div className={classes.container}>
			<Head>
				<title>YHR</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Header />
			<main className={classes.main}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
