import React from 'react';

export const SocialLink = ({ url, icon, name, linkClassName }) => {
  
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className={linkClassName}
    >
      {icon}
    </a>
  );
}; 