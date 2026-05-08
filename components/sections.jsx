
// ── About ──────────────────────────────────────────────────────────────────
const About = ({ theme }) => {
  const [vis, setVis] = React.useState(false);
  const ref = React.useRef();
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      padding: isMobile ? '4rem 1.25rem' : '7rem 2rem', background: theme.sectionAltBg,
      position:'relative', overflow:'hidden',
    }}>
      <SectionBotanical theme={theme} side="right" speed={0.12} opacity={0.10} offsetTop={-40}/>
      <div style={{
        maxWidth:1100, margin:'0 auto', display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2.5rem' : '5rem', alignItems:'center',
      }}>
        {/* Photo placeholder */}
        <div style={{
          opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(-30px)',
          transition:'opacity 0.9s ease, transform 0.9s ease',
          display:'flex', justifyContent:'center',
        }}>
          <div style={{
            position:'relative', aspectRatio:'3/4', maxWidth: isMobile ? 280 : 420,
            borderRadius:'2px',
            overflow:'hidden', boxShadow:`0 20px 60px ${theme.shadowColor}`,
          }}>
            <img src="assets/brooke.jpg" alt="Brooke Jennings" style={{
              width:'100%', height:'100%', objectFit:'cover', display:'block',
            }}/>
          </div>
        </div>

        {/* Text */}
        <div style={{
          opacity: vis ? 1 : 0, transform: vis ? 'translateX(0)' : 'translateX(30px)',
          transition:'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.25em',textTransform:'uppercase',color:theme.accent,marginBottom:'1rem'}}>
            About Brooke
          </p>
          <h2 style={{fontFamily:theme.displayFont,fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,fontStyle:'italic',color:theme.headingColor,lineHeight:1.2,marginBottom:'1.5rem'}}>
            Reiki Master,<br/>Intuitive Guide &amp;<br/>Holistic Herbalist
          </h2>
          <div style={{width:50,height:1.5,background:theme.accent,marginBottom:'1.8rem', margin: isMobile ? '0 auto 1.8rem' : '0 0 1.8rem'}}/>
          <p style={{fontFamily:theme.bodyFont,fontSize:'1rem',lineHeight:1.9,color:theme.bodyText,marginBottom:'1.2rem'}}>
            Brooke Jennings brings warmth, wisdom, and deep intuitive knowledge to every session. 
            Drawing from years of practice in Reiki, herbalism, and holistic health coaching, 
            she creates a space where healing feels both ancient and deeply personal.
          </p>
          <p style={{fontFamily:theme.bodyFont,fontSize:'1rem',lineHeight:1.9,color:theme.bodyText,marginBottom:'2rem'}}>
            Whether you are navigating physical challenges, emotional transitions, or spiritual 
            seeking, Brooke meets you exactly where you are — with compassion, clarity, and 
            the tools to help you reclaim your innate vitality.
          </p>
          <div style={{display:'flex',gap:'2.5rem',flexWrap:'wrap', justifyContent: isMobile ? 'center' : 'flex-start'}}>
            {[['Reiki Master','Certified Practitioner'],['Herbalist','Plant Medicine'],['Health Coach','Holistic Wellness']].map(([t,s]) => (
              <div key={t}>
                <div style={{fontFamily:theme.displayFont,fontSize:'1.05rem',fontStyle:'italic',color:theme.headingColor,marginBottom:'0.2rem'}}>{t}</div>
                <div style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',letterSpacing:'0.12em',textTransform:'uppercase',color:theme.accent,opacity:0.8}}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Services ───────────────────────────────────────────────────────────────
const serviceData = [
  {
    title:'Distant Reiki Session',
    duration:'60 minutes · $111',
    desc:'Full Body Reiki Energy Healing, Chakra & Aura Reading/Cleansing, Intuitive Channeling and Guidance.',
    tag:'Most Loved',
  },
  {
    title:'Distant Reiki Session',
    duration:'90 minutes · $133',
    desc:'Everything in the 60-min session, plus Angel Card Draw with Personal Interpretation.',
    tag:'Deep Dive',
  },
  {
    title:'Group Reiki / Tea Ceremony',
    duration:'2 hours · $250',
    desc:'Guided meditation, Reiki healing for all, tea ceremony with plant medicine',
    tag:'Transformative',
  },
];

const Services = ({ theme }) => {
  const [vis, setVis] = React.useState(false);
  const ref = React.useRef();
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{padding: isMobile ? '4rem 1.25rem' : '7rem 2rem',background:theme.sectionBg}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'4rem',
          opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(20px)',
          transition:'opacity 0.8s ease,transform 0.8s ease',
        }}>
          <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.25em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.8rem'}}>Offerings</p>
          <h2 style={{fontFamily:theme.displayFont,fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,fontStyle:'italic',color:theme.headingColor}}>Sessions &amp; Services</h2>
          <div style={{width:50,height:1.5,background:theme.accent,margin:'1.2rem auto 0'}}/>
          <p style={{fontFamily:theme.bodyFont,color:theme.bodyText,fontSize:'0.95rem',lineHeight:1.8,maxWidth:520,margin:'1.5rem auto 0'}}>
            All sessions are offered virtually.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit,minmax(300px,1fr))',gap:'2rem'}}>
          {serviceData.map((svc, i) => (
            <div key={i} style={{
              background:theme.cardBg,border:`1px solid ${theme.cardBorder}`,
              borderRadius:4,padding:'2.5rem 2rem',position:'relative',
              boxShadow:`0 4px 30px ${theme.shadowColor}`,
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(30px)',
              transition:`opacity 0.8s ease ${i*0.15}s,transform 0.8s ease ${i*0.15}s`,
            }}>
              <div style={{
                position:'absolute',top:'1.2rem',right:'1.2rem',
                background:theme.tagBg,color:theme.accent,
                fontFamily:theme.bodyFont,fontSize:'0.68rem',
                letterSpacing:'0.15em',textTransform:'uppercase',
                padding:'0.3rem 0.7rem',borderRadius:'2rem',
              }}>{svc.tag}</div>
              <h3 style={{fontFamily:theme.displayFont,fontSize:'1.5rem',fontStyle:'italic',fontWeight:400,color:theme.headingColor,marginBottom:'0.5rem'}}>{svc.title}</h3>
              <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.12em',textTransform:'uppercase',color:theme.accent,marginBottom:'1.2rem'}}>{svc.duration}</p>
              <p style={{fontFamily:theme.bodyFont,fontSize:'0.92rem',lineHeight:1.85,color:theme.bodyText,marginBottom:'2rem'}}>{svc.desc}</p>
              <button onClick={() => window.open('https://white-river-healings.square.site/', '_blank')} style={{
                background:'transparent',border:`1.5px solid ${theme.accent}`,
                color:theme.accent,padding:'0.65rem 1.5rem',borderRadius:'3rem',
                cursor:'pointer',fontFamily:theme.bodyFont,fontSize:'0.78rem',
                letterSpacing:'0.12em',textTransform:'uppercase',
                transition:'background 0.25s,color 0.25s',
              }}
              onMouseEnter={e=>{e.currentTarget.style.background=theme.accent;e.currentTarget.style.color='#fff';}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color=theme.accent;}}>
                Book This Session
              </button>
            </div>
          ))}
        </div>

        <p style={{fontFamily:theme.bodyFont,fontSize:'0.82rem',textAlign:'center',color:theme.bodyText,opacity:0.65,marginTop:'2.5rem',lineHeight:1.9}}>
          Virtual sessions available Thu–Fri 10:00 AM–5:00 PM · Sat 11:00 AM–4:00 PM
        </p>
      </div>
    </section>
  );
};

