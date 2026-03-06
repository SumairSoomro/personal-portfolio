import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); go('#hero'); }}>
          S<em>.</em>S
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); go(href); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} onClick={e => { e.preventDefault(); go(href); }}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
