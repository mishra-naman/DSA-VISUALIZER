import React from 'react';

const HashElement = ({ item, isHighlighted }) => {
  const [key, value] = item;

  return (
    <div className={`hash-item ${isHighlighted ? 'highlight' : ''}`}>
      <div>Key: {key}</div>
      <div>Value: {value}</div>
    </div>
  );
};

export default HashElement;
