export function getVideoEmbedSrc(url: string) {
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(\S+)?$/;
  const match = url.match(youtubeRegex);
  return match ? `https://www.youtube.com/embed/${match[4]}` : null; // return the video ID capture group
}
