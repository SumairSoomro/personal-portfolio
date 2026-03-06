import { profile } from '../data/portfolio';
import headshot from '../assets/sumair_soomro.png';

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-dots" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-inner">
          <div className="hero-badge au d1">
            <span className="hero-badge-dot" />
            Reach out for any opportunities
          </div>

          <h1 className="hero-name au d2">{profile.name}</h1>

          <p className="hero-role au d3">
            <span className="hero-prompt">&gt;</span>
            {profile.title}
            <span className="hero-cursor" aria-hidden="true" />
          </p>

          <p className="hero-bio au d4">{profile.bio}</p>

          <div className="hero-cta au d5">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              Email Me
            </a>
            <a href="https://drive.google.com/file/d/1FjUIOqJtWyUlK_P-LoEkmroDsUH0b6pc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap au d3">
          <div className="hero-photo-frame">
            <img src={headshot} alt="Sumair Soomro" className="hero-photo" />
          </div>
        </div>
      </div>

      <div className="hero-scroll au d6">
        <div className="hero-scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
