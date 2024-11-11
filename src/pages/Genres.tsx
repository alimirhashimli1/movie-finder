import React from 'react';
import { movies } from "../movies";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const genres = ['Drama', 'Action', 'Sci-Fi', 'Crime', 'Romance', 'Thriller', 'Adventure', 'History', 'War'];

const Genres: React.FC = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-16">Movies by Genre</h1>
      {genres.map((genre) => {
        const moviesByGenre = movies.filter(movie => movie.genre.includes(genre));

        return (
          <div key={genre} className="mb-16">
            <h2 className="text-5xl font-semibold text-yellow-400 mb-10 text-center">{genre}</h2>
            {moviesByGenre.length > 0 ? (
              <Swiper
                effect={"coverflow"}
                modules={[EffectCoverflow, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 2,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="flex"
              >
                {moviesByGenre.map((movie, index) => (
                  <SwiperSlide key={index} className="flex-shrink-0">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center max-w-sm mx-auto">
                      <img
                        src={movie.url}
                        alt={movie.title}
                        className="w-full h-80 object-cover rounded-lg mb-6"
                      />
                      <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{movie.title}</h3>
                      <p className="text-gray-400">IMDb Rating: {movie.imdbRating}</p>
                      <p className="text-gray-400">Release Year: {movie.releaseYear}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-gray-400 text-center">No movies available in this genre.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
