import Head from 'next/head';

import classes from './layout.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useEffect } from 'react';

let firstTime = true;

const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    const resize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', resize);

    if (firstTime) {
      resize();
      firstTime = false;
    }

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

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
