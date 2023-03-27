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
          <h2>Personal Projects</h2>
          <hr />

          <section>
            <div>
              <h3>
                Shortlist &mdash; <br />
                <i>Independent work I've created for fun</i>
              </h3>
            </div>
            <div className="dates">
              <h4>Jul 2017-now</h4>
            </div>
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
                    href="https://skinsshark.github.io/tachi"
                    target="_blank"
                    rel="noopener noreferrer">
                    Tachi
                  </a>{' '}
                  &mdash; Photo gallery of a small omakase experience in Toronto
                </li>
                {/* <li><a
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
                </li> */}
                <li>
                  <a
                    href="https://social-distance-online.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Social Distance This for Me
                  </a>{' '}
                  &mdash; Easy-to-add script to your website so we can get the
                  internet to social distance too
                </li>
                <li>
                  <a
                    href="https://skinsshark.github.io/london-2019"
                    target="_blank"
                    rel="noopener noreferrer">
                    London
                  </a>,{' '}
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
                  </a>{' Guides '}
                  &mdash; A short list of my favorite places in the towns I have lived
                </li>
                <li>
                  <a
                    href="https://skinsshark.github.io/cny2020"
                    target="_blank"
                    rel="noopener noreferrer">
                    Chinese Zodiac
                  </a>{' '}
                  &mdash; Which Chinese zodiac animal are you?
                </li>
                {/* <li>
                  <a
                    href="https://www.instagram.com/a/r/?effect_id=2969821319757901"
                    target="_blank"
                    rel="noopener noreferrer">
                    Fruit Sha La
                  </a>{' '}
                  &mdash; An Instagram face filter with over 75,000 impressions
                </li> */}
                <li>
                  <a
                    href="https://medium.com/@sharonzheng"
                    target="_blank"
                    rel="noopener noreferrer">
                    A How-To Guide for the Modern World
                  </a>{' '}
                  &mdash; Medium articles of various topics
                </li>
                {/* <li>
                  <a
                    href="https://github.com/skinsshark/waterflow"
                    target="_blank"
                    rel="noopener noreferrer">
                    Waterflow
                  </a>{' '}
                  &mdash; Chrome extension to make course selection research
                  more efficient
                </li> */}
                <li>[TBA] &mdash; An experimental mobile browser experience</li>
                <li>Many more private repos...</li>
              </ul>
            </article>
          </section>

          <section>
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
          </section>

          <section>
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
          </section>
        </section>
        <section>
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
        </section>

        <section>
          <h2>Education</h2>
          <hr />

          <section>
            <div>
              <h3>
                Bachelor of Applied Science, Computer Engineering &mdash; <br />
                University of Waterloo
              </h3>
            </div>
            <div className="dates">
              <h4>Apr 2020</h4>
            </div>
          </section>
        </section>

        <section>
          <h2>Things I Like</h2>
          <hr />

          <section>
            <div>
              <p>
                Visiting contemporary art museums, Olafur Eliasson's "Din blinde
                passage (Your blind passenger)", pattern drafting, reformer pilates, hot
                yoga, trying to guess your zodiac sign, thinking of joining a
                gym, furniture shopping, white tea, and black coffee
              </p>
            </div>
          </section>
        </section>

        <footer>
          <a
            href="https://drive.google.com/file/d/1xVoUFY164g3bh-2nKuJ_k3JcYntWvHYd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            PDF Version (last updated: Aug 2020)
          </a>
          <p>Happy to chat, reach out!</p>
        </footer>
      </div>
    </>
  );
}

export default Face;
