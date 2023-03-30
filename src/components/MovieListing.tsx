import { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GET_MOVIE_LIST } from "../lib/network/rest/movie";
import MovieItems from "./MovieItems";

const MovieListing: React.FC = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    try {
      GET_MOVIE_LIST().then((data) => {
        if (data.code) {
          setMovieList(data.data);
        } else {
          toast.error(data.msg);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="mt-8" data-testid="movie-listing">
      {movieList.map((movie, index) => (
        <MovieItems key={index} movie={movie} />
      ))}
    </div>
  );
};

export default memo(MovieListing);
