export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h2 className="contact__lead">
        OPEN A <span className="accent">CHANNEL</span>
        <span className="blink"></span>
      </h2>
      <div className="contact__links">
        <a
          className="contact__link"
          href="https://github.com/Michter99"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span className="lbl">github //</span> Michter99
          </span>
          <span className="arr">→</span>
        </a>
        <a
          className="contact__link"
          href="https://www.linkedin.com/in/miguel-angel-richter-flores/"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <span className="lbl">linkedin //</span> miguel richter
          </span>
          <span className="arr">→</span>
        </a>
        <a
          className="contact__link contact__link--cta"
          href="./Resume.pdf"
          download="Miguel-Richter-Resume.pdf"
        >
          <span>
            <span className="lbl">download //</span> Resume.pdf
          </span>
          <span className="arr">↓</span>
        </a>
      </div>
    </div>
  );
}
