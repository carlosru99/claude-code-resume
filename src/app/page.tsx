import Link from 'next/link';

const skills = [
  'Python', 'SQL', 'PySpark', 'Spark SQL',
  'dbt', 'Apache Spark', 'Databricks',
  'Redshift', 'PostgreSQL', 'S3',
  'AWS', 'Terraform', 'Docker', 'Kubernetes',
  'Apache Airflow', 'Kafka', 'GitLab CI', 'GitHub Actions',
  'Power BI', 'Metabase',
  'ELT', 'Lakehouse', 'Data Mesh', 'IaC', 'CI/CD',
];

const experience = [
  {
    company: 'Ryanair',
    url: 'https://www.ryanair.com',
    role: 'Data Engineer',
    period: '2025 – Present',
    highlights: [
      <>Build and maintain <strong>ELT pipelines</strong> (Apache Airflow, dbt) and scalable data models in <strong>Databricks lakehouse</strong>, leveraging PySpark and Spark SQL for optimized query performance.</>,
      <>Led <strong>analytics engineering end-to-end</strong> — semantic layer design, data contract implementation, and cross-functional alignment — improving data reliability and accelerating time-to-insight.</>,
      <>Architect <strong>AWS solutions</strong> and own the full deployment lifecycle through IaC (Terraform, CloudFormation) and automated CI/CD pipelines via AWS CodePipeline.</>,
      <>Spearheaded <strong>AI integration</strong> into engineering workflows, enabling the team to cut repetitive task time by <strong>over 60%</strong> through scalable, reusable AI-driven processes.</>,
      <>Collaborated with data scientists to improve the performance of the <strong>dynamic pricing model</strong> by over <strong>50%</strong>.</>,
    ],
  },
  {
    company: 'Next Digital Hub',
    url: 'https://nextdigital.es',
    role: 'Cloud Data Engineer',
    period: '2022 – 2025',
    highlights: [
      <>Developed and optimized end-to-end <strong>ELT processes</strong> using AWS Cloud (S3, Redshift, RDS, Lambda, AWS Batch on Fargate).</>,
      <>Implemented <strong>Data Mesh Architecture</strong> to enhance data accessibility and collaboration across teams.</>,
      <>Built efficient <strong>Python-based data pipelines</strong> to enhance data quality and system performance.</>,
      <>Automated complex workflows using <strong>Apache Airflow</strong> to reduce manual intervention.</>,
    ],
  },
  {
    company: 'StratioBD',
    url: 'https://www.stratio.com',
    role: 'Big Data Engineer',
    period: '2021 – 2022',
    highlights: [
      <>Performed and managed <strong>ETL processes</strong> using the Stratio Data Centric product and end-to-end batch workflows with <strong>Apache Spark, PostgreSQL, and Apache Kafka</strong>, handling high-volume real-time data streams.</>,
      <>Designed and created interactive <strong>Metabase dashboards</strong> to provide actionable business insights for stakeholders.</>,
      <>Ensured <strong>Data Governance</strong> best practices through rigorous data quality controls and metadata management.</>,
      <>Managed projects with Jira applying <strong>Scrum methodology</strong> to ensure timely delivery of data products.</>,
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">

      {/* ── Funnier version button — fixed top-left ── */}
      <Link
        href="/terminal"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-[#d1d1d1] bg-white text-[#1a1a1a] text-sm font-mono no-underline hover:border-[#999] transition-colors shadow-sm"
      >
        <img src="https://media1.tenor.com/m/oB-P5dO_NMkAAAAd/claude-claude-ai.gif" alt="" className="w-12 h-12 rounded object-cover" />
        Funnier version ↗
      </Link>

      <main className="max-w-2xl mx-auto px-8 py-20">

        {/* ── Header ── */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
            Carlos Ruiz Torres
          </h1>
          <p className="text-lg font-bold text-[#444] mb-6 leading-snug">
            Data Engineer focused on scalable lakehouse architectures
            with strongs Analytics Engineering skills.
          </p>
          <p className="text-sm text-[#666] mb-6 font-mono">🌍 Madrid, Spain - Remote</p>

          {/* Contact icons */}
          <div className="flex justify-center gap-3">
            <a
              href="tel:+34684021763"
              className="flex items-center justify-center gap-2 px-3 h-11 border border-[#d1d1d1] rounded-lg no-underline hover:border-[#999] transition-colors text-[#444]"
              title="+34 684 021 763"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="#1a1a1a" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="text-xs font-mono">+34 684 021 763</span>
            </a>
            <a
              href="mailto:carlosru0022@gmail.com"
              className="flex items-center justify-center w-11 h-11 border border-[#d1d1d1] rounded-lg no-underline hover:border-[#999] transition-colors"
              title="Gmail"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 20H4C2.9 20 2 19.1 2 18V6L12 13L22 6V18C22 19.1 21.1 20 20 20H18V9.93L12 14L6 9.93V20Z" fill="#EA4335"/>
                <path d="M22 6L12 13L2 6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6Z" fill="#FBBC05"/>
                <path d="M18 9.93V20H20C21.1 20 22 19.1 22 18V6L18 9.93Z" fill="#34A853"/>
                <path d="M2 18V6L6 9.93V20H4C2.9 20 2 19.1 2 18Z" fill="#4285F4"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/carlos-ruiz-torres"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 border border-[#d1d1d1] rounded-lg no-underline hover:border-[#999] transition-colors"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com/carlosru99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 border border-[#d1d1d1] rounded-lg no-underline hover:border-[#999] transition-colors"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1a1a1a" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </header>

        {/* ── About ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">About</h2>
          <p className="font-mono text-sm sm:text-base text-[#444] leading-relaxed">
            Data Engineer with <strong>5+ years of experience</strong> building scalable ELT pipelines,
            lakehouse architectures, and cloud-native data solutions. Currently at <strong>Ryanair</strong>,
            leading analytics engineering and AI integration into data workflows. Passionate about
            data quality, semantic layers, and cutting repetitive work with <strong>AI-driven processes</strong>.
          </p>
          <p className="font-mono text-sm text-[#888] mt-3 italic">
            &quot;Always building, always automating.&quot;
          </p>
        </section>

        <hr className="border-t border-[#e5e5e5] mb-12" />

        {/* ── Experience ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Experience</h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex items-baseline justify-between mb-1">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-[#1a1a1a] no-underline hover:underline"
                  >
                    {job.company}
                  </a>
                  <span className="text-sm font-mono text-[#888] shrink-0 ml-4">{job.period}</span>
                </div>
                <p className="font-bold text-[#444] mb-3">{job.role}</p>
                <ul className="space-y-2 font-mono text-sm text-[#444]">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="shrink-0 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t border-[#e5e5e5] mb-12" />

        {/* ── Education ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Education</h2>
          <div className="flex items-baseline justify-between">
            <div>
              <p className="font-bold text-[#1a1a1a]">Universitat Politècnica de València (UPV)</p>
              <p className="font-mono text-sm text-[#666]">Bachelor&apos;s degree in Computer Science</p>
            </div>
            <span className="text-sm font-mono text-[#888] shrink-0 ml-4">2017 – 2021</span>
          </div>
        </section>

        <hr className="border-t border-[#e5e5e5] mb-12" />

        {/* ── Skills ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-5">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-sm px-3 py-1 rounded-full border border-[#d1d1d1] text-[#444]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-t border-[#e5e5e5] mb-12" />

        {/* ── Languages ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">Languages</h2>
          <div className="font-mono text-sm text-[#444] space-y-1">
            <div><strong>Spanish</strong> — Native</div>
            <div><strong>English</strong> — Advanced</div>
            <div><strong>French</strong> — B2</div>
          </div>
        </section>

      </main>
    </div>
  );
}

