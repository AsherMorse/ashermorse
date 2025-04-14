import React, { useState, useEffect } from 'react';
import { contentData } from './content.jsx';
import { Section } from './components/Section';
import { SocialLink } from './components/SocialLink';
import styles from './App.module.css';

const themeVariables = {
  light: {
    '--bg': 'var(--light-bg)',
    '--card-bg': 'var(--light-card-bg)',
    '--text': 'var(--light-text)',
    '--text-secondary': 'var(--light-text-secondary)',
    '--divider': 'var(--light-divider)',
    '--shadow': 'var(--light-shadow)',
    '--name-gradient': 'var(--light-name-gradient)',
  },
  dark: {
    '--bg': 'var(--dark-bg)',
    '--card-bg': 'var(--dark-card-bg)',
    '--text': 'var(--dark-text)',
    '--text-secondary': 'var(--dark-text-secondary)',
    '--divider': 'var(--dark-divider)',
    '--shadow': 'var(--dark-shadow)',
    '--name-gradient': 'var(--dark-name-gradient)',
  },
};

function applyTheme(isDark) {
  const theme = isDark ? themeVariables.dark : themeVariables.light;
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export default function App() {
  const [isDark, setIsDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const newIsDark = e.matches;
      setIsDark(newIsDark);
      applyTheme(newIsDark);
    };
    
    applyTheme(isDark);
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isDark]);
  
  return (
    <div className={styles.container}>
      <main className={styles.card}>
        <h1 className={styles.name}>Asher Morse</h1>
        <div className={styles.jobTitle}>Software Developer</div>
        
        <section className={styles.bioSection}>
          <p className={styles.bioText}>
            {contentData.bio}
          </p>
        </section>

        <Section 
          title="Experience" 
          dividerClassName={styles.divider}
          sectionClassName={styles.section}
          titleClassName={styles.sectionTitle}
        >
          {contentData.experience.map((job) => (
            <div key={job.company} className={styles.experienceEntry}>
              <div className={styles.experienceTitle}>
                {job.title} <span className={styles.experienceCompany}>@ {job.company}</span>
              </div>
              <div className={styles.experienceDetails}>{job.period} · {job.location}</div>
            </div>
          ))}
        </Section>

        <Section 
          title="Education" 
          dividerClassName={styles.divider}
          sectionClassName={styles.section}
          titleClassName={styles.sectionTitle}
        >
          {contentData.education.map((edu) => (
            <div key={edu.school} className={styles.educationEntry}>
              <div className={styles.educationSchool}>
                {edu.school} <span className={styles.educationDegree}>— {edu.degree}</span>
              </div>
              {edu.period && <div className={styles.educationPeriod}>{edu.period}</div>}
            </div>
          ))}
        </Section>

        <Section 
          title="Skills" 
          dividerClassName={styles.divider}
          sectionClassName={styles.section}
          titleClassName={styles.sectionTitle}
        >
          <div className={styles.skillsText}>{contentData.skills.join(', ')}</div>
        </Section>

        <Section 
          title="Certifications" 
          dividerClassName={styles.divider}
          sectionClassName={styles.section}
          titleClassName={styles.sectionTitle}
        >
          <div className={styles.certificationsText}>{contentData.certifications.join(', ')}</div>
        </Section>

        <div className={styles.divider} />
        <section className={styles.socialsSection}>
          {contentData.socials.map(s => (
            <SocialLink
              key={s.name}
              url={s.url}
              icon={s.icon}
              name={s.name}
              linkClassName={styles.socialLink}
            />
          ))}
        </section>
      </main>
    </div>
  );
} 