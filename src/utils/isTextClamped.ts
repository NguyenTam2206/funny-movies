export const isTextClamped = (element: HTMLElement | null) => {
  if (element) return element.scrollHeight > element.clientHeight;
  else return false;
};
