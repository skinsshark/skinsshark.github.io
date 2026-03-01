import * as React from 'react';
import styles from './Content.module.css';

function Face() {
  return (
    <main className={styles.printPage}>
      <img
        className={styles.printBackgroundImage}
        src="/cube.svg"
        alt="Printable website"
        aria-hidden="true"
      />
      <div className={styles.printContent}>
        <header>
          <h1>Sharon Zheng</h1>
        </header>

        <div className={styles.container}>
          <article>
            <ul>
              <li>
                Creative Technologist — Making art in the digital and print
                worlds
              </li>

              <li>sharzheng@gmail.com</li>
              <li>
                <a
                  href="https://instagram.com/sharon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram.com/sharon
                </a>
              </li>
            </ul>
          </article>

          <section>
            <h2>Project Shortlist</h2>
            <hr />
            <section>
              <article>
                <ul>
                  <li>
                    <a
                      href="https://horsehabit.sharonzheng.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Horse Habit
                    </a>{' '}
                    &mdash; Original ASCII art for 2026, the Year of the Horse
                  </li>
                  <li>
                    <a
                      href="https://ur-aura.sharonzheng.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UR–AURA
                    </a>{' '}
                    &mdash; An digital aura photo booth and in-person
                    experience. Visit a pop-up IRL to purchase your aura photo
                    and companion guidebook
                  </li>
                  <li>
                    <a
                      href="https://skinsshark.github.io/yeet-hay"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yeet Hay or Yeet Nay?
                    </a>{' '}
                    &mdash; Bringing analog to digital in a new reading format.
                    Riso-printed zine available at{' '}
                    <a
                      href="https://www.printedmatter.org/catalog/publisher/17545"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Printed Matter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sushiaipod.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ai爱pod
                    </a>{' '}
                    &mdash; Photo gallery inspired by the iPod Classic,
                    featuring the{' '}
                    <a
                      href="https://www.sushiai-rwc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sushi Ai
                    </a>{' '}
                    omakase experience in Redwood City
                  </li>
                  <li>
                    <a
                      href="https://the-offisse.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Offisse
                    </a>{' '}
                    &mdash; High-end fashion inspired by The Office (US)
                  </li>
                </ul>
              </article>
            </section>
          </section>

          <section>
            <h2>Work Experience</h2>
            <hr />

            <article>
              <ul className={styles.tight}>
                <li>
                  <sup>2025</sup>
                  Gamma, San Francisco &mdash; <i>Design Engineer</i>
                </li>
                <li>
                  <sup>2023</sup>
                  Magical Tome, San Francisco &mdash; <i>Front End Engineer</i>
                </li>
                <li>
                  <sup>2018</sup>
                  Meta, San Francisco/New York/London &mdash;{' '}
                  <i>Front End Engineer</i>
                </li>
                <li>
                  <sup>2018</sup>
                  Lyft, Seattle &mdash; <i>Software Engineer Intern</i>
                </li>
                <li>
                  <sup>2017</sup>
                  Apple, Sunnyvale &mdash; <i>Software Engineer Intern</i>
                </li>
              </ul>
            </article>
          </section>

          <section>
            <h2>Archive</h2>
            <hr />

            <article>
              <ul>
                <li>
                  <sup>2026</sup>
                  <a
                    href="https://gray-area-foundation.myshopify.com/collections/whole-earth-redux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whole Earth Redux
                  </a>{' '}
                  &mdash; A print publication from{' '}
                  <a
                    href="https://grayarea.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gray Area
                  </a>{' '}
                  offering new perspectives on the Whole Earth Catalog, the
                  magazine that defined California's counterculture
                </li>
                <li>
                  <sup>2024</sup>
                  <a
                    href="https://sharon.metalabel.com/aiphabet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aiphabet
                  </a>{' '}
                  &mdash; Free, printable zine created using Stable Diffusion
                </li>
                <li>
                  <sup>2024</sup>
                  <a
                    href="https://imscared.sharonzheng.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mom Come Pick Me Up, I'm Scared
                  </a>{' '}
                  &mdash; A tool to visualize your crowd at a public speaking
                  event
                </li>
                <li>
                  <sup>2024</sup>
                  <a
                    href="https://www.printedmatter.org/catalog/publisher/17545"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to Play Mahjong
                  </a>{' '}
                  &mdash; An instruction manual about the traditional Chinese
                  game of Mahjong as taught to me by my family. Hosted multiple
                  community events, including at{' '}
                  <a
                    href="https://sfdesignweek.org/event/mahjong-the-intersections-of-tradition-community-and-craft"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    San Francisco Design Week
                  </a>
                  . Limited edition stickers available{' '}
                  <a
                    href="https://friendswith.business/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                </li>
                <li>
                  <sup>2020</sup>
                  <a
                    href="https://skinsshark.github.io/kwaterloo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kitchener/Waterloo
                  </a>{' '}
                  &mdash; Commemorating my college experience with a list of
                  favorite places around town
                </li>
                <li>
                  <sup>2019</sup>
                  <a
                    href="https://skinsshark.github.io/tachi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tachi
                  </a>{' '}
                  &mdash; Photo gallery of a small omakase experience in Toronto
                </li>
                <li>
                  <sup>2018</sup>
                  <a
                    href="https://medium.com/@sharonzheng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A How-to Guide For the Modern World
                  </a>{' '}
                  &mdash; Articles on Medium covering a range of topics,
                  including my design process, technical project tutorials, and
                  my dad
                </li>
                <li>
                  <sup>2017</sup>
                  <a
                    href="https://github.com/skinsshark/waterflow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Waterflow
                  </a>{' '}
                  &mdash; Chrome extension to streamline course selection at the
                  University of Waterloo
                </li>
              </ul>
            </article>

            <div>
              <p>
                Full list available on{' '}
                <a
                  href="https://github.com/skinsshark/skinsshark.github.io/blob/master/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2>In-Person Events</h2>
            <hr />
            <section>
              <article>
                <ul>
                  <li>
                    February 7, 2026 &mdash;{' '}
                    <a href="https://grayarea.org/course/workshop-lunar-new-year-ascii-art/">
                      DIY Lunar New Year ASCII Art Workshop
                    </a>{' '}
                    at Gray Area
                  </li>
                  <li>
                    December 19-21, 2025 &mdash; Sharon Zine at{' '}
                    <a
                      href="https://tokyoartbookfair.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tokyo Art Book Fair
                    </a>
                  </li>
                  <li>
                    September 25, 2025 &mdash; Sharon Zine at{' '}
                    <a
                      href="https://adobe.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Adobe
                    </a>{' '}
                    AAPI Marketplace
                  </li>
                  <li>
                    June 14, 2025 &mdash; UR-AURA at{' '}
                    <a
                      href="https://www.bigwestwinefest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Big West Wine Fest
                    </a>{' '}
                    in Guerneville, CA
                  </li>
                  <li>
                    May 10-11, 2025 &mdash; Sharon Zine at{' '}
                    <a
                      href="https://www.instagram.com/p/DIUBZ1Nugpt/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Basilica Farm & Flea
                    </a>{' '}
                    in Upstate NY
                  </li>
                  <li>
                    February 1, 2025 &mdash; UR-AURA at{' '}
                    <a
                      href="https://www.eventbrite.com/e/neo-lunar-lunar-new-year-reimagined-tickets-1124707453269?aff=vendors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Neo Lunar: LNY Reimagined
                    </a>{' '}
                    in Oakland
                  </li>
                </ul>
              </article>

              <div>
                <p>
                  Full list available on{' '}
                  <a
                    href="https://github.com/skinsshark/skinsshark.github.io/blob/master/EVENTS.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </section>
          </section>

          <section>
            <h2>Education</h2>
            <hr />

            <article>
              <div>
                <h3>
                  Bachelor of Applied Science, Computer Engineering&mdash;{' '}
                  <br />
                  University of Waterloo
                </h3>
              </div>
            </article>
          </section>

          <section>
            <h2>Things I Like</h2>
            <hr />

            <article>
              <div>
                <p>
                  Visiting contemporary art museums, volunteering around the
                  city (currently at{' '}
                  <a
                    href="http://www.adobebooks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adobe Books
                  </a>
                  ), giving generous ratings on{' '}
                  <a
                    href="https://letterboxd.com/szszs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Letterboxd
                  </a>
                  , running for utility but not for fun, playing Just Dance on
                  Wii, trying to guess your zodiac sign, furniture shopping,
                  white tea, and black coffee
                </p>
              </div>
            </article>
          </section>

          <footer>
            {/* <a
            href="https://drive.google.com/file/d/1xVoUFY164g3bh-2nKuJ_k3JcYntWvHYd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            PDF Version (last updated: Aug 2020)
          </a> */}
            <p>☆</p>
            <p>Happy to chat, reach out!</p>
            <ul>
              <li>
                <a
                  href="https://venmo.com/sharzheng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Venmo
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/zhengsharon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </main>
  );
}

export default Face;
