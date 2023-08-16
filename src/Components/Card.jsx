import React from 'react';

const Card = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        background: '#D3D3D3',
        padding: '16px',
        borderRadius: '4px',
        textAlign: 'left',
        width: '250px'
      }}
    >
      {children}
    </div>
  );
};

export default Card;
