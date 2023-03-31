import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils"; // import the `act` utility
import MovieItem from "./MovieItems";
import "@testing-library/jest-dom";

describe("MovieItem component", () => {
  const movie = {
    createdBy: "John Doe",
    createdDate: "2021-11-01T10:00:00.000Z",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    _id: "123",
  };

  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          items: [
            {
              snippet: { title: "Mock Title", description: "Mock Description" },
            },
          ],
        }),
    });
  });

  afterAll(() => {
    (global.fetch as jest.Mock).mockRestore();
  });

  it("renders movie section with title and description", async () => {
    await act(async () => {
      render(<MovieItem movie={movie} />);
    }); // wrap the `render` call inside an `act` call

    expect(screen.getByTestId("movie-section")).toBeInTheDocument();
    expect(screen.getByText(/share by : john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/description:/i)).toBeInTheDocument();

    userEvent.click(screen.getByText(/mock title/i));

    expect(screen.getByText(/mock description/i)).toBeInTheDocument();
    expect(screen.getByText(/mock description/i)).toHaveClass("line-clamp-6");
  });
});
