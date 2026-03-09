import React, { useState, useEffect } from 'react';

const translations = {
  en: {
    nav: { home: 'Home', modules: 'Modules', how: 'How It Works', ivr: 'IVR', team: 'Team' },
    hero: {
      badge: '🏆 AI for Bharat Hackathon 2025',
      title: 'Community AI Hub',
      subtitle: 'One Platform. Three Powerful AI Services.',
      desc: 'Empowering rural India with accessible AI solutions for agriculture, healthcare, and education.',
      explore: 'Explore Platform →',
      how: 'How It Works',
      stats: { modules: 'AI Modules', schemes: 'Govt Schemes', langs: 'Languages', ivr: 'IVR Support' },
      cards: ['Krishi Mitra', 'Arogya AI', 'Vidya AI'],
      live: 'Live'
    },
    modules: { title: 'Our AI Modules', subtitle: 'Click any module to open — all are live!' },
    cards: [
      {
        id: 'agri', sub: 'AI Agriculture Assistant', btn: 'Open Krishi Mitra →',
        features: ['Crop Disease Detector', 'Market Price Comparison', 'Farm Monitoring & Weather', 'Talk with Agri Experts', 'Financial Support Schemes']
      },
      {
        id: 'health', sub: 'AI Healthcare Assistant', btn: 'Open Arogya AI →',
        features: ['Symptom Analysis & Diagnosis', 'Ayushman Bharat Eligibility', 'Nearby Hospital Finder', 'Doctor Appointment Booking', 'Health Insurance Guidance']
      },
      {
        id: 'edu', sub: 'AI Education & Startup', btn: 'Open Vidya AI →',
        features: ['Personalized Study Guidance', 'Free Course Recommendations', 'Scholarship Finder (50+)', 'Startup Idea Validator', 'Student-Startup Internships']
      }
    ],
    how: {
      title: 'How It Works',
      steps: [
        { title: 'STEP 01', name: 'Choose Your Service', desc: 'Select Agriculture, Healthcare or Education' },
        { title: 'STEP 02', name: 'Talk in Your Language', desc: 'Hindi, Marathi or English — voice or text' },
        { title: 'STEP 03', name: 'Get AI Guidance', desc: 'Personalized AI-powered recommendations instantly' }
      ]
    },
    ivr: { title: 'Also Available on Phone Call', desc: 'No smartphone? No problem! Call our toll-free number to get AI assistance for agriculture, healthcare, or education in your local language.' },
    tech: 'Built With',
    teamTitle: 'Our Team',
    roles: ['Agriculture Module', 'Healthcare Module', 'Education & Startup'],
    footerUrl: 'DEMO ONLY – Not official advice',
    tagline: 'Empowering Rural India'
  },
  hi: {
    nav: { home: 'होम', modules: 'मॉड्यूल', how: 'यह कैसे काम करता है', ivr: 'आईवीआर', team: 'टीम' },
    hero: {
      badge: '🏆 एआई फॉर भारत हैकाथॉन 2025',
      title: 'कम्युनिटी एआई हब',
      subtitle: 'एक मंच। तीन शक्तिशाली एआई सेवाएं।',
      desc: 'कृषि, स्वास्थ्य सेवा और शिक्षा के लिए सुलभ एआई समाधानों के साथ ग्रामीण भारत को सशक्त बनाना।',
      explore: 'प्लेटफ़ॉर्म खोजें →',
      how: 'यह कैसे काम करता है',
      stats: { modules: 'एआई मॉड्यूल', schemes: 'सरकारी योजनाएं', langs: 'भाषाएं', ivr: 'आईवीआर सपोर्ट' },
      cards: ['कृषि मित्र', 'आरोग्य एआई', 'विद्या एआई'],
      live: 'लाइव'
    },
    modules: { title: 'हमारे एआई मॉड्यूल', subtitle: 'खोलने के लिए किसी भी मॉड्यूल पर क्लिक करें — सभी लाइव हैं!' },
    cards: [
      {
        id: 'agri', sub: 'एआई कृषि सहायक', btn: 'कृषि मित्र खोलें →',
        features: ['फसल रोग पहचानकर्ता', 'बाजार मूल्य तुलना', 'फार्म निगरानी और मौसम', 'कृषि विशेषज्ञों से बात करें', 'वित्तीय सहायता योजनाएं']
      },
      {
        id: 'health', sub: 'एआई हेल्थकेयर सहायक', btn: 'आरोग्य एआई खोलें →',
        features: ['लक्षण विश्लेषण और निदान', 'आयुष्मान भारत पात्रता', 'निकटतम अस्पताल खोजक', 'डॉक्टर अपॉइंटमेंट बुकिंग', 'स्वास्थ्य बीमा मार्गदर्शन']
      },
      {
        id: 'edu', sub: 'एआई शिक्षा और स्टार्टअप', btn: 'विद्या एआई खोलें →',
        features: ['व्यक्तिगत अध्ययन मार्गदर्शन', 'मुफ्त पाठ्यक्रम सिफारिशें', 'छात्रवृत्ति खोजक (50+)', 'स्टार्टअप आइडिया वैलिडेटर', 'छात्र-स्टार्टअप इंटर्नशिप']
      }
    ],
    how: {
      title: 'यह कैसे काम करता है',
      steps: [
        { title: 'चरण 01', name: 'अपनी सेवा चुनें', desc: 'कृषि, स्वास्थ्य सेवा या शिक्षा चुनें' },
        { title: 'चरण 02', name: 'अपनी भाषा में बात करें', desc: 'हिंदी, मराठी या अंग्रेजी — आवाज या पाठ' },
        { title: 'चरण 03', name: 'एआई मार्गदर्शन प्राप्त करें', desc: 'तुरंत व्यक्तिगत एआई-संचालित सिफारिशें' }
      ]
    },
    ivr: { title: 'फोन कॉल पर भी उपलब्ध', desc: 'क्या आपके पास स्मार्टफोन नहीं है? कोई बात नहीं! बस हमारे टोल-फ्री नंबर पर कॉल करें और अपनी भाषा में किसी भी एआई मॉड्यूल से बात करें।' },
    tech: 'तकनीक',
    teamTitle: 'हमारी टीम',
    roles: ['कृषि मॉड्यूल', 'हेल्थकेयर मॉड्यूल', 'शिक्षा और स्टार्टअप'],
    footerUrl: 'केवल डेमो - आधिकारिक सलाह नहीं',
    tagline: 'ग्रामीण भारत को सशक्त बनाना'
  },
  mr: {
    nav: { home: 'होम', modules: 'मॉड्यूल्स', how: 'हे कसे कार्य करते', ivr: 'आयव्हीआर', team: 'टीम' },
    hero: {
      badge: '🏆 एआय फॉर भारत हॅकाथॉन 2025',
      title: 'कम्युनिटी एआय हब',
      subtitle: 'एक प्लॅटफॉर्म. तीन शक्तिशाली एआय सेवा.',
      desc: 'शेती, आरोग्य सेवा आणि शिक्षणासाठी सुलभ एआय उपायांसह ग्रामीण भारताचे सक्षमीकरण.',
      explore: 'प्लॅटफॉर्म एक्सप्लोर करा →',
      how: 'हे कसे कार्य करते',
      stats: { modules: 'एआय मॉड्यूल्स', schemes: 'सरकारी योजना', langs: 'भाषा', ivr: 'आयव्हीआर सपोर्ट' },
      cards: ['कृषी मित्र', 'आरोग्य एआय', 'विद्या एआय'],
      live: 'लाइव्ह'
    },
    modules: { title: 'आमचे एआय मॉड्यूल्स', subtitle: 'उघडण्यासाठी कोणत्याही मॉड्यूलवर क्लिक करा — सर्व लाइव्ह आहेत!' },
    cards: [
      {
        id: 'agri', sub: 'एआय कृषी सहाय्यक', btn: 'कृषी मित्र उघडा →',
        features: ['पीक रोग ओळखणारा', 'बाजारभाव तुलना', 'शेत निरीक्षण आणि हवामान', 'कृषी तज्ञांशी बोला', 'आर्थिक सहाय्य योजना']
      },
      {
        id: 'health', sub: 'एआय आरोग्यसेवा सहाय्यक', btn: 'आरोग्य एआय उघडा →',
        features: ['लक्षणे विश्लेषण आणि निदान', 'आयुष्मान भारत पात्रता', 'जवळचे रुग्णालय शोधक', 'डॉक्टर अपॉइंटमेंट बुकिंग', 'आरोग्य विमा मार्गदर्शन']
      },
      {
        id: 'edu', sub: 'एआय शिक्षण आणि स्टार्टअप', btn: 'विद्या एआय उघडा →',
        features: ['वैयक्तिकृत अभ्यास मार्गदर्शन', 'मोफत अभ्यासक्रम शिफारसी', 'शिष्यवृत्ती शोधक (50+)', 'स्टार्टअप आयडिया व्हॅलिडेटर', 'विद्यार्थी-स्टार्टअप इंटर्नशिप']
      }
    ],
    how: {
      title: 'हे कसे कार्य करते',
      steps: [
        { title: 'पायरी 01', name: 'तुमची सेवा निवडा', desc: 'शेती, आरोग्य सेवा किंवा शिक्षण निवडा' },
        { title: 'पायरी 02', name: 'तुमच्या भाषेत बोला', desc: 'हिंदी, मराठी किंवा इंग्रजी — आवाज किंवा मजकूर' },
        { title: 'पायरी 03', name: 'एआय मार्गदर्शन मिळवा', desc: 'त्वरित वैयक्तिकृत एआय-समर्थित शिफारसी' }
      ]
    },
    ivr: { title: 'फोन कॉलवर देखील उपलब्ध', desc: 'स्मार्टफोन नाही? हरकत नाही! आमच्या टोल-फ्री नंबरवर कॉल करा आणि तुमच्या भाषेत कोणत्याही एआय मॉड्यूलशी बोला.' },
    tech: 'तंत्रज्ञान',
    teamTitle: 'आमची टीम',
    roles: ['कृषी मॉड्यूल', 'आरोग्यसेवा मॉड्यूल', 'शिक्षण आणि स्टार्टअप'],
    footerUrl: 'केवळ डेमो - अधिकृत सल्ला नाही',
    tagline: 'ग्रामीण भारताचे सक्षमीकरण'
  }
};

