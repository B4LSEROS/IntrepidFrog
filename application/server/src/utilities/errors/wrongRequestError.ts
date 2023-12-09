import GenericError from "./GenericError";

class wrongRequestError extends GenericError {
  constructor(alert: string) {
    super(alert, 400);
  }
}

export default wrongRequestError;
