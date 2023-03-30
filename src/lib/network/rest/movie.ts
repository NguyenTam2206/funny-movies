type ShareMovieParam = {
  url: string;
};

export const SHARE_MOVIE = async (body: ShareMovieParam) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/movie` || "",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
};

export const GET_MOVIE_LIST = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/movie` || "",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
