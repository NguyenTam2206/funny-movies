import { render, screen } from "@testing-library/react";
import Modal from "./modal";
import "@testing-library/jest-dom";

describe("Modal", () => {
  const handleCloseMock = jest.fn();
  test("renders the modal with default props", () => {
    render(
      <Modal open={true} handleClose={handleCloseMock} style={""}>
        <div data-testid="modal-content">Hello world</div>
      </Modal>
    );

    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });
});
