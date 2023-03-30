type User = {
  username: string;
  password: string;
};
export const LOG_IN = async (body: User) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/auth/login` || "",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
};

export const REGISTER = async (body: User) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/auth/register` || "",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
};
