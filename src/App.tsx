// App.tsx
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import Genres from './pages/Genres';
import Decades from './pages/Decades';
import Ratings from './pages/Ratings';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Movie } from './types';
import { movies } from "./movies";

const App: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [filteredMovie, setFilteredMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearchText(text);
    if (text) {
      const results = movies
        .filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()))
        .slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectMovie = (movie: Movie) => {
    setFilteredMovie(movie);
    setIsModalOpen(true);
    setSearchText('');
    setSearchResults([]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <Router>
        <Navbar
          searchText={searchText}
          onSearchChange={handleSearchChange}
          searchResults={searchResults}
          onSelectMovie={handleSelectMovie}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/decades" element={<Decades />} />
          <Route path="/ratings" element={<Ratings />} />
        </Routes>

        {/* Modal for displaying selected movie */}
        {isModalOpen && filteredMovie && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg relative max-w-lg w-full text-center">
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4 text-yellow-500">{filteredMovie.title}</h2>
              <div className="mb-4">
                <img
                  src={filteredMovie.url}
                  alt={filteredMovie.title}
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
              </div>
              <p className="text-xl text-gray-300">Release Year: {filteredMovie.releaseYear}</p>
              <p className="text-xl text-gray-300">IMDb Rating: {filteredMovie.imdbRating}</p>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
};

export default App;
