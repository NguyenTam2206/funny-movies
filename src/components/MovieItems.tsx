import { Tooltip } from "@mui/material";
import { memo, useState } from "react";
import { useGetMovieInfo } from "../hooks/useGetMovieInfo";
import { getVideoEmbedSrc } from "../utils/getVideoEmbedSrc";
import { isTextClamped } from "../utils/isTextClamped";

type Props = {
  src: string;
};

const MovieItem: React.FC<Props> = ({ src }: Props) => {
  const { fetchVideoData } = useGetMovieInfo();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  fetchVideoData(src)
    .then((snippet) => {
      setTitle(snippet.title);
      setDescription(snippet.description);
    })
    .catch((error) => console.error(error));
  return (
    <div className="md:flex justify-center md:mx-[300px] my-16 md:my-4">
      <iframe
        className="border-1 border-solid border-black"
        width="375"
        height="210"
        src={getVideoEmbedSrc(src)}
        allowFullScreen
      ></iframe>
      {title && (
        <div className="md:ml-8">
          {isTextClamped(document.getElementById(title)) ? (
            <Tooltip title={title}>
              <div id={title} className="line-clamp-1 font-bold">
                {title}
              </div>
            </Tooltip>
          ) : (
            <div id={title} className="line-clamp-1 font-bold">
              {title}
            </div>
          )}

          <div className="text-sm text-gray-600">
            Share by : nguyenthientam.2206@gmail.com
          </div>
          <div className="text-sm text-gray-600">Description:</div>
          {isTextClamped(document.getElementById(title)) ? (
            <Tooltip title={description}>
              <div className="line-clamp-6 text-sm text-gray-600">
                {description}
              </div>
            </Tooltip>
          ) : (
            <div className="line-clamp-6 text-sm text-gray-600">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(MovieItem);