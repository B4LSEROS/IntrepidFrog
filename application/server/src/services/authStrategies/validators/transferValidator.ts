import * as jsValidator from 'joi';
import {ITransfer} from '../../../db/models/Transfers';
import generateValidatorFunction from './helpers/generateValidatorFunction';
import validatorFunction from './types/validatorFunction';

const MESSAGE = 'All the fields must be completed before proceeding';
const VALUE_MESSAGE = 'Transactions must include a posive value for its validity';

class transferValidator {
    static register = generateValidatorFunction(
        jsValidator.object({
            username: jsValidator.string().required().messages({
                'any.required' : MESSAGE,
                'string.empty' : MESSAGE,
                'string.base'  : MESSAGE,
            }),
            value: jsValidator.number().positive().required().messages({
                'any.required'   : MESSAGE,
                'number.base'    : VALUE_MESSAGE,
                'number.positive': VALUE_MESSAGE,
            }),
        }).messages({
            'object.unknown': 'Body of user requirements contain invalid data.',
        })
    ) as validatorFunction<ITransfer>;
}

export default transferValidator;