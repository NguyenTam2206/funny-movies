import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import LogInOutBtn from "./LogInOutBtn";
import { Provider } from "react-redux";
import { initialStore } from "../__mocks__/inititalStore";
import configureStore from "redux-mock-store";

jest.mock("./ui/modal/ModalContext", () => ({
  useModalAction: () => ({
    openModal: jest.fn(),
  }),
}));

describe("LogInView component", () => {
  const initialState = initialStore;
  const mockStore = configureStore();
  const store = mockStore(initialState);
  test("display modal and inputs when log in button is clicked", async () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={false} />
      </Provider>
    );
    await userEvent.click(target.getByTestId("loginout-btn"));
    setTimeout(() => {
      expect(target.getByTestId("login-view")).toBeInTheDocument();
      expect(target.getByText("Login your account")).toBeInTheDocument();
      expect(target.getByText("Email")).toBeInTheDocument();
      expect(target.getByText("Password")).toBeInTheDocument();
    }, 500);
  });

  test("validates incorrect email format", async () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={false} />
      </Provider>
    );
    await userEvent.click(target.getByTestId("loginout-btn"));
    setTimeout(() => {
      const emailField = target.getByLabelText("Email");
      fireEvent.change(emailField, { target: { value: "wrongemail.com" } });
      fireEvent.blur(emailField);
      expect(target.getByText("Email format is incorrect")).toBeInTheDocument();
    }, 500);
  });

  test("validates empty password field", async () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={false} />
      </Provider>
    );
    await userEvent.click(target.getByTestId("loginout-btn"));
    setTimeout(() => {
      const passwordField = target.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "" } });
      fireEvent.blur(passwordField);
      expect(target.getByText("Password is required")).toBeInTheDocument();
    }, 500);
  });
});
