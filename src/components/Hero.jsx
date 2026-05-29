import { useEffect, useState } from 'react';

function renderName(str, accentIdx = []) {
  return str.split('').map((ch, i) => (
    <span
      key={i}
      className={'char' + (accentIdx.includes(i) ? ' accent' : '')}
      style={{ animationDelay: 80 + i * 70 + 'ms' }}
    >
      {ch}
    </span>
  ));
}

export default function Hero() {
  const tagline = 'Engineer dedicated to continuous growth and staying updated with the latest tech.';
  const [typed, setTyped] = useState('');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setTyped(tagline.slice(0, i));
        if (i >= tagline.length) clearInterval(id);
      }, 28);
    }, 1400);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__kicker">OPERATOR_FILE · 0xMR99 · CDMX-NET</div>
        <h1 className="hero__name glitch" data-text="MIGUEL">
          {renderName('MIGUEL')}
        </h1>
        <h1 className="hero__name glitch" data-text="RICHTER">
          {renderName('RICHTER', [0])}
        </h1>

        <div className="hero__tagline">
          <span className="prompt">{'>'}</span>
          {typed}
          <span className="caret"></span>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="label">// Role</span>
            <span className="value">Senior Analytics Engineer II</span>
          </div>
          <div className="hero__meta-item">
            <span className="label">// Node</span>
            <span className="value">CDMX · MX</span>
          </div>
          <div className="hero__meta-item">
            <span className="label">// Clock</span>
            <span className="value">{time.toLocaleTimeString('en-GB')}</span>
          </div>
        </div>
      </div>

      <div className="hero__right" aria-hidden="true"></div>
    </section>
  );
}
