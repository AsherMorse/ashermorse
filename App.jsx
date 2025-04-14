import React from 'react';

const bio = `
I am an efficient and people-oriented software developer who values clean, consistent code and collaborative teamwork. Driven by a passion for learning, I strive to deliver high-quality solutions while continuously expanding my skills and helping others grow.
`;

const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ashermorse',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ashermorse',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:contact@ashermorse.org',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.7l-8 5.3-8-5.3V6l8 5.3L20 6v2.7z"/>
      </svg>
    ),
  },
];

const content = {
  experience: [
    {
      title: 'Software Engineer',
      company: 'Trilogy',
      period: 'Mar 2025 - Present',
      location: 'Austin, TX (Hybrid)',
    },
    {
      title: 'Software Developer',
      company: 'Gauntlet AI',
      period: 'Jan 2025 - Mar 2025',
      location: 'Austin, TX (On-site)',
    },
  ],
  education: [
    {
      school: 'Self-taught',
      degree: 'Computer Software Engineering',
    },
    {
      school: 'Lake Washington Institute of Technology',
      degree: 'Running Start',
      period: 'Sep 2023 - Jun 2024',
    },
  ],
  skills: ['Swift', 'Collaborative Problem Solving', 'Amazon Web Services (AWS)', 'Python', 'Artificial Intelligence (AI)'],
  certifications: ['AI for Developer Productivity — Gauntlet AI (Issued Mar 2025)'],
};

const theme = (isDark) => ({
  colors: {
    bg: isDark ? 'linear-gradient(145deg, #1a1b1e 0%, #1e2124 100%)' : 'linear-gradient(145deg, #f0f4f8 0%, #f8fafc 100%)',
    card: isDark ? 'rgba(32,33,36,0.8)' : 'rgba(255,255,255,0.8)',
    text: isDark ? '#e1e1e1' : '#333333',
    textSecondary: isDark ? '#e1e1e1' : '#555555',
    divider: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    shadow: isDark ? '0 8px 32px rgba(0,0,0,0.2)' : '0 8px 32px rgba(0,0,0,0.1)',
    nameGradient: isDark 
      ? 'linear-gradient(90deg, #fff 0%, #e1e1e1 100%)'
      : 'linear-gradient(90deg, #333 0%, #555 100%)',
  },
});

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflow: 'hidden',
  },
  card: (colors) => ({
    background: colors.card,
    backdropFilter: 'blur(12px)',
    maxWidth: 520,
    width: '100%',
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto',
    borderRadius: 24,
    boxShadow: colors.shadow,
    padding: '30px 40px',
    fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif',
  }),
  name: (colors) => ({
    margin: 0,
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: -0.5,
    background: colors.nameGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'block',
  }),
  title: (colors) => ({
    fontSize: 20,
    color: colors.textSecondary,
    fontWeight: 500,
    marginTop: 8,
    marginBottom: 24,
    opacity: 0.9,
  }),
  sectionTitle: (colors) => ({
    fontSize: 15,
    fontWeight: 600,
    margin: '0 0 12px',
    color: colors.text,
    opacity: 0.9,
  }),
  divider: (colors) => ({
    width: '100%',
    height: 1,
    background: colors.divider,
    margin: '24px 0',
  }),
  socialLink: (colors) => ({
    color: colors.text,
    opacity: 0.6,
    transition: 'opacity 0.2s, transform 0.2s',
    cursor: 'pointer',
  }),
  socialLinkHovered: {
    opacity: 0.9,
    transform: 'translateY(-2px)',
  },
};

const Section = ({ title, children, colors }) => {
  return (
    <>
      <div style={styles.divider(colors)} />
      <section style={{ marginBottom: 24 }}>
        <h2 style={styles.sectionTitle(colors)}>{title}</h2>
        {children}
      </section>
    </>
  );
};

const SocialLink = ({ url, icon, name, colors }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      style={{
        ...styles.socialLink(colors),
        ...(isHovered ? styles.socialLinkHovered : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </a>
  );
};

export default function App() {
  const [isDark, setIsDark] = React.useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setIsDark(e.matches);
      document.body.style.background = theme(e.matches).colors.bg;
      document.body.style.color = theme(e.matches).colors.text;
      document.body.style.margin = '0';
      document.body.style.overflow = 'hidden';
    };
    
    handleChange(mediaQuery);
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  const colors = theme(isDark).colors;
  
  return (
    <div style={styles.container}>
      <main style={styles.card(colors)}>
        <h1 style={styles.name(colors)}>Asher Morse</h1>
        <div style={styles.title(colors)}>Software Developer</div>
        
        <section style={{ marginBottom: 32 }}>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: colors.textSecondary, opacity: 0.85 }}>
            {bio}
          </p>
        </section>

        <Section title="Experience" colors={colors}>
          {content.experience.map((job, i) => (
            <div key={job.company} style={{ marginBottom: i === content.experience.length - 1 ? 0 : 16 }}>
              <div style={{ fontWeight: 500 }}>{job.title} <span style={{ opacity: 0.7 }}>@ {job.company}</span></div>
              <div style={{ fontSize: 14, opacity: 0.6 }}>{job.period} · {job.location}</div>
            </div>
          ))}
        </Section>

        <Section title="Education" colors={colors}>
          {content.education.map((edu, i) => (
            <div key={edu.school} style={{ marginBottom: i === content.education.length - 1 ? 0 : 12 }}>
              <div style={{ fontWeight: 500 }}>{edu.school} <span style={{ opacity: 0.7 }}>— {edu.degree}</span></div>
              {edu.period && <div style={{ fontSize: 14, opacity: 0.6 }}>{edu.period}</div>}
            </div>
          ))}
        </Section>

        <Section title="Skills" colors={colors}>
          <div style={{ opacity: 0.8 }}>{content.skills.join(', ')}</div>
        </Section>

        <Section title="Certifications" colors={colors}>
          <div style={{ opacity: 0.8 }}>{content.certifications}</div>
        </Section>

        <div style={styles.divider(colors)} />
        <section style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 0 }}>
          {socials.map(s => (
            <SocialLink
              key={s.name}
              url={s.url}
              icon={s.icon}
              name={s.name}
              colors={colors}
            />
          ))}
        </section>
      </main>
    </div>
  );
} 