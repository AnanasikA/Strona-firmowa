import React from 'react';

const StyledHeading = ({ children }) => (
  <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-teal-400 uppercase tracking-widest text-center">
    {children}
  </h2>
);

export default StyledHeading;
