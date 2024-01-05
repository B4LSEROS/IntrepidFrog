import * as JOI from "joi";
import Validator from "./types/validator";
import generateValidator from "./helpers/generateValidator";
import { ITransferRegister } from "../../../db/models/Transfers";

const MESSAGE = "All fields must be completed.";
const VALUE_MESSAGE = "Transaction amount needs to be a positive number.";

// Declaration and implementation of validator class.
class TransactionValidator {
  static register = generateValidator(
    JOI.object({
      username: JOI.string().required().messages({
        "any.required": MESSAGE,
        "string.empty": MESSAGE,
        "string.base": MESSAGE,
      }),

      value: JOI.number().positive().required().messages({
        "any.required": MESSAGE,
        "number.base": MESSAGE,
        "number.positive": MESSAGE,
      }),
    }).messages({
      "object.unknown": "Fields contain invalid input.",
    })
  ) as Validator<ITransferRegister>;
}

export default TransactionValidator;
