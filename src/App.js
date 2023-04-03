import React, {useEffect} from 'react';

import Face from './Face';

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
    <>
      <nav>
        Hello, so excited you've stopped by—the site is undergoing some quick renovations at the moment,
        please check back later and links will be clickable again~ see you soon!
      </nav>
      <div className="all">
        <div className="wrapper-3d">
          <div className="fold fold-top">
            <div className="fold-align">
              <div className="fold-content">
                <Face />
              </div>
            </div>
          </div>
          <div className="fold fold-center" id="center-fold">
            <div className="fold-align">
              <div className="fold-content" id="center-content">
                <Face />
              </div>
            </div>
          </div>
          <div className="fold fold-bottom">
            <div className="fold-align">
              <div className="fold-content">
                <Face />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
