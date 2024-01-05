import GenericError from './GenericError';

class MissingError extends GenericError {
  constructor(alert: string) {
    super(alert, 404);
  }
}

export default MissingError;
