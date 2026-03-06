import { profile } from '../data/portfolio';
import campusPhoto from '../assets/HOM_2351.jpg';

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35
        6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65
        16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5
        4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9
        18.13V22" />
    </svg>
  );
}

const contactLinks = [
  { label: profile.email,                   href: `mailto:${profile.email}`, icon: <EmailIcon /> },
  { label: 'linkedin.com/in/sumair-soomro', href: profile.linkedin,          icon: <LinkedInIcon /> },
  { label: 'github.com/SumairSoomro',       href: profile.github,            icon: <GithubIcon /> },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top reveal">
          <div className="footer-bio-block">
            <div className="footer-campus-photo-wrap">
              <img src={campusPhoto} alt="Sumair at UMass campus" className="footer-campus-photo" />
            </div>
          </div>

          <div>
            <p className="footer-contact-label">Get in touch</p>
            <div className="footer-contact-links">
              {contactLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="contact-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Sumair Soomro
          </span>
        </div>
      </div>
    </footer>
  );
}
