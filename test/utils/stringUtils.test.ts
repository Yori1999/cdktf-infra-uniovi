import {
  normalizeId,
  isValidId,
  isEmptyString,
  checkIsValidId,
} from "../../src/utils/stringUtils";

describe("normalizeId", () => {
  it("should trim whitespace from the beginning and end of the string", () => {
    expect(normalizeId("  test  ")).toBe("test");
  });

  it("should replace spaces with hyphens", () => {
    expect(normalizeId("test string")).toBe("test-string");
  });

  it("should replace multiple spaces with a single hyphen", () => {
    expect(normalizeId("test   string")).toBe("test-string");
  });

  it("should handle strings with no spaces", () => {
    expect(normalizeId("test")).toBe("test");
  });

  it("should handle strings with special characters", () => {
    expect(normalizeId("test@string")).toBe("test@string");
  });
});

describe("isValidId", () => {
  it("should return true for a valid ID", () => {
    expect(isValidId("valid-id")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(isValidId("")).toBe(false);
  });

  it("should return false for a string with only whitespace", () => {
    expect(isValidId("   ")).toBe(false);
  });

  it("should return false for a string longer than 100 characters", () => {
    const longString = "a".repeat(101);
    expect(isValidId(longString)).toBe(false);
  });

  it("should return true for a string that is exactly 100 characters long", () => {
    const longString = "a".repeat(100);
    expect(isValidId(longString)).toBe(true);
  });
});

describe("checkIsValidId", () => {
  it("should not throw for a valid ID", () => {
    expect(() => checkIsValidId("valid-id")).not.toThrow();
  });

  it("should throw an error for an empty string", () => {
    expect(() => checkIsValidId("")).toThrow(
      "Invalid 'id' provided: must be a non-empty, non-blank string, and no longer than 100 characters once normalized.",
    );
  });

  it("should throw an error for a string with only whitespace", () => {
    expect(() => checkIsValidId("   ")).toThrow(
      "Invalid 'id' provided: must be a non-empty, non-blank string, and no longer than 100 characters once normalized.",
    );
  });

  it("should throw an error for a string longer than 100 characters", () => {
    const longString = "a".repeat(101);
    expect(() => checkIsValidId(longString)).toThrow(
      "Invalid 'id' provided: must be a non-empty, non-blank string, and no longer than 100 characters once normalized.",
    );
  });

  it("should not throw for a string that is exactly 100 characters long", () => {
    const longString = "a".repeat(100);
    expect(() => checkIsValidId(longString)).not.toThrow();
  });
});

describe("isEmptyString", () => {
  it("should return true for an empty string", () => {
    expect(isEmptyString("")).toBe(true);
  });

  it("should return true for a string with only whitespace", () => {
    expect(isEmptyString("   ")).toBe(true);
  });

  it("should return false for a non-empty string", () => {
    expect(isEmptyString("test")).toBe(false);
  });

  it("should return false for a string with non-whitespace characters", () => {
    expect(isEmptyString("  test  ")).toBe(false);
  });
});
