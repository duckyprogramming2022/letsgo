import React from 'react';

const customHeader = ({displayName}) => {
  return (
    <div className="custom-header">
      <span>{displayName}</span>
      <button>Expand me</button>
    </div>
  );
};

export default customHeader;