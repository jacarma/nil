import { nil, noNil, coalesce } from "./";

describe("nil", () => {
  it("null is nil", () => {
    expect(nil(null)).toBeTruthy();
  });
  it("undefined is nil", () => {
    expect(nil(undefined)).toBeTruthy();
  });
  it('"" is nil', () => {
    expect(nil("")).toBeTruthy();
  });
  it("NaN is nil", () => {
    expect(nil(Number.NaN)).toBeTruthy();
  });
});

describe("noNil", () => {
  it("false is noNil", () => {
    expect(noNil(false)).toBeTruthy();
  });
  it("0 is noNil", () => {
    expect(noNil(0)).toBeTruthy();
  });
  it("[] is noNil", () => {
    expect(noNil([])).toBeTruthy();
  });
  it("{} is noNil", () => {
    expect(noNil({})).toBeTruthy();
  });
});

describe("coalesce", () => {
  it("No nil arguments return first argument", () => {
    expect(coalesce("a")).toBe("a");
    expect(coalesce("a", "b")).toBe("a");
  });
  it("All nil arguments return null", () => {
    expect(coalesce("", undefined)).toBeNull();
  });
  it("Works with numbers", () => {
    expect(coalesce(undefined, 1)).toBe(1);
    expect(coalesce(Number.NaN, 1)).toBe(1);
  });
});
