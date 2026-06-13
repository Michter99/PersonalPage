export default function Contact() {
  return (
    <div id="contact" className="contact row g-5 align-items-end">
      <h2 className="contact__lead col-12 col-md-6 m-0 text-uppercase">
        OPEN A <span className="accent">CHANNEL</span>
        <span className="blink d-inline-block"></span>
      </h2>
      <div className="contact__links col-12 col-md-6 d-flex flex-column">
        <a
          className="contact__link d-flex align-items-center justify-content-between text-uppercase text-decoration-none"
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
          className="contact__link d-flex align-items-center justify-content-between text-uppercase text-decoration-none"
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
          className="contact__link contact__link--cta d-flex align-items-center justify-content-between text-uppercase text-decoration-none"
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
