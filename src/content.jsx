import React from 'react';

export const contentData = {
  bio: `I am an efficient and people-oriented software developer who values clean, consistent code and collaborative teamwork.`,
  socials: [
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
      url: 'mailto:contact@ashermorse.dev',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.7l-8 5.3-8-5.3V6l8 5.3L20 6v2.7z"/>
        </svg>
      ),
    },
  ],
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
  skills: ['JavaScript', 'TypeScript', 'Python', 'Swift', 'React.js', 'Express.js', 'PostgreSQL', 'AWS', 'MCP'],
  certifications: ['AI for Developer Productivity — Gauntlet AI (Issued Mar 2025)'],
}; 