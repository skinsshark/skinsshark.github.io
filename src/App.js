import React, { useEffect } from 'react';

import Content from './Content';
import styles from './App.module.css';

function calcValues() {
  const centerContent = document.getElementById('center-content');
  const centerFold = document.getElementById('center-fold');

  const overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

  document.body.style.height = overflowHeight + window.innerHeight + 'px';
  const foldsContent = Array.from(
    document.querySelectorAll('[data-fold-content="true"]'),
  );
  const tick = () => {
    const scroll = -(
      document.documentElement.scrollTop || document.body.scrollTop
    );
    foldsContent.forEach((content) => {
      content.style.transform = `translateY(${scroll}px)`;
    });
    requestAnimationFrame(tick);
  };

  tick();
}

function App() {
  useEffect(() => {
    window.addEventListener('resize', calcValues);
    calcValues();
  }, []);

  const today = new Date();
  const isJan30 =
    today.getFullYear() === 2026 &&
    today.getMonth() === 0 && // Jan = 0
    today.getDate() === 30;

  return (
    <>
      {isJan30 && (
        <div className={styles.sitedown}>
          <div className={styles.header}>
            <h2 className={styles.title}>National Sitedown</h2>
            <h2 className={styles.subtitle}>Fri Jan 30</h2>
          </div>
          <p>
            <a
              href="https://5calls.org/"
              style={{ color: 'inherit', padding: 0 }}
            >
              Visit 5calls.org to take action &rarr;
            </a>
          </p>
          <div className={styles.marquee}>
            <div className={styles.track}>
              <span className={styles.marqueeText}>
                Vote No to ICE Funding — ICE OUT OF EVERYWHERE — STOP ICE TERROR
                — Justice for Renee, Alex, Silverio, Keith and all victims of
                ICE terror —&nbsp;
              </span>
              <span className={styles.marqueeText} aria-hidden="true">
                Vote No to ICE Funding — ICE OUT OF EVERYWHERE — STOP ICE TERROR
                — Justice for Renee, Alex, Silverio, Keith and all victims of
                ICE terror —&nbsp;
              </span>
            </div>
          </div>
        </div>
      )}
      <div className={styles.all}>
        <div className={styles.wrapper3d}>
          <div className={`${styles.fold} ${styles.foldTop}`}>
            <div className={styles.foldAlign}>
              <div data-fold-content="true">
                <Content />
              </div>
            </div>
          </div>
          <div className={styles.fold} id="center-fold">
            <div className={styles.foldAlign}>
              <div data-fold-content="true" id="center-content">
                <Content />
              </div>
            </div>
          </div>
          <div className={`${styles.fold} ${styles.foldBottom}`}>
            <div className={styles.foldAlign}>
              <div data-fold-content="true">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
