import type { NextPage } from 'next';

import classes from './index.module.css';

const About: NextPage = () => {
  return (
    <article className={classes.container}>
      <h1 className={classes.title}>What am I?</h1>
      <h2 className={classes.subTitle}>
        I am a homo sapiens trying to evolve. Well,
      </h2>
      <p className={classes.info}>
        {`A wannabe zoologist with computer science background, loves dogs, cats,
        and others animals that do not try to kill me. I seldom game. I do play
        soccer and learnt a lot of martial arts to not get bullied. I read
        fiction, a huge fan of Amish's Shiva Trilogy, and I was kind of late
        into all this reading books that I have only read about 100 books till
        date. I hate music it distracts me, so I listen to it only when I am
        highly distracted. I love watching The Big Bang Theory, Naruto, The
        Mentalist, Lucifer, Dr House MD and any documentaries regarding our
        Earth. By the way, Global Warming is real, and its effects are already
        felt.`}
      </p>
      <p className={classes.info}>
        {`I love animals and I eat them too; I do not see why some people are
        troubled by that fact (I mean I am an omnivore, I got molars and cannine
        teeth to prove it). I am fascinated by a cat's curiosity and a dog's
        honesty. Trees and plants make me feel so surreal.`}
      </p>
      <p className={classes.info}>
        {`I like spending money, but I spend it only on quality items as you know I am
        concerned about Global Warming (also I do not like it when someone owns
        the same thing I own). Vanity is one of my favourite words. These books
        have broadened my mind; "The Power of Habit", "The Influential Mind" and
        "What Every Body is Saying".`}
      </p>
      <p className={classes.info}>
        {`I do not like to remember things and somehow, I am good at Mathematics.
        I like to be organised and follow rules if they are logically placed. I
        keep my shoes clean always (you see a person's shoe can reveal a lot about
        them).`}
      </p>
      <p className={classes.info}>
        {`I think I blabbered enough about me, I write more on `}
        <a
          className={classes.socialLink}
          target='_blank'
          rel='noreferrer'
          href='https://iamyhr.medium.com/'
        >
          {`'Medium'`}
        </a>
        .
      </p>
    </article>
  );
};

export default About;
