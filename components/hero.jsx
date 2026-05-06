
// ── BotanicalSVG ────────────────────────────────────────────────────────────
const BotanicalSVG = ({ color }) => (
  <svg viewBox="0 0 600 700" style={{position:'absolute',inset:0,width:'100%',height:'100%'}} xmlns="http://www.w3.org/2000/svg">
    <path d="M300 680 Q295 580 310 480 Q320 380 295 280 Q275 180 300 80" stroke={color} strokeWidth="1.5" fill="none"/>
    <ellipse cx="295" cy="200" rx="55" ry="22" transform="rotate(-35 295 200)" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="320" cy="200" rx="48" ry="18" transform="rotate(40 320 200)" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="285" cy="310" rx="65" ry="24" transform="rotate(-28 285 310)" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="318" cy="320" rx="55" ry="20" transform="rotate(32 318 320)" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="290" cy="420" rx="70" ry="25" transform="rotate(-22 290 420)" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="315" cy="430" rx="60" ry="22" transform="rotate(28 315 430)" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="300" cy="90" r="12" stroke={color} strokeWidth="1.2" fill="none"/>
    <circle cx="300" cy="90" r="5" stroke={color} strokeWidth="1" fill="none"/>
    {[0,60,120,180,240,300].map(a => (
      <ellipse key={a}
        cx={300 + Math.cos(a*Math.PI/180)*14}
        cy={90 + Math.sin(a*Math.PI/180)*14}
        rx="5" ry="8"
        transform={`rotate(${a} ${300+Math.cos(a*Math.PI/180)*14} ${90+Math.sin(a*Math.PI/180)*14})`}
        stroke={color} strokeWidth="1" fill="none"/>
    ))}
    <path d="M295 280 Q240 260 210 240 Q185 225 175 205" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3 3"/>
    <path d="M310 280 Q365 255 390 235 Q415 218 422 198" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3 3"/>
    <path d="M285 400 Q225 380 195 360 Q168 345 160 325" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3 3"/>
    <path d="M318 410 Q378 388 408 368 Q435 350 442 330" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3 3"/>
    <path d="M30 650 Q80 600 100 540 Q110 500 90 460" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="95" cy="510" rx="40" ry="16" transform="rotate(-20 95 510)" stroke={color} strokeWidth="1" fill="none"/>
    <ellipse cx="88" cy="570" rx="35" ry="14" transform="rotate(25 88 570)" stroke={color} strokeWidth="1" fill="none"/>
    <path d="M570 650 Q520 600 500 540 Q490 500 510 460" stroke={color} strokeWidth="1.2" fill="none"/>
    <ellipse cx="505" cy="510" rx="40" ry="16" transform="rotate(20 505 510)" stroke={color} strokeWidth="1" fill="none"/>
    <ellipse cx="512" cy="570" rx="35" ry="14" transform="rotate(-25 512 570)" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// ── SprigSVG ────────────────────────────────────────────────────────────────
const SprigSVG = ({ theme, opacity = 0.18, rotate = 0 }) => (
  <svg viewBox="0 0 200 300" style={{width:'100%',height:'100%',opacity,transform:`rotate(${rotate}deg)`}} xmlns="http://www.w3.org/2000/svg">
    <path d="M100 290 Q98 240 103 190 Q108 140 100 90 Q93 50 100 20" stroke={theme.botanicalStroke} strokeWidth="1.3" fill="none"/>
    {[90,140,190,240].map((y,i) => (
      <React.Fragment key={y}>
        <ellipse cx={97} cy={y} rx={32+i*3} ry={12} transform={`rotate(${-22+i*4} 97 ${y})`} stroke={theme.botanicalStroke} strokeWidth="1" fill="none"/>
        <ellipse cx={104} cy={y+6} rx={26+i*2} ry={10} transform={`rotate(${28-i*4} 104 ${y+6})`} stroke={theme.botanicalStroke} strokeWidth="1" fill="none"/>
      </React.Fragment>
    ))}
    <circle cx="100" cy="25" r="8" stroke={theme.botanicalStroke} strokeWidth="1" fill="none"/>
    {[0,72,144,216,288].map(a => (
      <ellipse key={a}
        cx={100+Math.cos(a*Math.PI/180)*10}
        cy={25+Math.sin(a*Math.PI/180)*10}
        rx="3" ry="6"
        transform={`rotate(${a} ${100+Math.cos(a*Math.PI/180)*10} ${25+Math.sin(a*Math.PI/180)*10})`}
        stroke={theme.botanicalStroke} strokeWidth="0.9" fill="none"/>
    ))}
  </svg>
);

// ── SunSVG ──────────────────────────────────────────────────────────────────
const SunSVG = ({ color, glowColor }) => (
  <svg viewBox="0 0 120 120" style={{width:'100%',height:'100%'}} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="0.5"/>
        <stop offset="100%" stopColor={glowColor} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="54" fill="url(#sunGlow)"/>
    {[0,30,60,90,120,150,180,210,240,270,300,330].map(a => {
      const rad = a * Math.PI / 180;
      const x1 = 60 + Math.cos(rad)*30, y1 = 60 + Math.sin(rad)*30;
      const x2 = 60 + Math.cos(rad)*(a%60===0?50:44), y2 = 60 + Math.sin(rad)*(a%60===0?50:44);
      return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={a%60===0?1.5:1} strokeOpacity="0.7"/>;
    })}
    <circle cx="60" cy="60" r="18" fill="none" stroke={color} strokeWidth="1.5" strokeOpacity="0.85"/>
    <circle cx="60" cy="60" r="10" fill={glowColor} fillOpacity="0.35"/>
    <circle cx="60" cy="60" r="24" fill="none" stroke={color} strokeWidth="0.7" strokeOpacity="0.3" strokeDasharray="2 4"/>
  </svg>
);

// ── MoonSVG ─────────────────────────────────────────────────────────────────
const MoonSVG = ({ color, glowColor }) => (
  <svg viewBox="0 0 100 120" style={{width:'100%',height:'100%'}} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="moonGlow" cx="40%" cy="50%" r="60%">
        <stop offset="0%" stopColor={glowColor} stopOpacity="0.35"/>
        <stop offset="100%" stopColor={glowColor} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="46" cy="60" rx="44" ry="50" fill="url(#moonGlow)"/>
    <path d="M50,22 a38,38 0 1,1 0,76 a26,26 0 1,0 0,-76 Z"
      fill={glowColor} fillOpacity="0.15" stroke={color} strokeWidth="1.4" strokeOpacity="0.8"/>
    {[[18,28],[75,38],[80,72],[22,82],[68,20]].map(([x,y],i) => (
      <g key={i} transform={`translate(${x},${y})`}>
        <line x1="0" y1="-3" x2="0" y2="3" stroke={color} strokeWidth="0.8" strokeOpacity="0.55"/>
        <line x1="-3" y1="0" x2="3" y2="0" stroke={color} strokeWidth="0.8" strokeOpacity="0.55"/>
        <circle cx="0" cy="0" r="0.8" fill={color} fillOpacity="0.7"/>
      </g>
    ))}
    <ellipse cx="50" cy="60" rx="40" ry="46" fill="none" stroke={color} strokeWidth="0.6" strokeOpacity="0.18" strokeDasharray="3 6"/>
  </svg>
);

// ── RiverSVG ─────────────────────────────────────────────────────────────────
// Winding river flowing across the bottom of the hero
const RiverSVG = ({ riverColor, shimmerColor, scrollY }) => {
  const shimmer = (scrollY * 0.03) % 1;
  return (
    <svg viewBox="0 0 1440 220" preserveAspectRatio="none"
      style={{position:'absolute',bottom:0,left:0,right:0,width:'100%',height:'220px',overflow:'visible'}}
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={riverColor} stopOpacity="0"/>
          <stop offset="15%" stopColor={riverColor} stopOpacity="0.35"/>
          <stop offset="50%" stopColor={riverColor} stopOpacity="0.55"/>
          <stop offset="85%" stopColor={riverColor} stopOpacity="0.35"/>
          <stop offset="100%" stopColor={riverColor} stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="shimmerGrad" x1={`${shimmer*100}%`} y1="0%" x2={`${shimmer*100+40}%`} y2="0%">
          <stop offset="0%" stopColor={shimmerColor} stopOpacity="0"/>
          <stop offset="50%" stopColor={shimmerColor} stopOpacity="0.6"/>
          <stop offset="100%" stopColor={shimmerColor} stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Main river body — broad gentle curves */}
      <path
        d="M-100,180 C100,155 200,195 400,165 C600,135 700,175 900,155 C1100,135 1200,170 1440,148 L1440,210 C1200,200 1100,185 900,200 C700,215 600,185 400,200 C200,215 100,190 -100,210 Z"
        fill="url(#riverGrad)"
      />
      {/* Shimmer line */}
      <path
        d="M-100,178 C100,153 200,193 400,163 C600,133 700,173 900,153 C1100,133 1200,168 1540,146"
        stroke="url(#shimmerGrad)" strokeWidth="2" fill="none" strokeOpacity="0.8"
      />
      {/* Gentle ripple lines */}
      {[0,1,2,3].map(i => (
        <path key={i}
          d={`M${i*380+20},${172+i*4} C${i*380+80},${168+i*3} ${i*380+160},${178+i*4} ${i*380+280},${170+i*3}`}
          stroke={shimmerColor} strokeWidth="0.8" fill="none" strokeOpacity="0.25"
          strokeDasharray="8 6"
        />
      ))}
      {/* Soft reflection glow on surface */}
      <ellipse cx="520" cy="178" rx="160" ry="8" fill={shimmerColor} fillOpacity="0.12"/>
      <ellipse cx="980" cy="163" rx="120" ry="6" fill={shimmerColor} fillOpacity="0.1"/>
    </svg>
  );
};

