import type { NextPage } from 'next';

import classes from './index.module.css';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from 'react-icons/ai';

const Contact: NextPage = () => {
  return (
    <article className={classes.container}>
      <p className={classes.text}>
        If you want to work with me, you can reach me here
      </p>
      <a
        className={classes.mail}
        href='mailto:yaralahruthikreddy@gmail.com?Subject=Hello%20YHR'
        target='_top'
      >
        yaralahruthikreddy@gmail.com
      </a>
      <p className={classes.text}>or</p>
      <p className={classes.text}>
        If you like my work, you can follow me anywhere for updates
      </p>
      <div className={classes.icons}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/i_m_yhr/'
        >
          <AiOutlineInstagram className={classes.instagramIcon} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/yaralahruthik'
        >
          <AiOutlineTwitter className={classes.twitterIcon} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/yaralahruthik'
        >
          <AiOutlineGithub className={classes.githubIcon} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/yarala-hruthik-reddy/'
        >
          <AiFillLinkedin className={classes.linkedInIcon} />
        </a>
        <a target='_blank' rel='noreferrer' href='https://iamyhr.medium.com/'>
          <AiFillMediumSquare className={classes.mediumIcon} />
        </a>
      </div>
    </article>
  );
};

export default Contact;
