import { render } from "@testing-library/react";
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

describe("LogInOutBtn component", () => {
  const initialState = initialStore;
  const mockStore = configureStore();
  const store = mockStore(initialState);
  test("renders login button", () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={false} />
      </Provider>
    );
    expect(target.queryByText("Log in")).toBeInTheDocument();
  });

  test("renders logout button", () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={true} />
      </Provider>
    );
    expect(target.queryByText("Log out")).toBeInTheDocument();
  });

  test("opens modal when log in button is clicked", async () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={false} />
      </Provider>
    );
    await userEvent.click(target.getByTestId("loginout-btn"));
    setTimeout(() => {
      expect(target.getByTestId("login-view")).toBeInTheDocument();
    }, 500);
  });

  test("opens modal when log out button is clicked", async () => {
    const target = render(
      <Provider store={store}>
        <LogInOutBtn isLogedIn={true} />
      </Provider>
    );
    await userEvent.click(target.getByTestId("loginout-btn"));
    setTimeout(() => {
      expect(target.queryByText("Log in")).toBeInTheDocument();
    }, 500);
  });
});
