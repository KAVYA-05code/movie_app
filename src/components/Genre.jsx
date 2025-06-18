import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchListContext';
export const Genre = ({ selectedGenre, onGenreChange }) => {
  const { genreList } = useContext(WatchlistContext);

  return (
    <select
      value={selectedGenre}
      onChange={(e) => onGenreChange(e.target.value)} 
      className='p-2 mb-4 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white border rounded'
    >
      <option value="">All Genres</option>
      {genreList.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};
export default Genre