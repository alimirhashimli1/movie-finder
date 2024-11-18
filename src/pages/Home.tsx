import React, { useState, useEffect } from 'react';
import { movies } from "../movies";
import { Movie } from '../types';


const Home : React.FC  = () => {
    const [selectedGenre, setSelectedGenre] = useState<string>('');
    const [selectedDecade, setSelectedDecade] = useState<string>('');
    const [selectedRating, setSelectedRating] = useState<string>('');
    const [filteredMovie, setFilteredMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fetchedMovies, setFetchedMovies] = useState<FetchedMovie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState<string>('');
    const [noMoviesFound, setNoMoviesFound] = useState(false);


    interface FetchedMovie {
        title: string;
        genre: number[];
        imdbRating: number;
        releaseYear: string;
        url: string;
        description: string;
        id: number;
      }

      
  const genres = ['Drama', 'Action', 'Sci-Fi', 'Crime', 'Romance', 'Thriller', 'Adventure', 'History', 'War']; 
  const decades = ['1980s', '1990s', '2000s', '2010s'];
  const ratings = ['9+', '8+', '7+', '6+', '5+'];

  




  const filterMovies = () => {
    let filtered: Movie[] = movies as Movie[];

    if (selectedGenre) {
      filtered = filtered.filter(movie => movie.genre.includes(selectedGenre));
    }
    if (selectedDecade) {
      const decadeStart = parseInt(selectedDecade, 10);
      filtered = filtered.filter(
        movie => movie.releaseYear >= decadeStart && movie.releaseYear < decadeStart + 10
      );
    }
    if (selectedRating) {
      const ratingThreshold = parseFloat(selectedRating);
      filtered = filtered.filter(movie => movie.imdbRating >= ratingThreshold);
    }

    if (filtered.length === 0) {
      setNoMoviesFound(true);
      setFilteredMovie(null);
    } else {
      setNoMoviesFound(false);
      const randomMovie = filtered[Math.floor(Math.random() * filtered.length)];
      setFilteredMovie(randomMovie);
      setIsModalOpen(true);
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setTrailerUrl('');
  };

  

  const fetchMovieTrailer = async (movieId: number) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`);
      const data = await response.json();
      const trailer = data.results.find((video: { type: string }) => video.type === 'Trailer');
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        setIsModalOpen(true); // Open the modal when the trailer is ready
      }
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
  };

  
  const fetchLatestMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      const moviesData: FetchedMovie[] = data.results.map((movie: { 
        title: string, 
        genre_ids: number[], 
        vote_average: number, 
        release_date: string, 
        poster_path: string, 
        overview: string,
        id: number
      }) => ({
        title: movie.title,
        genre: movie.genre_ids,
        imdbRating: movie.vote_average,
        releaseYear: movie.release_date.split("-")[0],  // Extract the year from the release_date
        url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        description: movie.overview || 'No description available', // Fallback if there's no overview
        id: movie.id
      }));
      setFetchedMovies(moviesData);
    } catch (error) {
      console.error("Failed to fetch latest movies:", error);
    }
  };
  

  useEffect(() => {
    fetchLatestMovies();
  }, []);


  return (
    <div>
       
        
        <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold my-10 text-yellow-500 text-center">Find a Movie</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10 w-full max-w-lg">
          <div>
            <h2 className="text-xl mb-4 text-center">Genre</h2>
            <select
              className="w-full p-2 bg-gray-800 text-white rounded border border-yellow-500"
              onChange={e => setSelectedGenre(e.target.value)}
              value={selectedGenre}
            >
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <h2 className="text-xl mb-4 text-center">Decade</h2>
            <select
              className="w-full p-2 bg-gray-800 text-white rounded border border-yellow-500"
              onChange={e => setSelectedDecade(e.target.value)}
              value={selectedDecade}
            >
              <option value="">All Decades</option>
              {decades.map(decade => (
                <option key={decade} value={decade.slice(0, 4)}>{decade}</option>
              ))}
            </select>
          </div>

          <div>
            <h2 className="text-xl mb-4 text-center">IMDb Rating</h2>
            <select
              className="w-full p-2 bg-gray-800 text-white rounded border border-yellow-500"
              onChange={e => setSelectedRating(e.target.value)}
              value={selectedRating}
            >
              <option value="">All Ratings</option>
              {ratings.map(rating => (
                <option key={rating} value={rating.slice(0, -1)}>{rating}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={filterMovies}
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Find Me a Movie
        </button>
      </div>
      {noMoviesFound && (
        <div className="text-center text-2xl text-red-500 mt-6">
          There is no movie with the selected criteria.
        </div>
      )}

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
            <p className="mb-2"><strong>Genres:</strong> {filteredMovie.genre.join(', ')}</p>
            <p className="mb-2"><strong>IMDb Rating:</strong> {filteredMovie.imdbRating}</p>
            <p className="mb-4"><strong>Release Year:</strong> {filteredMovie.releaseYear}</p>
            <div className="flex justify-center">
              <img
                src={filteredMovie.url}
                alt={filteredMovie.title}
                className="w-full max-h-96 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
         {/* Latest Movies List */}
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-6 text-yellow-500 text-center">Hottest Movies</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {fetchedMovies.map((movie, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl p-4 text-center transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src={movie.url}
                alt={movie.title}
                className="w-full h-96 object-contain rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:opacity-80"
              />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">{movie.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{movie.releaseYear}</p>
              <p><strong>IMDb Rating:</strong> {movie.imdbRating.toFixed(1)}</p>
              <p className="mt-2 text-gray-300 text-sm">{movie.description}</p>

              {/* Play Button */}
              <button
                onClick={() => fetchMovieTrailer(movie.id)}
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105"
              >
                Play Trailer
              </button>
            </div>
          ))}
        </div>
        
      </div>
            {/* Trailer Modal */}
            {isModalOpen && trailerUrl && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg relative max-w-4xl w-full text-center">
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">Movie Trailer</h2>
        <iframe
          width="100%"
          height="500"  // Increased the height of the iframe
          src={trailerUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Movie Trailer"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
      )}

         </div>
  )
}

export default Home