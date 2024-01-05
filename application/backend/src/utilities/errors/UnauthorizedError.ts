import GenericError from './GenericError';

class UnApprovedError extends GenericError {
  constructor(alert: string) {
    super(alert, 401);
  }
}

export default UnApprovedError;
