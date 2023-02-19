import React from 'react';

const customerHeader = ({columnApi, displayName}) => {

  const handleClick = (event, name) => {
      const bool = columnApi.getColumn(name).visible
      columnApi.setColumnVisible(name, !bool);
      bool ? event.textContent = 'Expand me' : event.textContent = 'Reduce me';
  }

  return (
    <div className="custom-header">
      <span>{displayName}</span>
      <button onClick={(e)=>handleClick(e.target, 'customerGroup')}>Click me</button>
    </div>
  );
};

export default customerHeader;