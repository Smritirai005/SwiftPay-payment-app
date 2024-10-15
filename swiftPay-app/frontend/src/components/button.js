import React from 'react';

function Button({ children, onClick, color = "bg-blue-400" }) {
  return (
    <button
      className={`${color} text-white py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
