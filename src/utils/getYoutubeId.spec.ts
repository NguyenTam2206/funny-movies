import { getYouTubeId } from "./getYoutubeId";

describe("getYouTubeId", () => {
  it("should extract video id from the regular URL", () => {
    expect(getYouTubeId("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ"
    );
  });

  it("should extract video id from the short URL", () => {
    expect(getYouTubeId("https://youtu.be/dQw4w9WgXcQ")).toBe("dQw4w9WgXcQ");
  });

  it("should handle invalid URLs", () => {
    expect(getYouTubeId("hello world")).toBeNull();
    expect(getYouTubeId("wrongurl.com")).toBeNull();
  });

  it("should extract video id from a different short URL", () => {
    expect(getYouTubeId("https://youtu.be/mm484NQqhM4")).toBe("mm484NQqhM4");
  });
});
