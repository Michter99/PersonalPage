import { useEffect, useState } from "react";

function renderName(str, accentIdx = []) {
  return str.split("").map((ch, i) => (
    <span key={i} className={accentIdx.includes(i) ? "accent" : undefined}>
      {ch}
    </span>
  ));
}

export default function Hero() {
  const tagline =
    "Engineer dedicated to continuous growth and staying updated with the latest tech.";
  const [typed, setTyped] = useState("");
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
    <section className="hero d-flex align-items-center">
      <div className="hero__left">
        <div className="hero__kicker d-flex align-items-center text-uppercase mb-4">
          OPERATOR_FILE · 0xMR99 · CDMX-NET
        </div>
        <h1 className="hero__name glitch d-block mb-2" data-text="MIGUEL">
          {renderName("MIGUEL")}
        </h1>
        <h1 className="hero__name glitch d-block mb-2" data-text="RICHTER">
          {renderName("RICHTER", [0])}
        </h1>

        <div className="hero__tagline">
          <span className="prompt me-2">{">"}</span>
          {typed}
          <span className="caret d-inline-block"></span>
        </div>

        <div className="hero__meta d-flex flex-wrap text-uppercase">
          <div className="hero__meta-item">
            <span className="label d-block mb-1">// Role</span>
            <span>Senior Analytics Engineer II</span>
          </div>
          <div className="hero__meta-item">
            <span className="label d-block mb-1">// Node</span>
            <span>CDMX · MX</span>
          </div>
        </div>
      </div>

      <div className="hero__right" aria-hidden="true"></div>
    </section>
  );
}
