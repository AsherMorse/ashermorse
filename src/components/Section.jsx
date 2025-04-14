import React from 'react';

export const Section = ({ title, children, dividerClassName, sectionClassName, titleClassName }) => {
  return (
    <>
      <div className={dividerClassName} />
      <section className={sectionClassName}>
        <h2 className={titleClassName}>{title}</h2>
        {children}
      </section>
    </>
  );
}; 