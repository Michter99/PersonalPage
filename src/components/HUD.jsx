import { useEffect, useState } from 'react';

export default function HUD() {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="hud hud--top">
        <div>
          <span className="dot"></span>
          MR<span className="magenta">_</span>99{' '}
          <span className="sep">|</span> OPERATOR-PROFILE
        </div>
        <div>
          NODE <span className="cyan">CDMX-01</span>{' '}
          <span className="sep">|</span>{' '}
          {t.toISOString().slice(0, 19).replace('T', ' ')}Z{' '}
          <span className="sep">|</span> v4.2.0
        </div>
      </div>
      <div className="hud hud--bottom">
        <div>
          // <span className="cyan">SCROLL</span> to traverse{' '}
        </div>
        <div>
          © 2026 MIGUEL RICHTER
        </div>
      </div>
    </>
  );
}
