class Equasion {
  constructor(string) {
    this.infixTokens = new Tokenizer(string).run();
  }

  get postfixTokens() {
    return new Converter().infixToPostfix(this.infixTokens);
  }

  get postfix() {
    return this.postfixTokens.map((t) => t.value).join(' ');
  }
}