const ROLES = [
  {
    company: "KLAR",
    meta: "Fintech · Full-time · PRESENT",
    roles: [
      {
        rank: "4",
        title: "Senior Analytics Engineer II",
        date: "FEB 2026 — PRESENT",
        loc: "Mexico City",
        promo: true,
        bullets: [
          "B2B Acquisition Attribution framework for a new broker referral program — architected a multi-layer hierarchy reconciling UTMs/GCLID with backend referral codes, securing channel-specific commission payouts.",
          "Savings financial-state pipeline end-to-end: reconstructing daily balances from event-sourced streams (Iceberg → Glue → Redshift), enriched via dbt with product metadata — single source of truth for savings & secured deposits.",
        ],
      },
      {
        rank: "3",
        title: "Senior Analytics Engineer I",
        date: "MAY 2025 — JAN 2026 · 8 mo",
        loc: "Mexico City",
        promo: true,
        bullets: [
          "Led evaluation + rollout of Neo4j graph database on Kubernetes with DevOps — designed ingestion pipeline and graph model for invoice network analysis.",
          "Built monitoring for Twilio WhatsApp templates that prevents cost overruns by alerting on category changes — caught 3× cost spikes before they shipped.",
          "Owned technical strategy with B2B leadership to define and deploy KPIs — single source of truth for a new B2B financial product line.",
        ],
      },
      {
        rank: "2",
        title: "Analytics Engineer",
        date: "JUL 2024 — APR 2025 · 9 mo",
        loc: "Mexico City",
        promo: true,
        bullets: [
          "Engineered a high-throughput Python client with asyncio, aiolimiter and semaphores — pipeline runtime 2h → 20min.",
          "Built a scalable ETL framework on AWS Glue (PySpark) + dbt ingesting AppsFlyer + Xpend from S3 into Redshift — 10M+ records/day.",
          "Shipped Customer.io campaign-metrics pipelines via S3 intermediate + COPY, with transactional integrity guarantees.",
        ],
      },
      {
        rank: "1",
        title: "Junior Analytics Engineer",
        date: "OCT 2023 — JUN 2024 · 8 mo",
        loc: "Mexico City",
        promo: false,
        bullets: [
          "Co-developed and maintained core dbt + Dagster pipelines — central production environment for all analytics.",
          "Refactored legacy SQL — ~50% query perf uplift and lower AWS compute costs.",
          "Mentored BI + Ops teams; codified SQL best practices, Git workflows, and translation up to leadership.",
        ],
      },
    ],
  },
  {
    company: "BBVA",
    meta: "Banking · Internship · 7 mo",
    roles: [
      {
        rank: "INT",
        title: "Advanced Analytics Intern",
        date: "MAR 2023 — OCT 2023 · 7 mo",
        loc: "Mexico City",
        promo: false,
        bullets: [
          "Processed 50M+ daily rows of payroll data via PySpark + Teradata + MicroStrategy for INEGI national financial-inclusion analytics.",
          "Automated 8+ monthly reports with PySpark → Domo, streamlining BBVA México → BBVA España reporting — saved 12+ hrs/month.",
          "Shipped churn-prevention regression + classification models reaching 40–50% accuracy, outperforming the prior 28–35% baseline.",
        ],
      },
    ],
  },
  {
    company: "COLGATE-PALMOLIVE",
    meta: "Consumer Goods · Internship · 9 mo",
    roles: [
      {
        rank: "INT",
        title: "Global IT Intern",
        date: "NOV 2021 — AUG 2022 · 9 mo",
        loc: "Mexico City",
        promo: false,
        bullets: [
          "Ran configurations, tests and reports across IT projects.",
          "Built JavaScript automations inside AODocs — eliminated 10+ hrs/week of manual data entry for the finance team.",
          "Designed Data Studio dashboards that lifted productivity across multiple reporting processes.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <div id="experience" className="section">
      <div className="section__head d-flex align-items-baseline gap-3">
        <span className="section__num">01 //</span>
        <h2 className="section__title text-uppercase m-0">Experience Log</h2>
        <span className="section__rule flex-grow-1"></span>
      </div>

      {ROLES.map((company, ci) => (
        <div className="row g-5" key={ci} style={{ marginBottom: 56 }}>
          <div className="exp__company col-12 col-md-3 position-sticky align-self-start text-uppercase">
            <div className="exp__company-card">
              <div className="name text-uppercase mb-1">{company.company}</div>
              <div className="meta">{company.meta}</div>
            </div>
          </div>
          <div className="exp__list col-12 col-md-9 position-relative">
            {company.roles.map((r, ri) => (
              <div
                className={"role position-relative" + (r.promo ? " promo" : "")}
                key={ri}
              >
                <div className="role__head d-flex flex-wrap align-items-baseline mb-1">
                  <span className="role__rank text-uppercase">{r.rank}</span>
                  <h3 className="role__title m-0 text-uppercase">{r.title}</h3>
                  <span className="role__date text-uppercase">{r.date}</span>
                </div>
                <div className="role__loc text-uppercase">{r.loc}</div>
                <ul className="role__bullets list-unstyled mb-0">
                  {r.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
