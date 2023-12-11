import * as jsValidator from 'joi';
import { IUserRegister, IUserLogin } from '../../../db/models/User';
import generateValidatorFunction from './helpers/generateValidatorFunction';
import validatorFunction from './types/validatorFunction';

const MESSAGE = 'All fields must be completed before proceeding';
const USERNAME_MIN_SIZE = 'Usernames must have a minimum of 4 characters';
const PATTERN_PASSWORD = 'Passwords must contain at least 7 characters, one upper-case letter, and one number.';


class validatorUser {
    static login = generateValidatorFunction(
        jsValidator.object({
            username: jsValidator.string().required().messages({
                'string.empty' : MESSAGE,
                'string.base'  : MESSAGE,
                'any.required' : MESSAGE,
        }),
        password: jsValidator.string().required().messages({
            'string.empty': MESSAGE,
            'string.base': MESSAGE,
            'any.required': MESSAGE,
        }),
    }).messages({
        'object.unknown': 'The body of the request contains invalid data.',
    })
    ) as validatorFunction<IUserLogin>;

    static register = generateValidatorFunction(
        jsValidator.object({
          username: jsValidator.string().min(4).required().messages({
            'any.required': MESSAGE,
            'string.empty': MESSAGE,
            'string.base': MESSAGE,
            'string.min': USERNAME_MIN_SIZE,
          }),
          password: jsValidator.string()
            .regex(/^(?=.*\d)(?=.*[A-Z]).{7,}$/)
            .required()
            .messages({
              'any.required': MESSAGE,
              'string.empty': MESSAGE,
              'string.base': MESSAGE,
              'string.pattern.base': PATTERN_PASSWORD,
            }),
        }).messages({
          'object.unknown':
            'The body of the request contains invalid data.',
        })
      ) as validatorFunction<IUserRegister>;
    }
export default validatorUser;
