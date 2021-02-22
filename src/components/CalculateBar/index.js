import React from 'react';

export default function CalculateBar(props) {
  const { likes, dislikes } = props;

  const likesP = (likes / (likes + dislikes)) * 100;
  return (
    <div style={{ width: '100%', height: '10px', backgroundColor: 'red' }}>
      <div
        style={{
          height: '10px',
          backgroundColor: 'green',
          width: likesP.toFixed(2) + '%',
        }}
      ></div>
    </div>
  );
}
