import React from 'react';

const SectionContainer = ({ children }) => {
  return (
    <div className="section-container">
      <div className="section-content">{children}</div>
    </div>
  );
};

export default SectionContainer;
