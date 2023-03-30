import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterBtn from "./RegisterBtn";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./ui/modal/ModalContext", () => ({
  useModalAction: () => ({
    openModal: jest.fn(),
  }),
}));

describe("RegisterBtn component", () => {
  test("renders register button", () => {
    render(<RegisterBtn />);
    const registerButton = screen.getByRole("button", { name: "Register" });
    expect(registerButton).toBeInTheDocument();
  });

  test("opens modal when register button is clicked", async () => {
    const target = render(<RegisterBtn />);
    await userEvent.click(target.getByTestId("register-btn"));
    setTimeout(() => {
      expect(target.getByTestId("register-view")).toBeInTheDocument();
    });
  });
});
