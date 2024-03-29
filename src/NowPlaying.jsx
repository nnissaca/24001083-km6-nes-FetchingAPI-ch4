import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_KEY = "52b2a50250de0b7306b76a36c51029e8";

export default function nowPlaying() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const fetchNowPlayingMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
        { headers: { accept: "application/json" } }
      );
      setMovies(response.data.results);
    } catch (err) {
      console.log("error fetching data: ", err);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovie();
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-between mt-3 w-screen px-5">
          <p className="flex items-center text-5xl text-red-600">
            <Link to="/">
              <strong>Movielist</strong>
            </Link>
          </p>

          <div className="flex items-center">
            <ul className="flex justify-center align-center text-white">
              <Link
                to="/nowPlaying"
                className="mx-5 hover:text-red-600 focus:text-red-600"
              >
                Now Playing
              </Link>
              <Link
                to="/genre"
                className="mx-5 hover:text-red-600 focus:text-red-600"
              >
                Genre
              </Link>
              <Link
                to="/favMovie"
                className="mx-5 hover:text-red-600 focus:text-red-600"
              >
                Favorite Movie
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-center my-3 font-bold text-white text-3xl">
        Now Playing Movie
      </h1>
      <div className="grid grid-cols-4 gap-3 mb-8 m-2 mx-auto p-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="mt-2 rounded-lg flex flex-col max-w[350px] max-sm:min-w-[250px] items-center shadow-[0_0_2px_1px_rgb(0,0,0,0.3)] hover:shadow-xl hover:shadow-red-600 hover:scale-105"
            style={{ height: "100%" }}
          >
            <div
              className="bg-cover min-h-[410px] w-full rounded-md flex flex-col items-center justify-center relative"
              onClick={() => {
                navigate("/detailMovie", { state: { id: movie.id } });
              }}
            >
              <h2 className="font-bold flex absolute left-0 top-4 bg-white p-2 rounded-e-md">
                ⭐<div className="ml-1">{movie?.vote_average.toFixed(1)}</div>
              </h2>
              <img
                className="absolute -z-10 max-h-[420px] object-cover w-full top-0 left-0 filter blur-[4px]"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="max-w-56 rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
