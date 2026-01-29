import React, {useEffect} from 'react';

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
    foldsContent.forEach(content => {
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

  return (
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
  );
}

export default App;
