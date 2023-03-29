import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { memo, useCallback, useState } from "react";
import { youtubeRegex } from "../config/constants";

const ShareSection: React.FC = () => {
  const [url, setUrl] = useState("");
  const [bluredUrl, setBluredUrl] = useState(false);

  const handleBlur = useCallback(() => {
    setBluredUrl(true);
  }, []);

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
        <Button
          disabled={!youtubeRegex.test(url)}
          variant="contained"
          color="primary"
          className="w-full mb-4"
        >
          Share
        </Button>
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
