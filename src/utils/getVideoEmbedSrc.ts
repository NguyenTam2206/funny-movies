export function getVideoEmbedSrc(url: string) {
  const regex = /(?<=v=)[\w-]+/; // positive lookbehind to match "v=" followed by video ID
  const match = url.match(regex); // try to find a match in the given URL
  return match ? `https://www.youtube.com/embed/${match[0]}` : ""; // if a match is found, return the first capture group (video ID)
}
