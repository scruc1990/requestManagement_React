import React from 'react';

const DeleteButton = ({ click, id }) => {
  return (
    <div
      className="relative group cursor-pointer inline-flex items-center justify-center"
      onClick={ () => click(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-red-500 group-hover:text-red-700 transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9 3h6a2 2 0 012 2h4v2H3V5h4a2 2 0 012-2zm-3 6v11a2 2 0 002 2h8a2 2 0 002-2V9H6zm2 2h2v8H8v-8zm6 0v8h-2v-8h2z" />
      </svg>

      <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Eliminar
      </span>
    </div>
  );
};

export default DeleteButton;
