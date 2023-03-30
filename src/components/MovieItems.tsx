import { Tooltip } from "@mui/material";
import { memo, useState } from "react";
import { isMobile } from "react-device-detect";
import { useGetMovieInfo } from "../hooks/useGetMovieInfo";
import { getVideoEmbedSrc } from "../utils/getVideoEmbedSrc";
import { isTextClamped } from "../utils/isTextClamped";

type Props = {
  movie: {
    createdBy: string;
    createdDate: string;
    url: string;
    _id: string;
  };
};

const MovieItem: React.FC<Props> = ({ movie }: Props) => {
  const { fetchVideoData } = useGetMovieInfo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  fetchVideoData(movie.url)
    .then((snippet) => {
      setTitle(snippet.title);
      setDescription(snippet.description);
    })
    .catch((error) => console.error(error));
  return (
    <div className="md:flex justify-center md:mx-[300px] my-16 md:my-4">
      <div className="md:basis-[375px] md:flex-shrink-0 mb-4">
        <div className="video-container w-full">
          <iframe
            className="border-1 border-solid border-black"
            src={getVideoEmbedSrc(movie.url)}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {title && (
        <div className="md:ml-8">
          {!isMobile ? (
            <Tooltip title={title}>
              <div className="line-clamp-2 font-bold">{title}</div>
            </Tooltip>
          ) : (
            <div className="font-bold">{title}</div>
          )}

          <div className="text-sm text-gray-600">
            Share by : {movie.createdBy}
          </div>
          <div className="text-sm text-gray-600">Description:</div>

          {!isMobile ? (
            <Tooltip title={description}>
              <div className="line-clamp-6 text-sm text-gray-600">
                {description}
              </div>
            </Tooltip>
          ) : (
            <div className="text-sm text-gray-600">{description}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(MovieItem);