const urls = ['https://agri-ai-rosy.vercel.app', 'https://arogya-ai-six.vercel.app', 'https://vidya-ai-five.vercel.app'];
const c = { saf: '#FF6B2B', nav: '#0F2347', grn: '#138808', blu: '#0891B2', org: '#FF6B2B', gld: '#F0A500' };

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'modules', 'how', 'ivr', 'team'];
      let current = 'home';
      for (let s of sections) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 100) current = s;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const b = isDark ? '#0B1120' : '#F7F8FC';
  const cardB = isDark ? '#1E293B' : '#FFFFFF';
  const bdr = isDark ? '#2D3748' : '#E2E8F0';
  const txt = isDark ? '#E2E8F0' : '#0F2347';
  const subT = isDark ? '#94A3B8' : '#475569';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    setActive(id);
  };

  return (
    <div style={{ background: b, color: txt, transition: 'background 0.3s, color 0.3s', minHeight: '100vh', fontFamily: "'Noto Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800;900&family=Noto+Sans:wght@400;600;700&display=swap');
        h1, h2, h3, h4, .baloo { font-family: 'Baloo 2', cursive; margin: 0; }
        p { margin: 0; }
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${b}; }
        ::-webkit-scrollbar-thumb { background: ${c.saf}; border-radius: 4px; }
        .mcard { transition: transform 0.3s, box-shadow 0.3s; }
        .mcard:hover { transform: translateY(-6px); }
        .fadeUp0 { animation: fadeUp 0.6s ease forwards; opacity: 0; transform: translateY(22px); }
        .fadeUp1 { animation: fadeUp 0.6s ease 0.15s forwards; opacity: 0; transform: translateY(22px); }
        .fadeUp2 { animation: fadeUp 0.6s ease 0.3s forwards; opacity: 0; transform: translateY(22px); }
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0px) } }
        @keyframes pulseGlow { 0% { box-shadow: 0 0 0 0 rgba(255, 107, 43, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(255, 107, 43, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 107, 43, 0); } }
      `}</style>

      {/* NAVBAR */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: isDark ? 'rgba(11,17,32,0.95)' : 'rgba(247,248,252,0.95)', borderBottom: `3px solid ${c.saf}`, padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none', backdropFilter: 'blur(10px)', transition: 'all 0.3s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => scrollTo('home')}>
          <div style={{ background: 'linear-gradient(135deg, #FF6B2B, #F0A500)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🇮🇳</div>
          <div>
            <div className="baloo" style={{ fontSize: '22px', color: c.saf, lineHeight: '1.2' }}>Community AI Hub</div>
            <div style={{ fontSize: '11px', color: subT, fontWeight: 600 }}>{t.tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', zIndex: 10 }}>
          {['home', 'modules', 'how', 'ivr', 'team'].map((id) => (
            <button key={id} onClick={() => scrollTo(id)} style={{ background: active === id ? c.saf : 'transparent', color: active === id ? '#FFF' : txt, border: 'none', padding: '8px 16px', borderRadius: '24px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontSize: '14px' }}>
              {t.nav[id]}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ display: 'flex', background: bdr, borderRadius: '20px', padding: '4px' }}>
            {[{ id: 'en', l: 'EN' }, { id: 'hi', l: 'हिं' }, { id: 'mr', l: 'म' }].map(l => (
              <button key={l.id} onClick={() => setLang(l.id)} style={{ background: lang === l.id ? c.saf : 'transparent', color: lang === l.id ? '#FFF' : txt, border: 'none', padding: '4px 12px', borderRadius: '16px', fontWeight: 700, cursor: 'pointer', transition: '0.2s', fontSize: '13px' }}>{l.l}</button>
            ))}
          </div>
          <button onClick={() => setIsDark(!isDark)} style={{ background: cardB, border: `1px solid ${bdr}`, borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '18px', transition: '0.3s' }}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #0F2347 55%, #1A3A6B 100%)', color: '#FFF', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: c.saf, filter: 'blur(150px)', opacity: 0.3, borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', background: c.gld, filter: 'blur(120px)', opacity: 0.2, borderRadius: '50%' }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(255, 107, 43, 0.2)', border: `1px solid ${c.saf}`, color: c.saf, padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, marginBottom: '24px' }}>
              {t.hero.badge}
            </div>
            <h1 style={{ fontSize: '66px', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>{t.hero.title}</h1>
            <div className="baloo" style={{ color: '#93C5FD', fontSize: '19px', marginBottom: '24px' }}>{t.hero.subtitle}</div>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '500px' }}>{t.hero.desc}</p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
              <button className="mcard" onClick={() => scrollTo('modules')} style={{ background: c.saf, color: '#FFF', border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>{t.hero.explore}</button>
              <button className="mcard" onClick={() => scrollTo('how')} style={{ background: 'transparent', color: '#FFF', border: '2px solid #FFF', padding: '16px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>{t.hero.how}</button>
            </div>

            <div style={{ display: 'flex', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
              {[['3', t.hero.stats.modules], ['50+', t.hero.stats.schemes], ['3', t.hero.stats.langs], ['📞', t.hero.stats.ivr]].map((st, i) => (
                <div key={i}>
                  <div className="baloo" style={{ color: c.gld, fontSize: '32px', lineHeight: 1 }}>{st[0]}</div>
                  <div style={{ color: '#94A3B8', fontSize: '13px', fontWeight: 600, marginTop: '4px' }}>{st[1]}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[{ name: t.hero.cards[0], icon: '🌾', col: c.grn, url: urls[0] }, { name: t.hero.cards[1], icon: '🏥', col: c.blu, url: urls[1] }, { name: t.hero.cards[2], icon: '🎓', col: c.saf, url: urls[2] }].map((m, i) => (
              <a href={m.url} target="_blank" rel="noreferrer" key={i} className={`mcard fadeUp${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(10px)', padding: '20px 24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', borderLeft: `4px solid ${m.col}`, textDecoration: 'none', color: '#FFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ fontSize: '28px', background: 'rgba(255,255,255,0.1)', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>{m.icon}</div>
                  <div className="baloo" style={{ fontSize: '24px' }}>{m.name}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: m.col, fontWeight: 700, fontSize: '14px', background: `${m.col}22`, padding: '4px 12px', borderRadius: '20px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: m.col, animation: 'pulseGlow 2s infinite' }}></div> {t.hero.live}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES SECTION */}
      <section id="modules" style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '42px', color: txt }}>{t.modules.title}</h2>
          <p style={{ color: subT, fontSize: '18px', marginTop: '12px' }}>{t.modules.subtitle}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
          {[{ idx: 0, c: c.grn, icon: '🌾', tit: 'Krishi Mitra', aTitle: 'कृषि मित्र', mTitle: 'कृषी मित्र', badg: 'Google Gemini AI' },
          { idx: 1, c: c.blu, icon: '🏥', tit: 'Arogya AI', aTitle: 'आरोग्य एआई', mTitle: 'आरोग्य एआय', badg: 'Google Gemini AI' },
          { idx: 2, c: c.saf, icon: '🎓', tit: 'Vidya AI', aTitle: 'विद्या एआई', mTitle: 'विद्या एआय', badg: 'Anthropic Claude AI' }].map((m, i) => (
            <div key={i} className="mcard" style={{ background: cardB, borderRadius: '16px', padding: '32px 24px', border: `1px solid ${bdr}`, borderTop: `4px solid ${m.c}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '32px' }}>
                <div style={{ background: `${m.c}1A`, width: '80px', height: '80px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '20px', transform: 'rotate(-5deg)' }}>{m.icon}</div>
                <div className="baloo" style={{ fontSize: '28px', color: txt, marginBottom: '8px' }}>{lang === 'hi' ? m.aTitle : lang === 'mr' ? m.mTitle : m.tit}</div>
                <div style={{ color: m.c, fontWeight: 700, fontSize: '15px' }}>{t.cards[i].sub}</div>
              </div>

              <div style={{ flex: 1 }}>
                {t.cards[i].features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: `${m.c}22`, color: m.c, width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', flexShrink: 0, fontWeight: 900 }}>✓</div>
                    <div style={{ fontSize: '14px', color: txt, lineHeight: 1.4, fontWeight: 500 }}>{f}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9', border: `1px solid ${bdr}`, padding: '10px', borderRadius: '8px', fontSize: '12px', textAlign: 'center', color: subT, fontWeight: 600 }}>
                  Powered by: {m.badg}
                </div>
                <a href={urls[i]} target="_blank" rel="noreferrer" style={{ display: 'block', textDecoration: 'none', textAlign: 'center', background: m.c, color: '#FFF', padding: '16px', borderRadius: '12px', fontWeight: 700, fontSize: '16px', transition: 'filter 0.3s' }} onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.1)'} onMouseOut={e => e.currentTarget.style.filter = 'brightness(1)'}>
                  {t.cards[i].btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how" style={{ background: isDark ? 'rgba(255,255,255,0.02)' : '#FFF', padding: '100px 24px', borderTop: `1px solid ${bdr}`, borderBottom: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '42px', color: txt }}>{t.how.title}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', gap: '24px', alignItems: 'center' }}>
            {t.how.steps.map((s, i) => (
              <React.Fragment key={i}>
                <div className="mcard" style={{ background: cardB, padding: '32px', borderRadius: '16px', border: `1px solid ${bdr}`, textAlign: 'center', height: '100%' }}>
                  <div style={{ fontSize: '48px', marginBottom: '24px' }}>{s.icon || ['👤', '🗣️', '✨'][i]}</div>
                  <div style={{ color: c.saf, fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '8px' }}>{s.title}</div>
                  <div className="baloo" style={{ fontSize: '22px', color: txt, marginBottom: '12px' }}>{s.name}</div>
                  <p style={{ color: subT, fontSize: '15px', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
                {i < 2 && <div style={{ color: c.saf, fontSize: '22px', fontWeight: 900 }}>→</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* IVR & TECH SECTION */}
      <section id="ivr" style={{ padding: '100px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #0F2347, #1A3A6B)', borderRadius: '24px', padding: '64px', display: 'flex', alignItems: 'center', gap: '64px', color: '#FFF', position: 'relative', overflow: 'hidden', marginBottom: '80px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, fontSize: '300px', lineHeight: 1, transform: 'translate(20%, -20%)' }}>📞</div>

          <div style={{ fontSize: '80px', animation: 'float 4s ease-in-out infinite' }}>📞</div>

          <div style={{ flex: 1, zIndex: 1 }}>
            <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>{t.ivr.title}</h2>
            <p style={{ fontSize: '18px', color: '#93C5FD', marginBottom: '32px', lineHeight: 1.6, maxWidth: '600px' }}>{t.ivr.desc}</p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {['🌾 Agriculture', '🏥 Healthcare', '🎓 Education', '📋 Govt Schemes'].map((p, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>{p}</div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ background: c.saf, color: '#FFF', padding: '12px 24px', borderRadius: '12px', fontSize: '24px', fontWeight: 800, letterSpacing: '1px' }}>1800-XXX-XXXX <span style={{ fontSize: '14px', fontWeight: 600, opacity: 0.9, marginLeft: '8px' }}>(Demo)</span></div>
              <div style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 600 }}>Powered by Retell AI + Twilio</div>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '32px', textAlign: 'center', color: txt, marginBottom: '40px' }}>{t.tech}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {['🤖 Anthropic Claude', '♊ Google Gemini', '📞 Retell AI', '💬 Twilio', '⚡ React + Vite', '▲ Vercel', '🗄️ Supabase', '📚 Swayam/NPTEL'].map((tech, i) => (
              <div key={i} className="mcard" style={{ background: cardB, border: `1px solid ${bdr}`, padding: '16px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: 600, color: txt }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" style={{ background: isDark ? 'rgba(255,255,255,0.02)' : '#FFF', padding: '100px 24px', borderTop: `1px solid ${bdr}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', textAlign: 'center', color: txt, marginBottom: '64px' }}>{t.teamTitle}</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '22px' }}>
            {[
              { mod: t.roles[0], av: '👨‍🌾', bdg: 'Krishi Mitra', col: c.grn },
              { mod: t.roles[1], av: '👩‍⚕️', bdg: 'Arogya AI', col: c.blu },
              { mod: t.roles[2], av: '👨‍🎓', bdg: 'Vidya AI', col: c.saf }
            ].map((p, i) => (
              <div key={i} className="mcard" style={{ background: cardB, border: `1px solid ${bdr}`, borderTop: `4px solid ${p.col}`, borderRadius: '16px', padding: '32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80px', background: `linear-gradient(to bottom, ${p.col}11, transparent)` }}></div>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: `linear-gradient(135deg, ${p.col}, ${p.col}88)`, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', position: 'relative', zIndex: 1, border: `4px solid ${cardB}`, boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>{p.av}</div>
                <div style={{ color: txt, fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>{p.mod}</div>
                <div style={{ display: 'inline-block', background: `${p.col}1A`, color: p.col, padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 800 }}>{p.bdg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0B1120', borderTop: `3px solid ${c.saf}`, padding: '64px 24px 32px', color: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="baloo" style={{ fontSize: '32px', color: c.saf, marginBottom: '8px' }}>🇮🇳 Community AI Hub</div>
          <div style={{ color: '#94A3B8', fontSize: '16px', marginBottom: '32px' }}>{t.tagline}</div>

          <div style={{ display: 'flex', gap: '32px', marginBottom: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={urls[0]} target="_blank" rel="noreferrer" style={{ color: c.grn, textDecoration: 'none', fontWeight: 700 }}>Krishi Mitra →</a>
            <a href={urls[1]} target="_blank" rel="noreferrer" style={{ color: c.blu, textDecoration: 'none', fontWeight: 700 }}>Arogya AI →</a>
            <a href={urls[2]} target="_blank" rel="noreferrer" style={{ color: c.saf, textDecoration: 'none', fontWeight: 700 }}>Vidya AI →</a>
          </div>

          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #EF4444', color: '#FCA5A5', padding: '8px 24px', borderRadius: '24px', fontSize: '13px', fontWeight: 600, letterSpacing: '1px' }}>
            ⚠️ {t.footerUrl}
          </div>
        </div>
      </footer>
    </div>
  );
}
