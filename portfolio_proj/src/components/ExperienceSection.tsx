import { experience } from '../data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="sec-label reveal">Career</p>
        <h2 className="sec-title reveal">Experience</h2>

        <div className="exp-timeline">
          {experience.map((exp, i) => (
            <div key={i} className="exp-item reveal">
              <div className="exp-marker">
                <span className="exp-dot" />
                {i < experience.length - 1 && <span className="exp-line" />}
              </div>

              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">
                      {exp.company}
                      <span className="exp-type"> · {exp.type}</span>
                    </p>
                  </div>
                  <div className="exp-meta-right">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <p className="exp-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
