import React, { useEffect, useRef } from 'react';

import Content from './Content';
import styles from './App.module.css';

function App() {
  const centerContentRef = useRef(null);
  const centerFoldRef = useRef(null);
  const topContentRef = useRef(null);
  const bottomContentRef = useRef(null);

  useEffect(() => {
    console.log(`          |
          |   .
   \`.  *  |     .'      
     \`. ._|_* .'  .     
   . * .'   \`.  *       Hit print
-------|     |-------   (ctrl/cmd + p)
   .  *\`.___.' *  .     for a fun
      .'  |* \`.  *      surprise～
    .' *  |  . \`.
        . |
          | 

      
      `);
  }, []);

  useEffect(() => {
    const centerContent = centerContentRef.current;
    const centerFold = centerFoldRef.current;
    const foldsContent = [
      topContentRef.current,
      centerContentRef.current,
      bottomContentRef.current,
    ].filter(Boolean);

    if (!centerContent || !centerFold || foldsContent.length === 0) {
      return undefined;
    }

    const originalBodyHeight = document.body.style.height;
    let rafId;

    const updateBodyHeight = () => {
      const overflowHeight =
        centerContent.clientHeight - centerFold.clientHeight;
      document.body.style.height = `${overflowHeight + window.innerHeight}px`;
    };

    const tick = () => {
      const scroll = -(
        window.scrollY ||
        document.documentElement.scrollTop ||
        0
      );
      foldsContent.forEach((content) => {
        content.style.transform = `translateY(${scroll}px)`;
      });
      rafId = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      updateBodyHeight();
    };

    window.addEventListener('resize', handleResize);
    updateBodyHeight();
    tick();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.body.style.height = originalBodyHeight;
    };
  }, []);

  return (
    <div className={styles.all}>
      <div className={styles.wrapper3d}>
        <div className={`${styles.fold} ${styles.foldTop}`}>
          <div className={styles.foldAlign}>
            <div data-fold-content="true" ref={topContentRef}>
              <Content />
            </div>
          </div>
        </div>
        <div className={styles.fold} id="center-fold" ref={centerFoldRef}>
          <div className={styles.foldAlign}>
            <div
              data-fold-content="true"
              id="center-content"
              ref={centerContentRef}
            >
              <Content />
            </div>
          </div>
        </div>
        <div className={`${styles.fold} ${styles.foldBottom}`}>
          <div className={styles.foldAlign}>
            <div data-fold-content="true" ref={bottomContentRef}>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
