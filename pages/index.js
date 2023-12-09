import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css'
import Typed from 'typed.js';

function shuffle(array) {
  /* eslint-disable one-var */
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    /* eslint-disable no-plusplus */
    currentIndex--;

    // And swap it with the current element.
    /* eslint-disable no-param-reassign */
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const things = [
  'She is very cool.',
  'She is super cool.',
  'She has a dorky maniac laugh.',
  'She makes everyone laugh.',
  'She has a big laugh.',
  'She is a dork.',
  'She is a goofball.',
  'Her smile is genuine.',
  'She is a nerd about Excel.',
  'She has a very large brain.',
  'She is very compassionate.',
  'She is very empathetic.',
  'She feels so much she cries.',
  'Her ass is so phat.',
  'Her body makes me melt.',
  'Her boobies are excellent.',
  'She is down to clown.',
  'Her wit is unatainable.',
  'She makes you feel like you are liked.',
  'She wants to know the real you (even if you don\'t want her to).',
  'She makes butter.',
  'She makes excellent desserts.',
  'She doesn\'t want to be gotten to be known.',
  'She loves the humor that makes you groan.',
  'She doesn\'t want me to call her daddy.',
  'She is a good girl but can also be a bad girl.',
  'She tells you things that make you feel good.',
  'She wants to eat all the food with me.',
  'You will have fun when she is around.',
  'She brings the joy to wherever she goes.',
  'People trust her to do a good job.',
  'When you\'re feeling sad she will try to make you feel better.',
  'She feels so much it hurts her.',
  'She will give you the cummies and she will take the cummies.',
  'She will let you have the last bite (most of the time).',
  'She is shy and awkward in that way that endears your heart.',
  'She loves so much it hurts her.',
  'She knows what\'s good.',
  'She has good book suggestions.',
  'You could buy her crafts at the store.',
  'She sends the best TikToks.',
  'When she is mad but you look at her and she can\'t keep the smile from forming.',
  'She is a leader.',
  'When the moon comes out and it\'s really bright and big, and she can\'t hold back her excitement.',
  'She will plant your favorite flower.',
  'When she is a bird.',
  'The spaghetti she makes that fills your stomach with warmth and satisfaction.',
  'When she\'s not afraid to spend a bunch of time judging other people with you even though she knows it\'s not nice.',
  'When the tears start coming even though it was a really corny scene.',
  'When you scroll through her photo album and it\'s pic after pic of Blackberry and Soup.',
  'When she keeps on trying to love her family even when they disappoint her.',
  'When she forgives you for being foolish and saying mean things or doing mean things.',
  'When she\'s afraid to talk to the man at the counter or on the phone without you.',
  'When, no matter how hot the day, that butt cheek is always ready to cool you down.',
  'Accepts me dispite my flaws and foibles.',
  'When she uses one of those big words you know she just read in a book recently.',
  'When she uses one of those big words she has stored up for the perfect moment.',
  'That crazy laugh that drives me mad with love and forces a smile on my mean old face.',
  'When the tears flow, and they flow, and she doesn\'t know why but they don\'t stop.',
  'When she is mad and you can see the smile coming but she doesn\'t want you to know.',
  'An unceasing love for all things loveable.',
  'Her unwavering optimisim that there is good and love in the world and you might just be worth some of it.',
  'That big laugh that fills everyone with warmth and comfort.',
  'Her unrelenting search for the earnest.',
  'Her unending devotion to the same three TV shows year, after year, after year.',
  'Her soft serenity -- like faded words from an old book, full of wisdom, lost and found again.',
  'Her love for the softest and the squishiest.',
  'The way that love hurts her so much and how it makes the tears trickle without a moment to spare.',
  'Her love of nature and of all things with life and feeling.',
  'The quiet desperation for love, and acceptance, and fondness, and all those feelings that make your chest tight when the emotion is heavy.',
  'Her eye for the gentleness of the world on a backdrop of chaos and mundanity.',
  'How she can be a quiet moment during a long day.',
  'The depth of her emotion, the firehouse of love -- an unnending spring of adoration.',
  'She is the cat at the top of the stairs looking down for new friends and old.',
  'She is the moss on the side of the rock. The fallen leaf. All of Autumn\'s cast out lot.',
  'The pain that runs through her deeply and the nature that heals it.',
  'How she is the dandelion growing from the crack in the rock.',
  'The cold breath misting from her on a winters morning, yearning for coffee or tea or hot mulled wine, wrapped tighter than a young cabbage -- shy but growing fonder and fonder of you.',
  'Her love for food and her drive to eat it with me.',
  'The way a new accent (or a familiar one) makes her weak at the knees.',
  ':]',
  'Her friendship despite my many, many flaws.',
  'When she gives you those warm comfy cuddles and wiggles that booty.',
  'When she kisses the babies on the nose and keeps on trying even though they hate.',
  'When she puts a scoop of poop on it.',
  'She\'s just a baby.',
  'She is the best Mrs. Manger that could possibly exist.',
  'She\'s a strong independant, working girl but still wants big strong man arms to take care of her.',
  'When she see\'s something you like and you see the lips a lickin\'.',
  'When she wants the yummy yummers and the ice cream but she won\'t get it unless you go too.',
  'Her quips are infuriating.'
]

export default function Home() {
   // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Things I love about Kelila.'].concat(shuffle(things)),
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: false,
      showCursor: false,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out2',
      fadeOutDelay: 1250,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>My love.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.flexContainer}>
          <div className={styles.row}>
            <div className={styles.flexItem}>
              <div ref={el} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
