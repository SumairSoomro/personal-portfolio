import { techStack, certifications } from '../data/portfolio';

const categories = [
  { label: 'Languages',             items: techStack.languages },
  { label: 'Frameworks & Tech',     items: techStack.frameworks },
  { label: 'Databases',             items: techStack.databases },
  { label: 'Tools & Infrastructure', items: techStack.tools },
];

export default function TechStackGrid() {
  return (
    <section id="stack" className="tech-section">
      <div className="container">
        <p className="sec-label reveal">Capabilities</p>
        <h2 className="sec-title reveal">Technical Universe</h2>

        <div className="tech-grid reveal">
          {categories.map(cat => (
            <div key={cat.label}>
              <p className="tech-cat-label">{cat.label}</p>
              <ul className="tech-list">
                {cat.items.map(item => (
                  <li key={item} className="tech-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal">
          {certifications.map(cert => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-row"
            >
              <div className="cert-info">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-org">{cert.org}</span>
              </div>
              <span className="cert-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
