const PROJECTS = [
  {
    id: "01",
    title: "Eight Puzzle AI Solver",
    tag: "AI · Search",
    blurb:
      "Web tool that finds the shortest solution to the classic 8-puzzle using the A* algorithm — tracing every step of the search in a clean Flask-powered UI.",
    stack: ["Python", "Flask", "A*", "Heuristics"],
    link: { label: "live demo", href: "https://eight-puzzle.onrender.com/" },
  },
  {
    id: "02",
    title: "Central Force Optimization",
    tag: "Algorithms · C++",
    blurb:
      "C++ implementation of R. A. Formato's CFO — a deterministic, gravity-inspired multidimensional search algorithm for finding the optimum of a function.",
    stack: ["C++", "Optimization", "Numerical"],
    link: {
      label: "github",
      href: "https://github.com/Michter99/CentralForceOptimization",
    },
  },
  {
    id: "03",
    title: "Chatbot Atencion UP",
    tag: "AI Engineering · Telegram Bot",
    blurb:
      "A RAG-driven customer support bot for Universidad Panamericana. It orchestrates document chunking, generates OpenAI vector embeddings, and performs localized semantic search using FAISS to inject academic context directly into GPT-powered response pipelines.",
    stack: ["Node.js", "OpenAI", "FAISS", "RAG", "Telegram"],
    link: {
      label: "github",
      href: "https://github.com/Michter99/ChatbotAtencionUP",
    },
  },
  {
    id: "04",
    title: "LIGA NEKOMA",
    tag: "Sports Tech · Web",
    blurb:
      "A lightweight, zero-dependency analytics dashboard built for a local table tennis league to dynamically compute standings, process match outcomes, and track player performance stats. Features an on-the-fly image rendering utility for sharing matchday updates.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: {
      label: "live site",
      href: "https://michter99.github.io/liga-nekoma/",
    },
  },
];

export default function Projects() {
  return (
    <div id="projects" className="section">
      <div className="section__head d-flex align-items-baseline gap-3">
        <span className="section__num">03 //</span>
        <h2 className="section__title text-uppercase m-0">Selected Projects</h2>
        <span className="section__rule flex-grow-1"></span>
      </div>

      <div className="row g-3">
        {PROJECTS.map((p, i) => (
          <div
            className="project col-12 col-md-6 position-relative overflow-hidden"
            key={i}
          >
            <div className="project__id d-flex align-items-start justify-content-center">
              PRJ_{p.id}
            </div>
            <div className="project__body">
              <div className="project__head d-flex align-items-baseline justify-content-between flex-wrap">
                <h3 className="project__title m-0 text-uppercase">{p.title}</h3>
              </div>
              <span className="project__tag text-uppercase">{p.tag}</span>
              <p className="project__blurb">{p.blurb}</p>
              <div className="project__stack d-flex flex-wrap">
                {p.stack.map((s, j) => (
                  <span key={j} className="project__chip text-uppercase">
                    {s}
                  </span>
                ))}
              </div>
              <div className="project__links d-flex flex-wrap">
                <a
                  className="project__link text-uppercase text-decoration-none"
                  href={p.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="arr me-1">→</span> {p.link.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
