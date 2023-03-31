export const getYouTubeId = (url: string) => {
  var pattern =
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:v\/|embed\/|watch\?v=))([\w-]{11})/;
  var match = url.match(pattern);
  if (match) {
    return match[1];
  } else {
    return null;
  }
};
