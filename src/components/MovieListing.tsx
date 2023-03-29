import { memo } from "react";
import MovieItems from "./MovieItems";

const MovieListing: React.FC = () => {
  const videoUrl = "https://www.youtube.com/watch?v=uFOHW1cPhp0";

  return (
    <div className="mt-8">
      <MovieItems src={videoUrl} />
      <MovieItems src={videoUrl} />
      <MovieItems src={videoUrl} />
      <MovieItems src={videoUrl} />
      <MovieItems src={videoUrl} />
      <MovieItems src={videoUrl} />
      <MovieItems src={videoUrl} />
    </div>
  );
};

export default memo(MovieListing);
