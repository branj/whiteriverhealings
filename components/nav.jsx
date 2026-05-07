
// Nav component - shared across variations
const Nav = ({ theme }) => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Services', 'Testimonials', 'Contact'];

  const s = navStyles;

  return (
    <nav style={{
      ...s.nav,
      background: scrolled ? theme.navScrollBg : 'transparent',
      borderBottom: scrolled ? `1px solid ${theme.navBorder}` : '1px solid transparent',
    }}>
      <div style={s.inner}>
        <a href="#hero" style={{...s.wordmark, color: theme.navText}}>
          <span style={{...s.wordmarkLine1, fontFamily: theme.displayFont}}>White River</span>
          <span style={{...s.wordmarkLine2, color: theme.accent}}>Healings</span>
        </a>
        <div style={{...s.links, display: isMobile ? 'none' : 'flex'}}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g,'')}`}
              style={{...s.link, color: theme.navText, fontFamily: theme.bodyFont}}>
              {l}
            </a>
          ))}
          <button style={{...s.bookBtn, background: theme.accent, fontFamily: theme.bodyFont}}
            onClick={() => window.open('https://white-river-healings.square.site/', '_blank')}>
            Book a Session
          </button>
        </div>
        <button style={{...s.hamburger, display: isMobile ? 'block' : 'none'}} onClick={() => setOpen(!open)} aria-label="menu">
          <span style={{color: theme.navText, fontSize: '1.5rem'}}>☰</span>
        </button>
      </div>
      {open && (
        <div style={{...s.mobileMenu, background: theme.navScrollBg}}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z]/g,'')}`}
              style={{...s.mobileLink, color: theme.navText, fontFamily: theme.bodyFont}}
              onClick={() => setOpen(false)}>{l}</a>
          ))}
          <button style={{...s.bookBtn, background: theme.accent, margin: '0.5rem 1.5rem', fontFamily: theme.bodyFont}}
            onClick={() => window.open('https://white-river-healings.square.site/', '_blank')}>
            Book a Session
          </button>
        </div>
      )}
    </nav>
  );
};

const navStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    transition: 'background 0.4s ease, border-color 0.4s ease',
  },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  wordmark: {
    textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1,
  },
  wordmarkLine1: {
    fontSize: '1rem', letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7,
  },
  wordmarkLine2: {
    fontSize: '1.35rem', letterSpacing: '0.08em', fontStyle: 'italic',
  },
  links: {
    display: 'flex', alignItems: 'center', gap: '2rem',
  },
  link: {
    textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', opacity: 0.85, transition: 'opacity 0.2s',
  },
  bookBtn: {
    border: 'none', color: '#fff', padding: '0.55rem 1.3rem',
    borderRadius: '2rem', cursor: 'pointer', fontSize: '0.8rem',
    letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
  },
  hamburger: {
    display: 'none', background: 'none', border: 'none', cursor: 'pointer',
  },
  mobileMenu: {
    display: 'flex', flexDirection: 'column', padding: '1rem 0 1.5rem',
    borderTop: '1px solid rgba(0,0,0,0.08)',
  },
  mobileLink: {
    padding: '0.75rem 1.5rem', textDecoration: 'none', fontSize: '0.9rem',
    letterSpacing: '0.1em', textTransform: 'uppercase',
  },
};

Object.assign(window, { Nav });
