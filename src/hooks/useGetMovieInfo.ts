import { getYouTubeId } from "../utils/getYoutubeId";

export const useGetMovieInfo = () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  async function fetchVideoData(url: string) {
    const videoId = getYouTubeId(url);
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items[0].snippet;
  }

  return {
    fetchVideoData,
  };
};
