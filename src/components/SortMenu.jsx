import React from 'react';
import '../styles/SortMenu.css';

function SortMenu({ sortOption, setSortOption }) {
  const sortOptions = [
    'Price Low to High',
    'Price High to Low',
    'Size Small to Large',
    'Size Large to Small',
  ];

  return (
    <div className="sort-menu">
      <ul>
        {sortOptions.map((option) => (
          <li key={option}>
            <button
              className={`sort-button ${sortOption === option ? 'active' : ''}`}
              onClick={() => setSortOption(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortMenu;
