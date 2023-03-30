import { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GET_MOVIE_LIST } from "../lib/network/rest/movie";
import MovieItems from "./MovieItems";

const MovieListing: React.FC = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    try {
      GET_MOVIE_LIST().then((data) => {
        console.log("data", data);
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
  const videoUrl = "https://www.youtube.com/watch?v=uFOHW1cPhp0";

  return (
    <div className="mt-8">
      {movieList.map((movie, index) => (
        <MovieItems key={index} movie={movie} />
      ))}
    </div>
  );
};

export default memo(MovieListing);
