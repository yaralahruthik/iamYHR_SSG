import type { NextPage } from 'next';

import classes from './index.module.css';
import Me from '../public/me.webp';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <article className={classes.container}>
      <div className={classes.line} />
      <div className={classes.img}>
        <Image src={Me} alt='Author' placeholder='blur' />
      </div>
      <div className={classes.intro}>
        <h1 className={classes.title}>#iamYHR</h1>
        <h2 className={classes.subTitleOne}>Developer? Writer? Photographer?</h2>
        <h3 className={classes.subTitleTwo}>I do a lot of things!</h3>
      </div>
      <div className={classes.externalLinks}>
        <span>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/yaralahruthik'
          >
            Developer Portfolio
          </a>
        </span>
        <span>
          <a target='_blank' rel='noreferrer' href='https://iamyhr.medium.com/'>
            Writing Portfolio
          </a>
        </span>
        <span>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/i_m_yhr/'
          >
            Photography Portfolio
          </a>
        </span>
      </div>
    </article>
  );
};

export default Home;
