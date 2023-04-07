import * as React from 'react';

function Face() {
  return (
    <>
      <header>
        <h1>Sharon Zheng</h1>
      </header>

      <div className="container">
        <article>
          <ul>
            <li>Front End Engineer — React Native @ Meta</li>
            <li>sharzheng@gmail.com</li>
            {/* <li>
              <a
                href="https://github.com/skinsshark"
                target="_blank"
                rel="noopener noreferrer">
                github.com/skinsshark
              </a>
            </li> */}
            <li>
              <a
                href="https://instagram.com/sharon"
                target="_blank"
                rel="noopener noreferrer">
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
                    href="https://the-offisse.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    The Offisse
                  </a>{' '}
                  &mdash; High end fashion inspired by The Office (US)
                </li>
                <li>
                  <a
                    href="https://skinsshark.github.io/kwaterloo"
                    target="_blank"
                    rel="noopener noreferrer">
                    Kitchener/Waterloo
                  </a>,{' '}
                  <a
                    href="https://skinsshark.github.io/see-attle"
                    target="_blank"
                    rel="noopener noreferrer">
                    Seattle
                  </a>,{' '}
                  <a
                    href="https://skinsshark.github.io/winyc"
                    target="_blank"
                    rel="noopener noreferrer">
                    New York City
                  </a>,{' '}
                  <a
                    href="https://skinsshark.github.io/london-2019"
                    target="_blank"
                    rel="noopener noreferrer">
                    London
                  </a>{' '}
                  &mdash; City guides for some towns I have lived in, Bay Area edition coming soon
                </li>
                <li>
                  <a
                    href="https://skinsshark.github.io/cny2020"
                    target="_blank"
                    rel="noopener noreferrer">
                    Chinese Zodiac
                  </a>{' '}
                  &mdash; Which Chinese zodiac animal are you? Created for New Years 2020, wrote about the process on {' '}
                  <a
                    href="https://medium.com/@sharonzheng/how-i-built-my-chinese-new-year-project-34b9d8115f99"
                    target="_blank"
                    rel="noopener noreferrer">
                    A How-To Guide for the Modern World
                  </a>
                </li>
                <li>
                  <a
                    href="https://skinsshark.github.io/tachi"
                    target="_blank"
                    rel="noopener noreferrer">
                    Tachi
                  </a>{' '}
                  &mdash; Photo gallery of a small omakase experience in Toronto
                </li>
                {/* <li>[TBA] &mdash; An experimental mobile browser experience</li>
                <li>Many more private repos...</li> */}
                <li className="wip">
                  <a
                    href="https://skinsshark.github.io/yeet-hay"
                    target="_blank"
                    rel="noopener noreferrer">
                    Yeet Hay or Yeet Nay?
                  </a>{' '}
                  &mdash; Bringing analog to digital in a new zine reading format. I designed it in Toronto,
                  riso-printed in Seattle, shot in San Francisco
                </li>
              </ul>
            </article>
          </section>

          {/* <section>
            <h3>Freelance Web Developer</h3>
            <div className="dates">
              <h4>Jun 2018-2020</h4>
            </div>
            <ul>
              <li>
                Highlight &mdash;{' '}<a
                  href="https://esther-cheung.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  esther-cheung.com
                </a>
              </li>
              <li>
                Worked with clients to discuss design and develop a plan to meet
                goals and objectives using Trello and Contentful CMS
              </li>
            </ul>
          </section> */}

          {/* <section>
            <h3>
              Co-founder/Software Developer &mdash; <br />
              <a
                href="https://sunday-desert.github.io/"
                target="_blank"
                rel="noopener noreferrer">
                sunday-desert.github.io
              </a>
            </h3>
            <div className="dates">
              <h4>Aug 2017-2018</h4>
            </div>
            <ul>
              <li>
                Founded studio to create interactive art using different
                languages, frameworks and libraries
              </li>
              <li>
                Collaborated with partner on design and worked independently on
                development
              </li>
              <li>
                Projects such as{' '}
                <a
                  href="https://iloveyouandyoulove.me"
                  target="_blank"
                  rel="noopener noreferrer">
                  ILY&YLM
                </a>
              </li>
            </ul>
          </section> */}
        </section>
        {/* <section>
          <h2>Previous Work Experience</h2>
          <hr />

          <article>
            <ul>
              <li>
                Facebook, London &mdash; <br />
                <i>Front End Engineering Intern</i> (Sept-Dec 2019)
              </li>
              <li>
                Facebook, New York &mdash; <br />{' '}
                <i>Front End Engineering Intern</i> (Sept-Dec 2018)
              </li>
              <li>
                Lyft, Seattle &mdash; <br />
                <i>Software Engineer Intern</i> (Jan-Apr 2018)
              </li>
              <li>
                Apple, Sunnyvale &mdash; <br />
                <i>Software Engineer Intern</i> (May-Aug 2017)
              </li>
            </ul>
          </article>
        </section> */}

        <section>
          <h2>Archive</h2>
          <hr />

          <div>
            <h3>
              Full list available on{' '}
              <a
                href="https://github.com/skinsshark/skinsshark.github.io/blob/master/README.md"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </h3>
          </div>

          <article>
            <ul>
              <li>[2020]{' '}
                <a
                  href="https://social-distance-online.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer">
                  Social Distance This for Me
                </a>{' '}
                &mdash; Easy-to-add script for your website so we can get the
                internet to social distance too
              </li>
              <li>
                [2020] Just the Tip
                &mdash; A tip calculating Messenger bot for those embarrassed to pull out the
                calculator app at the restaurant table
              </li>
              <li>[2020] <a
                  href="https://inner-self-portrait.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Inner Self Portrait
                </a>{' '}
                &mdash; Inspired by a creative workshop by{' '}
                <a
                  href="https://www.instagram.com/metaopenarts/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Open Arts
                </a>{' '}
                and{' '}
                <a
                  href="https://www.stefanieposavec.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Stefanie Posavec
                </a>
              </li>
              <li>
                [2019] "Fruit Sha La"
                &mdash; An Instagram face filter with over 75,000 impressions
              </li>
              {/* <li>
                [2019] DIY String Lights
                &mdash; How to build battery powered string lights using LEDs and other electrical components
              </li> */}
              {/* <li>
                [2019]{' '}
                <a
                  href="https://skinsshark.github.io/thank-you"
                  target="_blank"
                  rel="noopener noreferrer">
                  Thank You
                </a>{' '}
                &mdash; Drawing my favorite shopping bags in Illustrator
              </li> */}
              {/* <li>[2018]{' '}
                <a
                  href="https://github.com/skinsshark/Blessed"
                  target="_blank"
                  rel="noopener noreferrer">
                  Blessed
                </a>{' '}
                &mdash; Amazon Echo Skill where Alexa says "bless you" when you sneeze, if you tell Alexa that you sneezed
              </li> */}
              <li>[2018]{' '}
                <a
                  href="https://iloveyouandyoulove.me"
                  target="_blank"
                  rel="noopener noreferrer">
                  ILYYLM (I Love You, You Love Me)
                </a>{' '}
                &mdash; Valentine's Day project to send all your lovers e-cards
              </li>
              {/* <li>[2018]{' '}
                <a
                  href="https://skinsshark.github.io/shuji"
                  target="_blank"
                  rel="noopener noreferrer">
                  Shuji
                </a>{' '}
                &mdash; Photos of my shoes using{' '}
                <a
                  href="https://apps.apple.com/us/app/huji-cam/id781383622"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Huji Cam
                </a> and playing with loading animations
              </li> */}
              <li>[2017]{' '}
                <a
                  href="https://github.com/skinsshark/waterflow"
                  target="_blank"
                  rel="noopener noreferrer">
                  Waterflow
                </a>{' '}
                &mdash; Chrome extension to streamline course selection at the University of Waterloo
              </li>
              <li>[2017]{' '}
                <a
                  href="https://sunday-desert.github.io/holiday-swim"
                  target="_blank"
                  rel="noopener noreferrer">
                  Holiday Swim
                </a>{' '}
                &mdash; Generated phone wallpapers featuring the fish from The Illustrated Encyclopedia of
                Fish launched the previous year.{' '}
                <a
                  href="https://leviv.cool/projects/2022/01/30/All-I-want-for-christmas.html"
                  target="_blank"
                  rel="noopener noreferrer">
                  Inspired others to create fun internet experiences
                </a>
              </li>
              <li>[2016]{' '}
                <a
                  href="https://skinsshark.github.io/the-sea"
                  target="_blank"
                  rel="noopener noreferrer">
                  The Illustrated Encyclopedia of Fish
                </a>{' '}
                &mdash; Designed this project around learning React
              </li>
              {/* <li>[2016]{' '}
                <a
                  href="https://skinsshark.github.io/backgrounds/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Backgrounds
                </a>{' '}
                &mdash; Learning how to use AngularJS by creating a showcase of wallpapers
              </li> */}
              {/* <li>[2016]{' '}
                <a
                  href="https://devpost.com/software/mhacks8-f1azed"
                  target="_blank"
                  rel="noopener noreferrer">
                  Anomia
                </a>{' '}
                &mdash; Remember some lyrics but can't recall the tune of the song? This Alexa skill will help you find the song. Winner of MHacks8
              </li> */}
              {/* <li>[2015]{' '}
                <a
                  href="https://github.com/skinsshark/six-times"
                  target="_blank"
                  rel="noopener noreferrer">
                  Six Times
                </a>{' '}
                &mdash; High school art thesis (woodworking and robotics)
              </li> */}
              {/* <li>[2013-2015]{' '}
                <a
                  href="https://exoticlayouts.tumblr.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  exoticlayouts
                </a>{' '}
                &mdash; A collection of Tumblr themes available for public use and the start of my web journey
              </li> */}
            </ul>
          </article>
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
            <div className="dates">
              <h4>Apr 2020</h4>
            </div>
          </article>
        </section>



        {/* <section>
          <h2>Other Activities/Local Shoutouts</h2>
          <hr />

          <article>
            <ul>
              <li>
                <a
                  href="https://www.strava.com/athletes/113686272"
                  target="_blank"
                  rel="noopener noreferrer">
                  Strava
                </a>{' '}
                &mdash; I run for utility, not for fun
              </li>
              <li>
                <a
                  href="https://social-distance-online.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer">
                  Letterboxd{' '}
                </a>
                &mdash; Recent cinephile,{' '}
                <a
                  href="https://social-distance-online.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer">
                  SFFilm
                </a> volunteer, previously{' '}
                <a
                  href="https://www.festival-cannes.com/en/participer/accredit"
                  target="_blank"
                  rel="noopener noreferrer">
                  3 Days in Cannes
                </a> attendee,{' '}
                <a
                  href="https://www.festival-cannes.com/en/participer/accredit"
                  target="_blank"
                  rel="noopener noreferrer">
                  Roxie
                </a> member
              </li>
              <li>
                <a
                  href="https://skinsshark.github.io/cny2020"
                  target="_blank"
                  rel="noopener noreferrer">
                  Invisalign
                </a>{' '}
                &mdash; Reach out if you'd like my referral link and we can both get 100$
              </li>
              <li>
                <a
                  href="https://medium.com/@sharonzheng"
                  target="_blank"
                  rel="noopener noreferrer">
                  Duolingo
                </a>{' '}
                &mdash; 250 day streak (live updates)
              </li>
              <li>
                <a
                  href="https://medium.com/@sharonzheng"
                  target="_blank"
                  rel="noopener noreferrer">
                  Duolingo
                </a>{' '}
                &mdash; 250 day streak (live updates)
              </li>
            </ul>
          </article>
        </section> */}

        <section>
          <h2>Things I Like</h2>
          <hr />

          <article>
            <div>
              <p>
                Visiting contemporary art museums, Olafur Eliasson's "Din blinde
                passage (Your blind passenger)", pattern drafting, reformer pilates, hot
                yoga, trying to guess your zodiac sign, thinking about joining a
                gym, furniture shopping, white tea, and black coffee
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
        </footer>
      </div>
    </>
  );
}

export default Face;
