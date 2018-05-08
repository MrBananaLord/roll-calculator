class Token {
  constructor(value) {
    this.value = value;
  }

  static canBeInstantiatedFrom(value) {
    return true;
  }

  get type() {
    return 'token';
  }

  get number() {
    return this.type === 'number';
  }

  get operator() {
    return this.type === 'operator';
  }

  get bracket() {
    return this.type === 'bracket';
  }
}
