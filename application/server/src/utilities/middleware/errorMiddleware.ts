// Manages errors by extending the class errors.
import GenericError from '../errors/GenericError';
// Provides constants for referencing HTTP codes.
import { StatusCodes } from 'http-status-codes';
// Class to manage error related to authentication, etc.
import { JsonWebTokenError } from 'jsonwebtoken';
// Request and Response HTTP objets, along with NextFunction for passing middleware function along.
import {NextFunction, Request, Response} from 'express';



function middleWareError (
  err: JsonWebTokenError | GenericError | Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof JsonWebTokenError) {
    res.status(StatusCodes.UNAUTHORIZED).json(
      {
        message: 'Invalid credentials.'
      }
    ); 
  } else if (err instanceof GenericError) {
      res.status(err.codeStatus).json(
        {
          message: err.message
        }
      );
  } else if (err instanceof JsonWebTokenError) {
    res.status(StatusCodes.FORBIDDEN).json(
      {
        message: 'Forbidden Access.'
      }
    );
  } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
        {
          message: 'Internal server error.'
        }
      );
    }
  }

export default middleWareError;