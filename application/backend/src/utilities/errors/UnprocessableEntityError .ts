import GenericError from './GenericError';

class UnprocessableError extends GenericError {
  constructor(alert: string) {
    super(alert, 422);
  }
}

export default UnprocessableError;