import generateValidator from "./helpers/generateValidator";
import Validator from "./types/validator";
import * as JOI from "joi";
import { IUserLogin, IUserRegister } from "../../../db/models/User";

const MESSAGE = "All text fields need to be completed.";
const USERNAME_SIZE_MSG =
  "The length of username needs to be greater than 4 characters.";
const PASSWORD_MSG =
  "Password needs to contain a number, capital letter and be greater than 6 characters in length";

class UserValidator {
  static login = generateValidator(
    JOI.object({
      username: JOI.string().required().messages({
        "string.empty": MESSAGE,
        "string.base": MESSAGE,
        "any.required": MESSAGE,
      }),
      password: JOI.string().required().messages({
        "string.empty": MESSAGE,
        "string.base": MESSAGE,
        "any.required": MESSAGE,
      }),
    }).messages({
      "object.unknown": "The body of the request contains unauthorized fields.",
    })
  ) as Validator<Body>;

  static register = generateValidator(
    JOI.object({
      username: JOI.string().min(4).required().messages({
        "any.required": MESSAGE,
        "string.empty": MESSAGE,
        "string.base": MESSAGE,
        "string.min": USERNAME_SIZE_MSG,
      }),
      password: JOI.string()
        .regex(/^(?=.*\d)(?=.*[A-Z]).{6,}$/)
        .required()
        .messages({
          "any.required": MESSAGE,
          "string.empty": MESSAGE,
          "string.base": MESSAGE,
          "strig.pattern.base": PASSWORD_MSG,
        }),
    }).messages({
      "object.unknown": "Invalid input",
    })
  ) as Validator<IUserRegister>;
}

export default UserValidator;
