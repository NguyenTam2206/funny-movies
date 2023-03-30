import { LoadingButton } from "@mui/lab";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { memo, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { youtubeRegex } from "../config/constants";
import { SHARE_MOVIE } from "../lib/network/rest/movie";

const ShareSection: React.FC = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [bluredUrl, setBluredUrl] = useState(false);

  const handleBlur = useCallback(() => {
    setBluredUrl(true);
  }, []);

  const handleShareMovie = useCallback(() => {
    setLoading(true);
    try {
      SHARE_MOVIE({ url })
        .then((data) => {
          if (!data.code) {
            toast.error(data.msg);
          } else {
            toast.success("The movie was shared successfully");
          }
        })
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  return (
    <div>
      <div>Share a Youtube movie</div>
      <div className="w-[300px] md:w-[500px]">
        <TextField
          className="my-4 w-full"
          type="text"
          name="Youtube Url"
          label="Youtube Url"
          placeholder="Enter your youtube movie url"
          value={url}
          fullWidth
          onBlur={() => handleBlur()}
          onChange={(e) => setUrl(e.target.value)}
          helperText={
            bluredUrl && !youtubeRegex.test(url) && "Url is not a youtube url"
          }
          error={bluredUrl && !youtubeRegex.test(url)}
        />

        <LoadingButton
          disabled={!youtubeRegex.test(url)}
          variant="contained"
          color="primary"
          className="w-full mb-4"
          loading={loading}
          onClick={handleShareMovie}
        >
          Share
        </LoadingButton>
        <a
          href="https://youtube.com"
          target="_blank"
          className="text-xs"
          rel="noreferrer"
        >
          Still don&apos;t have a movie to share? Click here
        </a>
      </div>
    </div>
  );
};

export default memo(ShareSection);