// ── StarField ────────────────────────────────────────────────────────────────
const StarField = ({ count = 60, color, scrollY }) => {
  const stars = React.useMemo(() => {
    const rng = (seed) => { let x = Math.sin(seed+1)*10000; return x - Math.floor(x); };
    return Array.from({length: count}, (_,i) => ({
      x: rng(i*3+1) * 100,
      y: rng(i*3+2) * 75,
      r: rng(i*3+3) * 1.4 + 0.3,
      delay: rng(i*7) * 4,
      dur: 2.5 + rng(i*11) * 3,
    }));
  }, [count]);

  return (
    <svg viewBox="0 0 100 75" preserveAspectRatio="none"
      style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}}
      xmlns="http://www.w3.org/2000/svg">
      {stars.map((s,i) => (
        <circle key={i} cx={s.x} cy={s.y - (scrollY * 0.005)} r={s.r} fill={color} fillOpacity="0.7">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${s.dur}s`}
            begin={`${s.delay}s`} repeatCount="indefinite"/>
        </circle>
      ))}
    </svg>
  );
};

// ── AuroraBand ───────────────────────────────────────────────────────────────
const AuroraBand = ({ colors, scrollY }) => (
  <svg viewBox="0 0 1440 900" preserveAspectRatio="none"
    style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',mixBlendMode:'screen'}}
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="aurora1" cx="30%" cy="40%" r="50%">
        <stop offset="0%" stopColor={colors[0]} stopOpacity="0.18"/>
        <stop offset="100%" stopColor={colors[0]} stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="aurora2" cx="70%" cy="35%" r="45%">
        <stop offset="0%" stopColor={colors[1]} stopOpacity="0.14"/>
        <stop offset="100%" stopColor={colors[1]} stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="aurora3" cx="50%" cy="55%" r="40%">
        <stop offset="0%" stopColor={colors[2] || colors[0]} stopOpacity="0.10"/>
        <stop offset="100%" stopColor={colors[2] || colors[0]} stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="432" cy={360 - scrollY*0.06} rx="700" ry="280" fill="url(#aurora1)"/>
    <ellipse cx="1008" cy={315 - scrollY*0.08} rx="640" ry="240" fill="url(#aurora2)"/>
    <ellipse cx="720" cy={495 - scrollY*0.04} rx="580" ry="200" fill="url(#aurora3)"/>
  </svg>
);

// ── Parallax hook ─────────────────────────────────────────────────────────────
const useParallax = () => {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setScrollY(window.scrollY); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrollY;
};

// ── SEASON DEFINITIONS ────────────────────────────────────────────────────────
const SEASONS = {
  spring: {
    label: 'Spring',
    heroBg: '#f2ede4',
    bodyBg: '#faf7f2',
    altBg: '#ede8df',
    headingColor: '#2e1f14',
    bodyText: '#5a3d2b',
    accent: '#a8845a',
    accentShadow: 'rgba(168,132,90,0.35)',
    botanicalColor: '#7a6040',
    navScrollBg: 'rgba(242,237,228,0.96)',
    navBorder: 'rgba(168,132,90,0.2)',
    cardBg: '#faf7f2',
    cardBorder: 'rgba(168,132,90,0.18)',
    tagBg: 'rgba(168,132,90,0.1)',
    shadowColor: 'rgba(46,31,20,0.07)',
    footerBg: '#2e1f14',
    // celestial
    starColor: '#d4a870',
    celestialBody: 'sun',
    sunColor: '#c8924a',
    sunGlow: '#e8b870',
    auroraColors: ['#d4a870','#c8924a','#e8c898'],
    riverColor: '#a0c4d8',
    riverShimmer: '#d4ecf8',
    heroGlow: 'rgba(200,146,74,0.2)',
    heroBorder: 'rgba(120,90,60,0.3)',
  },
  summer: {
    label: 'Summer',
    heroBg: '#fdf8f0',
    bodyBg: '#fdfaf5',
    altBg: '#f5f0e5',
    headingColor: '#261508',
    bodyText: '#524030',
    accent: '#c17f4a',
    accentShadow: 'rgba(193,127,74,0.38)',
    botanicalColor: '#7a5c3a',
    navScrollBg: 'rgba(253,248,240,0.96)',
    navBorder: 'rgba(193,127,74,0.2)',
    cardBg: '#fdfaf5',
    cardBorder: 'rgba(193,127,74,0.18)',
    tagBg: 'rgba(193,127,74,0.1)',
    shadowColor: 'rgba(38,21,8,0.08)',
    footerBg: '#261508',
    starColor: '#e8c878',
    celestialBody: 'sun',
    sunColor: '#d49040',
    sunGlow: '#f0c860',
    auroraColors: ['#e8b840','#d49040','#f0d880'],
    riverColor: '#88c4e0',
    riverShimmer: '#c8eaf8',
    heroGlow: 'rgba(212,144,64,0.22)',
    heroBorder: 'rgba(140,100,50,0.3)',
  },
  autumn: {
    label: 'Autumn',
    heroBg: '#1e1208',
    bodyBg: '#f5ede0',
    altBg: '#ede0d0',
    headingColor: '#f0e0c8',
    bodyText: '#c8a880',
    accent: '#d4782a',
    accentShadow: 'rgba(212,120,42,0.4)',
    botanicalColor: '#c8803a',
    navScrollBg: 'rgba(30,18,8,0.96)',
    navBorder: 'rgba(212,120,42,0.2)',
    cardBg: '#f5ede0',
    cardBorder: 'rgba(212,120,42,0.2)',
    tagBg: 'rgba(212,120,42,0.12)',
    shadowColor: 'rgba(20,10,0,0.15)',
    footerBg: '#110a04',
    starColor: '#e8c898',
    celestialBody: 'moon',
    moonColor: '#e8c878',
    moonGlow: '#d4902a',
    auroraColors: ['#c84820','#d4782a','#8a3010'],
    riverColor: '#5a8090',
    riverShimmer: '#a0c8d8',
    heroGlow: 'rgba(212,120,42,0.18)',
    heroBorder: 'rgba(200,128,58,0.35)',
  },
  winter: {
    label: 'Winter',
    heroBg: '#0a0f1e',
    bodyBg: '#f0ede8',
    altBg: '#e5e0d8',
    headingColor: '#e8eaf5',
    bodyText: '#b0b8d0',
    accent: '#7090c8',
    accentShadow: 'rgba(112,144,200,0.4)',
    botanicalColor: '#6888b8',
    navScrollBg: 'rgba(10,15,30,0.97)',
    navBorder: 'rgba(112,144,200,0.2)',
    cardBg: '#f0ede8',
    cardBorder: 'rgba(112,144,200,0.18)',
    tagBg: 'rgba(112,144,200,0.1)',
    shadowColor: 'rgba(10,15,30,0.15)',
    footerBg: '#060a14',
    starColor: '#c8d8f8',
    celestialBody: 'moon',
    moonColor: '#c8d8f0',
    moonGlow: '#7090c8',
    auroraColors: ['#4068b8','#7090c8','#90b8e8'],
    riverColor: '#3a6090',
    riverShimmer: '#80b0e0',
    heroGlow: 'rgba(112,144,200,0.2)',
    heroBorder: 'rgba(100,130,190,0.35)',
  },
};


// ── Seasonal Particles (pure DOM, no canvas) ────────────────────────────────
const SeasonalParticles = ({ season }) => {
  const count = { autumn: 28, winter: 40, spring: 35, summer: 22 }[season] || 25;

  const particles = React.useMemo(() => {
    const rng = (i, o=0) => { const x = Math.sin(i*127.1+o*311.7)*43758.5453; return x - Math.floor(x); };
    return Array.from({ length: count }, (_, i) => ({
      left: rng(i, 0) * 100,
      top:  rng(i, 1) * 90,
      size: 1 + rng(i, 2) * 1.5,
      delay: rng(i, 3) * 6,
      dur:   3 + rng(i, 4) * 5,
      driftX: (rng(i,5)-0.5) * 30,
      driftY: season==='winter'||season==='spring' ? 40+rng(i,6)*60 : -(20+rng(i,6)*40),
      rot: rng(i,7)*360,
    }));
  }, [season, count]);

  const colors = {
    autumn: (i) => `hsl(${44+Math.sin(i)*8},80%,${68+Math.sin(i*2)*8}%)`,
    winter: (i) => `hsl(210,${35+Math.sin(i)*20}%,${88+Math.sin(i*3)*8}%)`,
    spring: (i) => `hsl(${345+Math.sin(i)*20},${60+Math.sin(i*2)*20}%,${76+Math.sin(i*3)*8}%)`,
    summer: (i) => `hsl(${42+Math.sin(i)*12},85%,${72+Math.sin(i*2)*10}%)`,
  };
  const getColor = colors[season] || colors.summer;

  // Render mode per season
  const renderParticle = (p, i) => {
    const baseStyle = {
      position: 'absolute',
      left: p.left + '%',
      top: p.top + '%',
      pointerEvents: 'none',
      animation: `particle-${season} ${p.dur}s ${p.delay}s ease-in-out infinite`,
      '--dx': p.driftX + 'px',
      '--dy': p.driftY + 'px',
      '--rot': p.rot + 'deg',
    };

    if (season === 'winter') {
      // Tiny cross
      const s = p.size * 2;
      return (
        <div key={i} style={{...baseStyle, width: s, height: s, opacity: 0.22}}>
          <div style={{position:'absolute',top:'50%',left:0,right:0,height:0.6,background:getColor(i),transform:'translateY(-50%)'}}/>
          <div style={{position:'absolute',left:'50%',top:0,bottom:0,width:0.6,background:getColor(i),transform:'translateX(-50%)'}}/>
        </div>
      );
    } else if (season === 'spring') {
      // Tiny oval petal
      return (
        <div key={i} style={{
          ...baseStyle,
          width: Math.min(p.size * 2.5, 5) + 'px',
          height: Math.min(p.size * 4, 8) + 'px',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          background: getColor(i),
          opacity: 0.22,
          transform: `rotate(${p.rot}deg)`,
        }}/>
      );
    } else {
      // Tiny dot (firefly / mote)
      const sz = Math.min(p.size, 2);
      return (
        <div key={i} style={{
          ...baseStyle,
          width: sz + 'px',
          height: sz + 'px',
          borderRadius: '50%',
          background: getColor(i),
          opacity: 0.15,
        }}/>
      );
    }
  };

  return (
    <>
      <style>{`
        @keyframes particle-autumn {
          0%,100% { transform: translate(0,0); opacity:0; }
          15%      { opacity:0.18; }
          50%      { transform: translate(var(--dx), var(--dy)); opacity:0.22; }
          85%      { opacity:0.18; }
        }
        @keyframes particle-winter {
          0%   { transform: translate(0,0) rotate(var(--rot)); opacity:0.2; }
          100% { transform: translate(var(--dx), var(--dy)) rotate(calc(var(--rot) + 180deg)); opacity:0.1; }
        }
        @keyframes particle-spring {
          0%   { transform: translate(0,0) rotate(var(--rot)); opacity:0; }
          10%  { opacity:0.22; }
          90%  { opacity:0.18; }
          100% { transform: translate(var(--dx), var(--dy)) rotate(calc(var(--rot) + 90deg)); opacity:0; }
        }
        @keyframes particle-summer {
          0%,100% { transform: translate(0,0); opacity:0; }
          20%     { opacity:0.12; }
          50%     { transform: translate(var(--dx), var(--dy)); opacity:0.14; }
          80%     { opacity:0.10; }
        }
      `}</style>
      <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:7}}>
        {particles.map(renderParticle)}
      </div>
    </>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = ({ theme, season }) => {
  const [visible] = React.useState(true);
  const scrollY = useParallax();
  const s = SEASONS[season] || SEASONS.summer;

  const layerFar  = scrollY * 0.18;
  const layerMid  = scrollY * 0.32;
  const layerNear = scrollY * 0.50;
  const glowShift = scrollY * 0.12;
  const sunShift  = scrollY * 0.22;
  const moonShift = scrollY * 0.28;
  const riverShift = scrollY * 0.06;

  // Text color adapts to dark (autumn/winter) vs light hero bg
  const isDark = season === 'autumn' || season === 'winter';

  return (
    <section id="hero" style={{
      minHeight:'100vh', position:'relative', overflow:'hidden',
      background: s.heroBg,
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      {/* Grain texture */}
      <div style={{
        position:'absolute',inset:0,opacity:0.045,pointerEvents:'none',
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize:'200px 200px',
      }}/>

      {/* Radial glow */}
      <div style={{
        position:'absolute',inset:0,pointerEvents:'none', zIndex:5,
        background:`radial-gradient(ellipse 70% 60% at 45% 55%, ${s.heroGlow} 0%, transparent 70%)`,
      }}/>

      {/* Seasonal Particles */}
      <SeasonalParticles season={season}/>

      {/* Content */}
      <div style={{
        position:'relative', zIndex:10, textAlign:'center',
        padding:'8rem 2rem 6rem', maxWidth:780,
        transform:`translateY(${scrollY * 0.08}px)`,
        opacity: 1,
        willChange:'transform',
        background: isDark
          ? 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.22) 0%, transparent 80%)'
          : 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 80%)',
      }}>
        <p style={{
          fontFamily: theme.bodyFont, fontSize:'0.8rem', letterSpacing:'0.28em',
          textTransform:'uppercase', color: s.accent, marginBottom:'1.5rem',
          opacity: 1,
        }}>
          Brooke Jennings · Reiki Master · Herbalist · Intuitive Guide
        </p>

        <h1 style={{
          fontFamily: theme.displayFont, fontSize:'clamp(3rem, 7vw, 5.5rem)',
          fontWeight:400, lineHeight:1.1, color: s.headingColor,
          marginBottom:'2.5rem', fontStyle:'italic',
          opacity: 1,
        }}>
          Align Your Body,<br/>
          <span style={{color: s.accent}}>Mind &amp; Spirit</span>
        </h1>

        <div style={{
          width:60, height:1.5, background: s.accent, margin:'0 auto 2rem',
          opacity: 1,
        }}/>

        <p style={{
          fontFamily:theme.bodyFont, fontSize:'1.1rem', lineHeight:1.85,
          color: isDark ? s.bodyText : s.bodyText,
          maxWidth:560, margin:'0 auto 2.5rem',
          opacity: 1,
        }}>
          A safe space for anyone ready to receive the healing power of Reiki,
          herbal wisdom, and holistic health practices. You are in the right place.
        </p>

        <div style={{
          display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap',
          opacity: 1,
        }}>
          <button
            onClick={() => window.open('https://white-river-healings.square.site/', '_blank')}
            style={{
              background: s.accent, color:'#fff', border:'none',
              padding:'0.9rem 2.2rem', borderRadius:'3rem', cursor:'pointer',
              fontFamily:theme.bodyFont, fontSize:'0.85rem', letterSpacing:'0.12em',
              textTransform:'uppercase', fontWeight:500,
              boxShadow:`0 4px 24px ${s.accentShadow}`,
            }}>
            Book a Session
          </button>
          <a href="#services" style={{
            background:'transparent', color: s.headingColor,
            border:`1.5px solid ${s.heroBorder}`, padding:'0.9rem 2.2rem',
            borderRadius:'3rem', cursor:'pointer', fontFamily:theme.bodyFont,
            fontSize:'0.85rem', letterSpacing:'0.12em', textTransform:'uppercase',
            textDecoration:'none', display:'inline-flex', alignItems:'center',
          }}>
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position:'absolute', bottom:'3rem', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center',
        opacity: scrollY > 60 ? 0 : 0.4,
        transition:'opacity 0.6s ease', zIndex:11,
      }}>
        <div style={{
          width:1, height:48,
          background:`linear-gradient(to bottom, transparent, ${s.accent})`,
          animation:'scrollCue 1.8s ease-in-out infinite',
        }}/>
      </div>
    </section>
  );
};

// ── SectionBotanical ──────────────────────────────────────────────────────────
const SectionBotanical = ({ theme, side='right', speed=0.15, opacity=0.12, offsetTop=0 }) => {
  const scrollY = useParallax();
  return (
    <div style={{
      position:'absolute',
      [side]: side==='right'?'-3%':'-2%',
      top: offsetTop, width:'18%', aspectRatio:'2/3',
      transform:`translateY(${scrollY*speed}px)`,
      willChange:'transform', pointerEvents:'none', zIndex:0,
    }}>
      <SprigSVG theme={theme} opacity={opacity} rotate={side==='right'?8:-8}/>
    </div>
  );
};

Object.assign(window, {
  Hero, BotanicalSVG, SprigSVG, SunSVG, MoonSVG,
  RiverSVG, StarField, AuroraBand, SeasonalParticles,
  SectionBotanical, useParallax, SEASONS,
});
