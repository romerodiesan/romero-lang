import { describe, it, expect } from "@jest/globals";
import { Token } from "../index";

describe("Token", () => {
  it("should be a class", () => {
    expect(Token).toBeInstanceOf(Function);
  });

  it("should have a token_type property", () => {
    const token = new Token();
    expect(token.token_type).toBeDefined();
  });

  it("should have a literal property", () => {
    const token = new Token();
    expect(token.literal).toBeDefined();
  });

  it("should have a token type default value of 'ILLEGAL'", () => {
    const token = new Token();
    expect(token.token_type).toBe(5); // TokenType.ILLEGAL = 5
  });
});
