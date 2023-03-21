class FormarError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'FomratError'
  }
}