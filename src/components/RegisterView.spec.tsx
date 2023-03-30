import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import LogInOutBtn from "./LogInOutBtn";
import { Provider } from "react-redux";
import { initialStore } from "../__mocks__/inititalStore";
import configureStore from "redux-mock-store";
import RegisterBtn from "./RegisterBtn";

jest.mock("./ui/modal/ModalContext", () => ({
  useModalAction: () => ({
    openModal: jest.fn(),
  }),
}));

describe("LogInView component", () => {
  const initialState = initialStore;
  const mockStore = configureStore();
  const store = mockStore(initialState);
  test("display modal and inputs when register button is clicked", async () => {
    const target = render(<RegisterBtn />);
    await userEvent.click(target.getByTestId("register-btn"));
    setTimeout(() => {
      expect(target.getByTestId("register-view")).toBeInTheDocument();
      expect(target.getByText("Register new account")).toBeInTheDocument();
      expect(target.getByText("Email")).toBeInTheDocument();
      expect(target.getByText("Password")).toBeInTheDocument();
      expect(target.getByText("Re-Password")).toBeInTheDocument();
    }, 500);
  });

  test("validates incorrect email format", async () => {
    const target = render(<RegisterBtn />);
    await userEvent.click(target.getByTestId("register-btn"));
    setTimeout(() => {
      const emailField = target.getByLabelText("Email");
      fireEvent.change(emailField, { target: { value: "wrongemail.com" } });
      fireEvent.blur(emailField);
      expect(target.getByText("Email format is incorrect")).toBeInTheDocument();
    }, 500);
  });

  test("validates empty password field", async () => {
    const target = render(<RegisterBtn />);
    await userEvent.click(target.getByTestId("register-btn"));
    setTimeout(() => {
      const passWordField = target.getByLabelText("Password");
      fireEvent.change(passWordField, { target: { value: "" } });
      fireEvent.blur(passWordField);
      expect(target.getByText("Password is required")).toBeInTheDocument();
    }, 500);
  });

  test("validates re-password different password field", async () => {
    const target = render(<RegisterBtn />);
    await userEvent.click(target.getByTestId("register-btn"));
    setTimeout(() => {
      const passWordField = target.getByLabelText("Password");
      const rePassWordField = target.getByLabelText("Re-Password");
      fireEvent.change(passWordField, { target: { value: "123456" } });
      fireEvent.blur(passWordField);
      fireEvent.change(rePassWordField, { target: { value: "654321" } });
      fireEvent.blur(rePassWordField);
      expect(
        target.getByText("Password and Re-password need to be same")
      ).toBeInTheDocument();
    }, 500);
  });
});
