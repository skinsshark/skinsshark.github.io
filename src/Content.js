import * as React from 'react';
import styles from './Content.module.css';

function Face() {
  return (
    <>
      <header>
        <h1>Sharon Zheng</h1>
      </header>

      <div className={styles.container}>
        <article>
          <ul>
            <li>
              Creative Technologist — Making art in the digital and print worlds
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
                    href="https://sushiaipod.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ai爱pod
                  </a>{' '}
                  &mdash; Photo gallery inspired by the iPod Classic, featuring the{' '}
                  <a 
                    href="https://www.sushiai-rwc.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sushi Ai
                  </a>{' '}omakase experience in Redwood City
                </li>
                <li>
                  <a
                    href="https://ur-aura.sharonzheng.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UR–AURA
                  </a>{' '}
                  &mdash; An digital aura photo booth and in-person experience. Visit a pop-up IRL to purchase your aura photo and companion guidebook
                </li>
                <li>
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
                  . Limited edition stickers available <a
                    href="https://sharonxsherman.myshopify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
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
                    href="https://the-offisse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Offisse
                  </a>{' '}
                  &mdash; High-end fashion inspired by The Office (US)
                </li>
                <li>
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
                <sup>2024</sup>
                <a
                  href="https://aiphabet.sharonzheng.com/"
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
                &mdash; A tool to visualize your crowd at a public speaking event
              </li>
              <li>
                <sup>2023</sup>
                <a
                  href="https://pokemon-eat.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokémon Eat
                </a>{' '}
                &mdash; Meal planning for Snorlax using your ingredients in
                Pokemon Sleep. Offline mode available
              </li>
              <li>
                <sup>2020</sup>
                <a
                  href="https://social-distance-online.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Social Distance This for Me
                </a>{' '}
                &mdash; Easy-to-add script for your website so we can get the
                internet to social distance too
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
                <sup>2019</sup>
                <a
                  href="https://skinsshark.github.io/see-attle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Seattle
                </a>
                ,{' '}
                <a
                  href="https://skinsshark.github.io/winyc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New York City
                </a>
                ,{' '}
                <a
                  href="https://skinsshark.github.io/london-2019"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  London
                </a>{' '}
                &mdash; City guides for towns I have lived in, Bay Area edition
                in the works
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
                &mdash; Articles on Medium covering a range of topics, including
                my design process, technical project tutorials, and my dad
              </li>
              <li>
                <sup>2018</sup>
                <a
                  href="https://iloveyouandyoulove.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ILYYLM (I Love You, You Love Me)
                </a>{' '}
                &mdash; Valentine's Day project to send e-cards to all your
                lovers
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
              <li>
                <sup>2017</sup>
                <a
                  href="https://sunday-desert.github.io/holiday-swim"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Holiday Swim
                </a>{' '}
                &mdash; Generated phone wallpapers featuring the fish from The
                Illustrated Encyclopedia of Fish launched the previous year.{' '}
                <a
                  href="https://leviv.cool/projects/2022/01/30/All-I-want-for-christmas.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inspired others to create fun internet experiences
                </a>
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
                <sup>NEW!</sup>
                  December 19-21, 2025 &mdash; Sharon Zine at <a
                    href="https://tokyoartbookfair.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Tokyo Art Book Fair</a>
                </li>
                <li>
                  September 25, 2025 &mdash; Sharon Zine at <a
                    href="https://adobe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Adobe</a> Employee Marketplace
                </li>
                <li>
                  June 14, 2025 &mdash; UR-AURA at <a
                    href="https://www.bigwestwinefest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Big West Wine Fest</a> in Guerneville, CA
                </li>
                <li>
                  May 10-11, 2025 &mdash; Sharon Zine at <a
                    href="https://www.instagram.com/p/DIUBZ1Nugpt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Basilica Farm & Flea</a> in Upstate NY
                </li>
                <li>
                  February 1, 2025 &mdash; UR-AURA at <a
                    href="https://www.eventbrite.com/e/neo-lunar-lunar-new-year-reimagined-tickets-1124707453269?aff=vendors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Neo Lunar: LNY Reimagined</a> in Oakland
                </li>
                <li>
                  November 8, 2024 &mdash; Sharon Zine at <a
                    href="https://thethirdplace.is/event/november-waverly-block-party-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Waverly Block Party</a> in SF Chinatown
                </li>
                <li>
                  September 7, 2024 &mdash; UR-AURA Pop-up at <a
                    href="https://bazaartoronto.ca/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >BAZAAR Toronto</a>
                </li>
                <li>
                  September 1, 2024 &mdash; Sharon Zine at <a
                    href="https://sfzinefest.org.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >San Francisco Zine Festival</a>
                </li>
                <li>
                  August 24, 2024 &mdash; Hosted <a
                    href="https://lu.ma/aa05swp5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >The Intersection of Art and Technology</a> at <a
                    href="https://www.archive.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Internet Archive</a>
                </li>
                <li>
                  July 29, 2024 &mdash; Mahj' & Collage with <a
                    href="https://instagram.com/ourmutualfriendsf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Our Mutual Friend SF</a> and <a
                    href="https://www.themahjongproject.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >The Mahjong Project</a> at <a
                    href="https://shop.sportsbasement.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Sports Basement</a>
                </li>
                <li>
                  July 20, 2024 &mdash; UR–AURA Launch Event at <a
                    href="https://www.dogpatchhub.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >The Dogpatch Hub</a> with <a
                    href="https://sfartbookfair.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >SF Art Book Fair</a>
                </li>
                <li>
                  June 8, 2024 &mdash; MAHJONG: The Intersections of Tradition, Community, and Craft for <a
                    href="https://sfdesignweek.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >SF Design Week</a> at <a
                    href="https://cclarkgallery.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Catharine Clark Gallery</a>
                </li>
                <li>
                  May 7, 2024 &mdash; Sharon Zine at <a
                    href="https://adobe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Adobe</a> Employee Marketplace
                </li>
                <li>
                  May 4, 2024 &mdash; Community Mahjong + Guide Restock at <a
                    href="https://www.shopnikoniko.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Nikoniko Gifts</a>
                </li>
                <li>
                  March 28, 2024 &mdash; Mahjong Night at <a
                    href="https://landtoseanyc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Land to Sea NYC</a>
                </li>
                <li>
                  March 23, 2024 &mdash; Mahjong Night in Chinatown with <a
                    href="https://www.instagram.com/unit.270/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Unit 270</a> in Toronto
                </li>
                <li>
                  March 10, 2024 &mdash; Mahjong Afternoon at <a
                    href="https://gardencreamery.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Garden Creamery</a>
                </li>
              </ul>
            </article>
          </section>
        </section>

        <section>
          <h2>Education</h2>
          <hr />

          <article>
            <div>
              <h3>
                Bachelor of Applied Science, Computer Engineering&mdash; <br />
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
                Visiting contemporary art museums, volunteering around the city
                (currently at{' '}
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
                , running for utility but not for fun, playing Just Dance on Wii, trying to guess your
                zodiac sign, furniture shopping, white tea, and black coffee
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
    </>
  );
}

export default Face;
