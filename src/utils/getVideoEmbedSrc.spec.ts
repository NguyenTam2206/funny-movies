import { getVideoEmbedSrc } from "./getVideoEmbedSrc";

describe("getVideoEmbedSrc", () => {
  it("should return empty string for non-youtube urls", () => {
    expect(getVideoEmbedSrc("https://example.com/video")).toEqual("");
    expect(getVideoEmbedSrc("https://vimeo.com/123456789")).toEqual("");
  });

  it("should return youtube embed url for valid youtube urls with watch?v= format", () => {
    const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const expectedEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    expect(getVideoEmbedSrc(url)).toEqual(expectedEmbedUrl);
  });

  it("should return youtube embed url for valid youtube urls with youtu.be/ format", () => {
    const url = "https://youtu.be/dQw4w9WgXcQ";
    const expectedEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    expect(getVideoEmbedSrc(url)).toEqual(expectedEmbedUrl);
  });
});
