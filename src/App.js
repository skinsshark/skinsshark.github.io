import React, {useEffect} from 'react';

import Content from './Content';

function calcValues() {
  const centerContent = document.getElementById('center-content');
  const centerFold = document.getElementById('center-fold');

  const overflowHeight = centerContent.clientHeight - centerFold.clientHeight;

  document.body.style.height = overflowHeight + window.innerHeight + 'px';
  const foldsContent = Array.from(
    document.getElementsByClassName('fold-content'),
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
    <div className="all">
      <div className="wrapper-3d">
        <div className="fold fold-top">
          <div className="fold-align">
            <div className="fold-content">
              <Content />
            </div>
          </div>
        </div>
        <div className="fold fold-center" id="center-fold">
          <div className="fold-align">
            <div className="fold-content" id="center-content">
              <Content />
            </div>
          </div>
        </div>
        <div className="fold fold-bottom">
          <div className="fold-align">
            <div className="fold-content">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