// ── Herbs & Teas ──────────────────────────────────────────────────────────
const herbItems = [
  { name:'Nervine Calm Tea', desc:'Passionflower, lemon balm & skullcap — ease the anxious mind.', price:'$18' },
  { name:'Digestive Fire Blend', desc:'Ginger, fennel & marshmallow root — soothe and strengthen digestion.', price:'$20' },
  { name:'Adaptogen Tonic', desc:'Ashwagandha, reishi & astragalus — restore resilience.', price:'$24' },
  { name:'Hormone Harmony Tea', desc:'Red clover, vitex & nettle — gentle cycle support.', price:'$22' },
  { name:'Elderberry Immune Syrup', desc:'Elderberry, echinacea & raw honey — seasonal protection.', price:'$28' },
  { name:'Heart Opening Blend', desc:'Rose, hawthorn & hibiscus — nourish the emotional heart.', price:'$19' },
];

const HerbShop = ({ theme }) => {
  const [vis, setVis] = React.useState(false);
  const ref = React.useRef();
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="herbsteas" ref={ref} style={{padding: isMobile ? '4rem 1.25rem' : '7rem 2rem',background:theme.sectionAltBg,position:'relative',overflow:'hidden'}}>
      <SectionBotanical theme={theme} side="left" speed={0.10} opacity={0.09} offsetTop={60}/>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'4rem',
          opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(20px)',
          transition:'opacity 0.8s ease,transform 0.8s ease',
        }}>
          <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.25em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.8rem'}}>The Apothecary</p>
          <h2 style={{fontFamily:theme.displayFont,fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,fontStyle:'italic',color:theme.headingColor}}>Herbal Remedies &amp; Teas</h2>
          <div style={{width:50,height:1.5,background:theme.accent,margin:'1.2rem auto 0'}}/>
          <p style={{fontFamily:theme.bodyFont,color:theme.bodyText,fontSize:'0.95rem',lineHeight:1.8,maxWidth:480,margin:'1.5rem auto 0'}}>
            Small-batch, thoughtfully formulated blends to support your healing journey.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1.5rem'}}>
          {herbItems.map((h,i) => (
            <div key={i} style={{
              background:theme.cardBg,border:`1px solid ${theme.cardBorder}`,
              borderRadius:4,overflow:'hidden',
              boxShadow:`0 2px 20px ${theme.shadowColor}`,
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(25px)',
              transition:`opacity 0.8s ease ${i*0.1}s,transform 0.8s ease ${i*0.1}s`,
            }}>
              {/* Herb illustration placeholder */}
              <div style={{
                height:160,background:theme.photoPlaceholderBg,
                display:'flex',alignItems:'center',justifyContent:'center',
                position:'relative',overflow:'hidden',
              }}>
                <svg viewBox="0 0 200 160" style={{width:'100%',height:'100%',opacity:0.3}} xmlns="http://www.w3.org/2000/svg">
                  <path d={`M100 150 Q98 120 102 90 Q106 60 100 30`} stroke={theme.botanicalStroke} strokeWidth="1.5" fill="none"/>
                  {[90,110,130].map((y,j) => (
                    <React.Fragment key={y}>
                      <ellipse cx={97} cy={y} rx={30+j*3} ry={12} transform={`rotate(${-25} 97 ${y})`} stroke={theme.botanicalStroke} strokeWidth="1" fill="none"/>
                      <ellipse cx={104} cy={y+5} rx={25+j*2} ry={10} transform={`rotate(30 104 ${y+5})`} stroke={theme.botanicalStroke} strokeWidth="1" fill="none"/>
                    </React.Fragment>
                  ))}
                </svg>
                <div style={{position:'absolute',fontFamily:'monospace',fontSize:'0.6rem',color:theme.botanicalStroke,opacity:0.5,letterSpacing:'0.1em'}}>herb illustration</div>
              </div>
              <div style={{padding:'1.4rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:'0.5rem'}}>
                  <h3 style={{fontFamily:theme.displayFont,fontSize:'1.15rem',fontStyle:'italic',fontWeight:400,color:theme.headingColor}}>{h.name}</h3>
                  <span style={{fontFamily:theme.bodyFont,fontSize:'0.9rem',color:theme.accent,fontWeight:500}}>{h.price}</span>
                </div>
                <p style={{fontFamily:theme.bodyFont,fontSize:'0.85rem',lineHeight:1.75,color:theme.bodyText,marginBottom:'1rem'}}>{h.desc}</p>
                <button style={{
                  background:'transparent',border:`1px solid ${theme.cardBorder}`,
                  color:theme.bodyText,padding:'0.45rem 1rem',borderRadius:'2rem',
                  cursor:'pointer',fontFamily:theme.bodyFont,fontSize:'0.72rem',
                  letterSpacing:'0.1em',textTransform:'uppercase',
                  transition:'border-color 0.2s,color 0.2s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=theme.accent;e.currentTarget.style.color=theme.accent;}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=theme.cardBorder;e.currentTarget.style.color=theme.bodyText;}}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ──────────────────────────────────────────────────────────
const testimonials = [
  { quote:'Brooke has a gift unlike anything I have ever experienced. After my distant Reiki session I felt lighter, clearer, and more myself than I had in years.', name:'Sarah M.', role:'Reiki Client' },
  { quote:'The holistic consultation completely transformed how I approach my health. Brooke truly listened and gave me a protocol that actually works for my body.', name:'Jessica R.', role:'Holistic Client' },
  { quote:'I was skeptical about distant healing but my experience was undeniable. The chakra reading was incredibly accurate. I am so grateful I found Brooke.', name:'Amanda K.', role:'Reiki Client' },
];

const Testimonials = ({ theme }) => {
  const [vis, setVis] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const ref = React.useRef();
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} style={{
      padding: isMobile ? '4rem 1.25rem' : '7rem 2rem',background:theme.testimonialBg,
      position:'relative',overflow:'hidden',textAlign:'center',
    }}>
      <SectionBotanical theme={theme} side="right" speed={0.08} opacity={0.08} offsetTop={20}/>
      <SectionBotanical theme={theme} side="left" speed={0.14} opacity={0.07} offsetTop={80}/>
      <div style={{
        position:'absolute',inset:0,
        background:`radial-gradient(ellipse 80% 70% at 50% 50%, ${theme.heroGlow} 0%, transparent 70%)`,
        pointerEvents:'none',
      }}/>
      <div style={{maxWidth:750,margin:'0 auto',position:'relative',zIndex:1}}>
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.25em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.8rem',opacity:vis?1:0,transition:'opacity 0.8s ease'}}>Kind Words</p>
        <h2 style={{fontFamily:theme.displayFont,fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:400,fontStyle:'italic',color:theme.headingColor,marginBottom:'3rem',opacity:vis?1:0,transition:'opacity 0.8s ease 0.2s'}}>
          Voices from the Journey
        </h2>

        <div style={{minHeight:180,opacity:vis?1:0,transition:'opacity 0.8s ease 0.3s'}}>
          <p style={{
            fontFamily:theme.displayFont,fontSize:'clamp(1.15rem,2.5vw,1.5rem)',
            fontStyle:'italic',lineHeight:1.8,color:theme.headingColor,
            marginBottom:'1.8rem',
          }}>
            &ldquo;{testimonials[active].quote}&rdquo;
          </p>
          <p style={{fontFamily:theme.bodyFont,fontSize:'0.82rem',letterSpacing:'0.15em',textTransform:'uppercase',color:theme.accent}}>
            — {testimonials[active].name} · {testimonials[active].role}
          </p>
        </div>

        <div style={{display:'flex',justifyContent:'center',gap:'0.6rem',marginTop:'2.5rem'}}>
          {testimonials.map((_,i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i===active?24:8, height:8, borderRadius:4,
              background: i===active ? theme.accent : theme.cardBorder,
              border:'none',cursor:'pointer',transition:'width 0.3s,background 0.3s',padding:0,
            }}/>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Blog Preview ──────────────────────────────────────────────────────────
const blogPosts = [
  { title:'Understanding Chakras: A Beginner\'s Guide', date:'April 12, 2026', category:'Energy Healing', excerpt:'The seven major chakras are energy centers that run along the spine, each governing specific aspects of our physical and emotional wellbeing...' },
  { title:'Five Herbs for Nervous System Support', date:'March 28, 2026', category:'Herbalism', excerpt:'In a world that never seems to slow down, supporting the nervous system with plant allies is one of the most loving acts of self-care...' },
  { title:'What is Distant Reiki and Does It Work?', date:'March 10, 2026', category:'Reiki', excerpt:'Many people wonder how healing energy can be transmitted across distance. The answer lies in quantum physics and the nature of energy itself...' },
];

const Blog = ({ theme }) => {
  const [vis, setVis] = React.useState(false);
  const ref = React.useRef();
  const isMobile = useIsMobile();
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="journal" ref={ref} style={{padding: isMobile ? '4rem 1.25rem' : '7rem 2rem',background:theme.sectionBg}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'4rem',opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(20px)',transition:'opacity 0.8s,transform 0.8s'}}>
          <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.25em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.8rem'}}>The Journal</p>
          <h2 style={{fontFamily:theme.displayFont,fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,fontStyle:'italic',color:theme.headingColor}}>Wisdom &amp; Writings</h2>
          <div style={{width:50,height:1.5,background:theme.accent,margin:'1.2rem auto 0'}}/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'2rem'}}>
          {blogPosts.map((p,i) => (
            <article key={i} style={{
              background:theme.cardBg,border:`1px solid ${theme.cardBorder}`,
              borderRadius:4,overflow:'hidden',cursor:'pointer',
              opacity:vis?1:0,transform:vis?'translateY(0)':'translateY(25px)',
              transition:`opacity 0.8s ease ${i*0.15}s,transform 0.8s ease ${i*0.15}s`,
            }}>
              <div style={{height:10,background:theme.accent,opacity:0.6}}/>
              <div style={{padding:'1.8rem'}}>
                <div style={{display:'flex',gap:'0.8rem',alignItems:'center',marginBottom:'1rem'}}>
                  <span style={{fontFamily:theme.bodyFont,fontSize:'0.68rem',letterSpacing:'0.15em',textTransform:'uppercase',color:theme.accent,background:theme.tagBg,padding:'0.25rem 0.65rem',borderRadius:'2rem'}}>{p.category}</span>
                  <span style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',color:theme.bodyText,opacity:0.6}}>{p.date}</span>
                </div>
                <h3 style={{fontFamily:theme.displayFont,fontSize:'1.3rem',fontStyle:'italic',fontWeight:400,color:theme.headingColor,lineHeight:1.3,marginBottom:'0.8rem'}}>{p.title}</h3>
                <p style={{fontFamily:theme.bodyFont,fontSize:'0.88rem',lineHeight:1.8,color:theme.bodyText,opacity:0.85}}>{p.excerpt}</p>
                <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.12em',textTransform:'uppercase',color:theme.accent,marginTop:'1.2rem'}}>Read More →</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Contact ───────────────────────────────────────────────────────────────
const Contact = ({ theme }) => {
  const [form, setForm] = React.useState({name:'',email:'',message:''});
  const [sent, setSent] = React.useState(false);
  const isMobile = useIsMobile();

  const contactInfo = [
    { label:'Email', value:'whiteriverhealings@gmail.com', href:'mailto:whiteriverhealings@gmail.com' },
    { label:'Phone', value:'541.991.8453', href:'tel:+15419918453' },
    { label:'Instagram', value:'@whiteriverhealings', href:'https://instagram.com/whiteriverhealings' },
    { label:'Facebook', value:'@whiteriverhealings', href:'https://facebook.com/whiteriverhealings' },
  ];

  return (
    <section id="contact" style={{padding: isMobile ? '4rem 1.25rem' : '7rem 2rem',background:theme.sectionAltBg}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'4rem'}}>
          <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',letterSpacing:'0.25em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.8rem'}}>Reach Out</p>
          <h2 style={{fontFamily:theme.displayFont,fontSize:'clamp(2rem,4vw,3rem)',fontWeight:400,fontStyle:'italic',color:theme.headingColor,marginBottom:'0.8rem'}}>Begin Your Journey</h2>
          <div style={{width:50,height:1.5,background:theme.accent,margin:'0 auto 1.5rem'}}/>
          <p style={{fontFamily:theme.bodyFont,color:theme.bodyText,lineHeight:1.85,fontSize:'0.95rem'}}>
            Questions, curiosities, or ready to book? Brooke would love to hear from you.
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',gap: isMobile ? '2.5rem' : '4rem',alignItems:'start'}}>
          {/* Contact info */}
          <div style={{textAlign: isMobile ? 'center' : 'left'}}>
            <div style={{marginBottom:'2.5rem'}}>
              <p style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'1.2rem'}}>Get in Touch</p>
              <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                {contactInfo.map(c => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http')?'_blank':'_self'}
                    style={{display:'flex',alignItems:'baseline',gap:'1rem',textDecoration:'none',
                      fontFamily:theme.bodyFont,color:theme.bodyText,
                    }}>
                    <span style={{fontSize:'0.68rem',letterSpacing:'0.18em',textTransform:'uppercase',color:theme.accent,minWidth:80,opacity:0.8}}>{c.label}</span>
                    <span style={{fontSize:'1rem',color:theme.headingColor}}>{c.value}</span>
                  </a>
                ))}
              </div>
            </div>

            <div style={{borderTop:`1px solid ${theme.cardBorder}`,paddingTop:'1.8rem'}}>
              <p style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'1rem'}}>Hours</p>
              <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                {[['Thursday','10:00 AM – 5:00 PM'],['Friday','10:00 AM – 5:00 PM'],['Saturday','11:00 AM – 4:00 PM']].map(([d,h]) => (
                  <div key={d} style={{display:'flex',justifyContent:'space-between',fontFamily:theme.bodyFont,fontSize:'0.9rem'}}>
                    <span style={{color:theme.headingColor}}>{d}</span>
                    <span style={{color:theme.bodyText,opacity:0.7}}>{h}</span>
                  </div>
                ))}
                <p style={{fontFamily:theme.bodyFont,fontSize:'0.78rem',color:theme.bodyText,opacity:0.5,marginTop:'0.5rem',fontStyle:'italic'}}>All sessions virtual</p>
              </div>
            </div>

            <a href="https://white-river-healings.square.site/" target="_blank" style={{
              display:'inline-block',marginTop:'2rem',
              background:theme.accent,color:'#fff',
              padding:'0.85rem 2rem',borderRadius:'3rem',
              fontFamily:theme.bodyFont,fontSize:'0.82rem',
              letterSpacing:'0.12em',textTransform:'uppercase',
              textDecoration:'none',
              boxShadow:`0 4px 20px ${theme.accentShadow}`,
            }}>Book a Session ✦</a>
          </div>

          {/* Contact form */}
          <div>
            <p style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'1.2rem'}}>Send a Message</p>
            {sent ? (
              <div style={{background:theme.cardBg,border:`1px solid ${theme.cardBorder}`,borderRadius:4,padding:'2.5rem',fontFamily:theme.displayFont,fontSize:'1.4rem',fontStyle:'italic',color:theme.headingColor,textAlign:'center'}}>
                Thank you — your message has been received. ✦
              </div>
            ) : (
              <form onSubmit={e=>{e.preventDefault();setSent(true);}} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                {['name','email'].map(f => (
                  <input key={f} type={f==='email'?'email':'text'} placeholder={f==='name'?'Your Name':'Email Address'} value={form[f]}
                    onChange={e=>setForm({...form,[f]:e.target.value})}
                    required style={{
                      background:theme.cardBg,border:`1px solid ${theme.cardBorder}`,
                      borderRadius:2,padding:'0.9rem 1.2rem',fontFamily:theme.bodyFont,
                      fontSize:'0.92rem',color:theme.headingColor,outline:'none',
                    }}
                    onFocus={e=>e.target.style.borderColor=theme.accent}
                    onBlur={e=>e.target.style.borderColor=theme.cardBorder}
                  />
                ))}
                <textarea placeholder="Your message..." rows={5} value={form.message}
                  onChange={e=>setForm({...form,message:e.target.value})}
                  required style={{
                    background:theme.cardBg,border:`1px solid ${theme.cardBorder}`,
                    borderRadius:2,padding:'0.9rem 1.2rem',fontFamily:theme.bodyFont,
                    fontSize:'0.92rem',color:theme.headingColor,outline:'none',resize:'vertical',
                  }}
                  onFocus={e=>e.target.style.borderColor=theme.accent}
                  onBlur={e=>e.target.style.borderColor=theme.cardBorder}
                />
                  <button type="submit" style={{
                  background:theme.accent,color:'#fff',border:'none',
                  padding:'0.9rem 2rem',borderRadius:'3rem',cursor:'pointer',
                  fontFamily:theme.bodyFont,fontSize:'0.82rem',letterSpacing:'0.12em',
                  textTransform:'uppercase',fontWeight:500,alignSelf: isMobile ? 'center' : 'flex-start',
                  boxShadow:`0 4px 20px ${theme.accentShadow}`,
                }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Footer ────────────────────────────────────────────────────────────────────
const Footer = ({ theme }) => (
  <footer style={{background:theme.footerBg,padding:'3.5rem 2rem',borderTop:`1px solid ${theme.cardBorder}`}}>
    <div style={{maxWidth:1100,margin:'0 auto',display:'flex',flexWrap:'wrap',gap:'2rem',alignItems:'flex-start',justifyContent:'space-between'}}>
      {/* Brand */}
      <div>
        <p style={{fontFamily:theme.displayFont,fontSize:'1.8rem',fontStyle:'italic',color:'#f0e8d8',marginBottom:'0.4rem'}}>White River Healings</p>
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'1rem'}}>Brooke Jennings · Reiki Master · Herbalist</p>
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.82rem',color:'rgba(240,232,216,0.45)',lineHeight:1.7,maxWidth:280}}>
          A safe space for healing through Reiki, herbal wisdom, and holistic health practices.
        </p>
      </div>

      {/* Contact info */}
      <div style={{display:'flex',flexDirection:'column',gap:'0.6rem'}}>
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.68rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.5rem'}}>Contact</p>
        {[
          {t:'whiteriverhealings@gmail.com', h:'mailto:whiteriverhealings@gmail.com'},
          {t:'541.991.8453', h:'tel:+15419918453'},
        ].map(({t,h}) => (
          <a key={t} href={h} style={{fontFamily:theme.bodyFont,fontSize:'0.88rem',color:'rgba(240,232,216,0.7)',textDecoration:'none'}}>{t}</a>
        ))}
      </div>

      {/* Hours */}
      <div>
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.68rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.5rem'}}>Hours</p>
        {[['Thu – Fri','10:00 AM – 5:00 PM'],['Saturday','11:00 AM – 4:00 PM'],['Sun – Wed','Closed']].map(([d,h]) => (
          <p key={d} style={{fontFamily:theme.bodyFont,fontSize:'0.85rem',color:'rgba(240,232,216,0.6)',marginBottom:'0.3rem'}}>
            <span style={{color:'rgba(240,232,216,0.85)'}}>{d}</span> · {h}
          </p>
        ))}
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.75rem',color:'rgba(240,232,216,0.4)',marginTop:'0.4rem',fontStyle:'italic'}}>All sessions virtual</p>
      </div>

      {/* Social */}
      <div style={{display:'flex',flexDirection:'column',gap:'0.6rem'}}>
        <p style={{fontFamily:theme.bodyFont,fontSize:'0.68rem',letterSpacing:'0.2em',textTransform:'uppercase',color:theme.accent,marginBottom:'0.5rem'}}>Follow Along</p>
        {[
          {t:'Instagram', h:'https://instagram.com/whiteriverhealings', sub:'@whiteriverhealings'},
          {t:'Facebook',  h:'https://facebook.com/whiteriverhealings',  sub:'@whiteriverhealings'},
        ].map(({t,h,sub}) => (
          <a key={t} href={h} target="_blank" style={{textDecoration:'none'}}>
            <span style={{fontFamily:theme.bodyFont,fontSize:'0.88rem',color:'rgba(240,232,216,0.7)'}}>{sub}</span>
            <span style={{fontFamily:theme.bodyFont,fontSize:'0.7rem',color:theme.accent,marginLeft:'0.5rem',opacity:0.7}}>{t}</span>
          </a>
        ))}
      </div>
    </div>
    <div style={{maxWidth:1100,margin:'2rem auto 0',paddingTop:'1.5rem',borderTop:'1px solid rgba(240,232,216,0.08)',textAlign:'center'}}>
      <p style={{fontFamily:theme.bodyFont,fontSize:'0.72rem',color:'rgba(240,232,216,0.3)',letterSpacing:'0.08em'}}>© 2026 White River Healings · Made with love and light ✦</p>
    </div>
  </footer>
);

Object.assign(window, { About, Services, HerbShop, Testimonials, Blog, Contact, Footer, serviceData });
