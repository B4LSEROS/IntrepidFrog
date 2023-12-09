// Extends the native JS class Error.
class GenericError extends Error {
  constructor (alert: string, private statusCode: number) {
    super(alert);
  }

  get codeStatus() {
    return this.statusCode;

  }
}

export default GenericError;