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
    items: ["LLM tooling", "RAG pipelines", "Agent workflows", "MCP", "Vector DBs"],
  },
  {
    id: "06.DELIVERY",
    title: "Delivery",
    items: ["Agile / Scrum", "Stakeholder Management", "Technical Governance", "Data Contracts"],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="section">
      <div className="section__head">
        <span className="section__num">02 //</span>
        <h2 className="section__title">Tech Stack</h2>
        <span className="section__rule"></span>
      </div>

      <div className="skills">
        {CATEGORIES.map((c, i) => (
          <div className="skill-cat" key={i}>
            <div className="skill-cat__head">
              <h3 className="skill-cat__title">{c.title}</h3>
              <span className="skill-cat__id">{c.id}</span>
            </div>
            <div className="skill-list">
              {c.items.map((it, j) => (
                <span key={j} className="skill-tag">{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
