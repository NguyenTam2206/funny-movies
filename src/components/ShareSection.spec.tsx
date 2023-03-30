import ShareSection from "./ShareSection";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Share Section Component", () => {
  test("display share secton", () => {
    const target = render(<ShareSection />);
    expect(target.getByTestId("share-input")).toBeInTheDocument();
    expect(target.getByLabelText("Youtube Url")).toBeInTheDocument();
  });

  test("validates incorrect youtube url format", async () => {
    const target = render(<ShareSection />);
    setTimeout(() => {
      const youtubeUrlField = target.getByLabelText("Youtube Url");
      fireEvent.change(youtubeUrlField, {
        target: { value: "wrongformat-youtube.com" },
      });
      fireEvent.blur(youtubeUrlField);
      expect(target.getByText("Url is not a youtube url")).toBeInTheDocument();
    }, 500);
  });
});
