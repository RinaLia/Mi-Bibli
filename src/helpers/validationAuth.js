import validator from "validator";

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
 * See their docs here https://github.com/validatorjs/validator.js
 */

class ValidateFields {
  /*
   * A method that takes in the email
   * Validates it
   * Returns the response either error or false if there is no error
   */
  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return { msg: "Email is required", isError: true };
    } else if (!validator.isEmail(email)) {
      return { msg: "Invalid Email", isError: true };
    }
    return { msg: "Looks good", isError: false };
  }

  validatePassword(password) {
    if (validator.isEmpty(password)) {
      return { msg: "Password is required", isError: true };
    } else if (!validator.isLength(password, { min: 8 })) {
      return { msg: "Password should be minimum 8 characters", isError: true };
    }
    return { msg: "looks good", isError: false };
  }
}

const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };
