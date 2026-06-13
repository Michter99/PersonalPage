const CATEGORIES = [
  {
    id: "01.CORE",
    title: "Core / Language",
    items: ["Python", "SQL", "PySpark", "JavaScript", "Bash"],
  },
  {
    id: "02.DATA",
    title: "Data Platform",
    items: ["dbt", "Mage AI", "AWS Glue", "S3", "Dagster", "Redshift"],
  },
  {
    id: "03.INFRA",
    title: "Infra",
    items: ["Git", "Linux", "AWS"],
  },
  {
    id: "04.INTEGRATIONS",
    title: "Integrations",
    items: ["AppsFlyer", "Customer.io", "Twilio", "Jotform"],
  },
  {
    id: "05.GEN-AI",
    title: "Currently Exploring",
    items: [
      "LLM tooling",
      "RAG pipelines",
      "Agent workflows",
      "MCP",
      "Vector DBs",
    ],
  },
  {
    id: "06.DELIVERY",
    title: "Delivery",
    items: [
      "Agile / Scrum",
      "Stakeholder Management",
      "Technical Governance",
      "Data Contracts",
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="section">
      <div className="section__head d-flex align-items-baseline gap-3">
        <span className="section__num">02 //</span>
        <h2 className="section__title text-uppercase m-0">Tech Stack</h2>
        <span className="section__rule flex-grow-1"></span>
      </div>

      <div className="row g-3">
        {CATEGORIES.map((c, i) => (
          <div className="skill-cat col-12 col-md-6 position-relative" key={i}>
            <div className="skill-cat__head d-flex align-items-baseline justify-content-between mb-3 pb-2">
              <h3 className="skill-cat__title m-0 text-uppercase">{c.title}</h3>
              <span className="skill-cat__id">{c.id}</span>
            </div>
            <div className="d-flex flex-wrap gap-2">
              {c.items.map((it, j) => (
                <span
                  key={j}
                  className="skill-tag position-relative overflow-hidden text-nowrap"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
