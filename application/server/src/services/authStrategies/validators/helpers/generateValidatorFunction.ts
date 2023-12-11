import * as jsValidator from 'joi';
import wrongRequestError from '../../../../utilities/errors/wrongRequestError';
import validatorFunction from '../types/validatorFunction';

function generateValidatorFunction<Body>(schema: jsValidator.Schema): validatorFunction<Body> {
    return (data: Body) => {
        const { error, value } = schema.validate(data);
        if (error) {
            const alert = error.details[0].message.replace(/[[\]0-9]{3}/, '');
            throw new wrongRequestError(alert);
        }
        return value as Body;
    }
}

export default generateValidatorFunction;
