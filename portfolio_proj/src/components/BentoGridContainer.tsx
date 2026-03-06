import { education, research} from '../data/portfolio';
import gradPhoto from '../assets/HOM_2311.jpg';

export default function BentoGridContainer() {
  return (
    <section id="about" className="bento-section">
      <div className="container">
        <p className="sec-label reveal">Background</p>
        <h2 className="sec-title reveal">Experience &amp; Education</h2>

        <div className="bento-grid reveal">
          {/* Education Tile */}
          <div className="tile tile--edu edu-layout">
            <div className="edu-content">
              <p className="tile-eyebrow">Education</p>
              <h3 className="tile-heading">{education.institution}</h3>
              <p className="tile-sub">{education.degree}</p>
              <div className="tile-meta">
                <span>Class of {education.graduation}</span>
                <span className="tile-meta-sep" />
                <span>Amherst, MA</span>
              </div>

              <p className="tile-eyebrow" style={{ marginTop: '0.75rem' }}>Relevant Coursework</p>
              <div className="coursework">
                {education.coursework.map(course => (
                  <span key={course} className="course-pill">{course}</span>
                ))}
              </div>
            </div>
            <div className="edu-photo-wrap">
              <img src={gradPhoto} alt="Graduation at UMass Amherst" className="edu-photo" />
            </div>
          </div>

          {/* Research Tile */}
          <div className="tile tile--res">
            <p className="tile-eyebrow">Research</p>
            <span className="research-badge">{research.conference}</span>
            <h3 className="tile-heading">{research.lab}</h3>
            <p className="tile-sub">{research.institution}</p>
            <div className="tile-meta">
              <span>{research.role}</span>
              <span className="tile-meta-sep" />
              <span>{research.period}</span>
            </div>
            <p className="research-desc">{research.description}</p>
            <p className="research-collab">
              In collaboration with{' '}
              <span>Vector Institute &amp; UCF</span>
            </p>
          </div>

          {/* About Tile */}
          <div className="tile tile--about">
            <div className="about-inner">
              <div className="about-quote">
                Building things that <span className="hl">matter</span>.
                Taking ideas from{' '}
                <span className="hl">0 → 1</span>.
              </div>
              <p className="about-body">UMass Amherst CS grad with experience across full-stack development, AI/ML research, and cloud infrastructure. I thrive at the intersection of engineering and product — turning complex problems into clean, scalable solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
