enum TokenType {
  ASSING,
  COMMA,
  EOF,
  FUNCTION,
  IDENT,
  ILLEGAL,
  INT,
  LBRACE,
  LET,
  LPAREN,
  PLUS,
  RBRACE,
  RPAREN,
  SEMICOLON,
}

class Token {
  token_type: TokenType;
  literal: string;

  constructor() {
    this.token_type = TokenType.ILLEGAL;
    this.literal = "";
  }
}

export { Token };
