import { render, screen } from "@testing-library/react";
import { useAuth } from "../hooks/useAuth";
import ResponsiveAppBar from "./Appbar";
import { Provider } from "react-redux";
import { initialStore } from "../__mocks__/inititalStore";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("./ui/modal/ModalContext", () => ({
  useModalAction: () => ({
    openModal: jest.fn(),
  }),
}));
jest.mock("../hooks/useAuth");
const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

describe("ResponsiveAppBar", () => {
  const initialState = initialStore;
  const mockStore = configureStore();
  const store = mockStore(initialState);
  it("renders the Funny Movies title and logo", () => {
    render(
      <Provider store={store}>
        <ResponsiveAppBar />
      </Provider>
    );
    const titleElement = screen.queryAllByText(/funny movies/i)[0];
    expect(titleElement).toBeInTheDocument();
    const logoElement = screen.getAllByTestId("logo-icon")[0];
    expect(logoElement).toBeInTheDocument();
  });

  it("renders the share button when user is logged in", () => {
    mockedUseAuth.mockReturnValue({ isLogedIn: true });
    render(
      <Provider store={store}>
        <ResponsiveAppBar />
      </Provider>
    );
    const shareButtonElement = screen.getByRole("button", {
      name: /share a movie/i,
    });
    expect(shareButtonElement).toBeInTheDocument();
  });

  it("renders the welcome message for logged-in users", () => {
    const user = { email: "test@example.com" };
    localStorage.setItem("user", JSON.stringify(user));
    mockedUseAuth.mockReturnValue({ isLogedIn: true });
    render(
      <Provider store={store}>
        <ResponsiveAppBar />
      </Provider>
    );
    const welcomeMessageElement = screen.getByText(/welcome/i);
    expect(welcomeMessageElement).toBeInTheDocument();
    const userEmailElement = screen.getByText(new RegExp(user.email, "i"));
    expect(userEmailElement).toBeInTheDocument();
  });
});
