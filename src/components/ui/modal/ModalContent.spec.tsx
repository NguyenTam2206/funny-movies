import { render, screen, fireEvent } from "@testing-library/react";
import ModalContent from "./ModalContent";
import "@testing-library/jest-dom";

describe("ModalContent", () => {
  const onClose = jest.fn();
  const onAccept = jest.fn();
  const onReject = jest.fn();
  const cancelBtnText = "Cancel";
  const acceptBtnText = "Accept";
  const titleText = "Modal Title";
  const loading = false;
  const width = "480px";

  beforeEach(() => {
    onClose.mockClear();
    onAccept.mockClear();
    onReject.mockClear();
  });

  test("displays the modal title when provided", () => {
    render(
      <ModalContent
        title={titleText}
        onClose={onClose}
        onAccept={onAccept}
        cancelBtn={cancelBtnText}
        acceptBtn={acceptBtnText}
        loading={loading}
        width={width}
      >
        <div>Modal Content</div>
      </ModalContent>
    );

    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  test("calls the onAccept function when the accept button is clicked", () => {
    render(
      <ModalContent
        onClose={onClose}
        onAccept={onAccept}
        cancelBtn={cancelBtnText}
        acceptBtn={acceptBtnText}
        loading={loading}
        width={width}
      >
        <div>Modal Content</div>
      </ModalContent>
    );

    fireEvent.click(screen.getByRole("button", { name: acceptBtnText }));

    expect(onAccept).toHaveBeenCalledTimes(1);
  });

  test("displays the cancel and accept buttons when provided", () => {
    render(
      <ModalContent
        onClose={onClose}
        onAccept={onAccept}
        cancelBtn={cancelBtnText}
        acceptBtn={acceptBtnText}
        loading={loading}
        width={width}
      >
        <div>Modal Content</div>
      </ModalContent>
    );

    expect(
      screen.getByRole("button", { name: cancelBtnText })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: acceptBtnText })
    ).toBeInTheDocument();
  });

  test("displays the loading spinner when the loading prop is true", () => {
    render(
      <ModalContent
        onClose={onClose}
        onAccept={onAccept}
        cancelBtn={cancelBtnText}
        acceptBtn={acceptBtnText}
        loading={true}
        width={width}
      >
        <div>Modal Content</div>
      </ModalContent>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: acceptBtnText })).toBeDisabled();
  });
});
