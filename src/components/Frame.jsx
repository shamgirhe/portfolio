import React from 'react';
import './Frame.css'; // Import CSS file for styling

const Frame = ({ logo}) => {
  return (
    <div className="frame">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Frame;
