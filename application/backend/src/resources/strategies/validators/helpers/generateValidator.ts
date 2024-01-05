import wrongRequestError from "../../../../utilities/errors/wrongRequestError";
import Validator from "../types/validator";
import * as JOI from "joi";

function generateValidator<Body>(schema: JOI.Schema): Validator<Body> {
  return (data: Body) => {
    const { error, value } = schema.validate(data);
    if (error) {
      const alert = error.details[0].message.replace(/[[\]0-9]{3}/, "");
      throw new wrongRequestError(alert);
    }

    return value as Body;
  };
}

export default generateValidator;