import React from 'react';

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-200 ${
        hover ? 'hover:shadow-xl hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;