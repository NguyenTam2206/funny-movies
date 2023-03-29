export const useGetMovieInfo = () => {
  const apiKey = "AIzaSyCfsqz4Go9z9Bk0-jZsnneLJezONEh4Eeo"; //From Google Developers Console App

  async function fetchVideoData(url: string) {
    const videoId = url.split("v=")[1];
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items[0].snippet;
  }

  return {
    fetchVideoData,
  };
};
