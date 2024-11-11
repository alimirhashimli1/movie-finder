// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/popcornpick.png";
import { Movie } from '../types';

interface NavbarProps {
  searchText: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchText, onSearchChange, searchResults, onSelectMovie }) => {
  return (
    <nav className="bg-yellow-600 w-full py-4 px-8 shadow-lg flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-full h-24 mr-4" /> 
        </Link>
        <Link to="/genres" className="text-black hover:text-white font-semibold">Genres</Link>
        <Link to="/decades" className="text-black hover:text-white font-semibold">Decades</Link>
        <Link to="/ratings" className="text-black hover:text-white font-semibold">Ratings</Link>
      </div>
      <div className="relative">
        <input
          type="text"
          value={searchText}
          onChange={onSearchChange}
          placeholder="Search movies..."
          className="p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        {searchText && searchResults.length > 0 && (
          <ul className="absolute left-0 mt-2 w-full bg-gray-800 text-white rounded shadow-lg max-h-48 overflow-y-auto">
            {searchResults.map((movie, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => onSelectMovie(movie)}
              >
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
