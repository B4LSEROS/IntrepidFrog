// Extends the native JS class Error.
class GenericError extends Error {
  constructor (alert: string, private statusCode: number) {
    super(alert);
  }

  // Access property to obtain the statuscode in another instances of GenericError
  get codeStatus() {
    return this.statusCode;
  }
}

export default GenericError;