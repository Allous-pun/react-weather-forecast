import React from 'react';

const cities = [
  {
    id: 2,
    title: 'Rosario'
  },
  {
    id: 3,
    title: 'Dodoma'
  },
  {
    id: 5,
    title: 'Madrid'
  },
  {
    id: 5,
    title: 'Toronto'
  }
];

const TopButton = ({ setQuery }) => {
  return (
    <div className='flex items-center justify-between my-6'>
      {cities.map((city) => (
        <button
          onClick={() => setQuery({ q: city.title })}
          key={city.id}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
          style={{ margin: '0.3rem' }} // Add margin here
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
