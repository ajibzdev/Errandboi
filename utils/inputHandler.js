function isBeforeDate(dateString, limitedTime) {
  // Use the Date constructor to parse the date string
  const date = new Date(dateString);

  // Create a date object for January 1, 2010
  const limit = new Date(limitedTime);

  // Check if the date is before January 1, 2010 by comparing their timestamps
  return date.getTime() < limit.getTime();
}

// // Valid phone numbers
// import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

// function isValidPhoneNumber(phoneNumber) {
//   // Create a PhoneNumberUtil instance
//   const phoneUtil = PhoneNumberUtil.getInstance();
//   try {
//     // Parse the phone number
//     const number = phoneUtil.parse(phoneNumber);
//     // Validate the phone number
//     return phoneUtil.isValidNumber(number);
//   } catch (error) {
//     // Return false if the phone number is invalid
//     return false;
//   }
// }

// console.log(isValidPhoneNumber("1234567890"));

// Email Handler
export const handleEmailError = (_fn, errors, setErrors, setErrorMsgs) => {
  if (_fn === "") {
    let temp = errors;
    temp.email = true;
    setErrors(temp);
    setErrorMsgs((prevState) => ({
      ...prevState,
      ["email"]: "Email is required",
    }));
  } else {
    if (!_fn.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrorMsgs((prevState) => ({
        ...prevState,
        ["email"]: "Input a valid email",
      }));
      let temp = errors;
      temp.email = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.email = false;
      setErrors(temp);
    }
  }
};

export const handleInputError = (
  _fn,
  field,
  errors,
  setErrors,
  setErrorMsgs
) => {
  if (_fn === "") {
    let temp = errors;
    temp[field] = true;
    setErrors(temp);
    setErrorMsgs((prevState) => ({
      ...prevState,
      [field]: "This field is required",
    }));
  } else {
    if (field == "firstName" || field == "lastName") {
      if (!_fn.match(/^[a-zA-Z\s]*$/)) {
        setErrorMsgs((prevState) => ({
          ...prevState,
          [field]: "Field must contain only letters",
        }));
        let temp = errors;
        temp[field] = true;
        setErrors(temp);
      } else {
        let temp = errors;
        temp[field] = false;
        setErrors(temp);
      }
    }

    if (field == "date") {
      let date = new Date(_fn);
      if (isNaN(date.getTime())) {
        setErrorMsgs((prevState) => ({
          ...prevState,
          [field]: "Must be a valid date",
        }));
        let temp = errors;
        temp[field] = true;
        setErrors(temp);
      }
      // if (isBeforeDate(_fn, "2010-01-01")) {
      //   setErrorMsgs((prevState) => ({
      //     ...prevState,
      //     [field]: "Does not meet minimum date",
      //   }));
      //   let temp = errors;
      //   temp[field] = true;
      //   setErrors(temp);
      // } else {
      //   let temp = errors;
      //   temp[field] = false;
      //   setErrors(temp);
      // }
    }

    if (field == "number") {
      if (!_fn.match(/^\d{11}$|^\d{3}-\d{3}-\d{4}$/)) {
        setErrorMsgs((prevState) => ({
          ...prevState,
          [field]: "Must be a valid phone numer",
        }));
        let temp = errors;
        temp[field] = true;
        setErrors(temp);
      } else {
        let temp = errors;
        temp[field] = false;
        setErrors(temp);
      }
    }
  }
};

// Password Handler
export const handlePasswordError = (_fn, errors, setErrors, setErrorMsgs) => {
  if (_fn === "") {
    let temp = errors;
    temp.password = true;
    setErrors(temp);
  } else {
    if (!_fn.match(/.{8,}/)) {
      // Length Checker
      setErrorMsgs((prevState) => ({
        ...prevState,
        ["password"]: "Min password length of 8",
      }));
      let temp = errors;
      temp.password = true;
      setErrors(temp);
    } else if (!_fn.match(/(?=.*?[0-9])/)) {
      // Number Checker
      setErrorMsgs((prevState) => ({
        ...prevState,
        ["password"]: "Password must contain a number",
      }));
      let temp = errors;
      temp.password = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.password = false;
      setErrors(temp);
    }
  }
};

// Confirm Password Handler
export const handleConfirmPasswordError = (
  _fn,
  errors,
  setErrors,
  setErrorMsgs,
  password
) => {
  if (_fn === "") {
    let temp = errors;
    temp.confirmPassword = true;
    setErrors(temp);
  } else {
    // Passwords do not match
    if (_fn !== password) {
      setErrorMsgs((prevState) => ({
        ...prevState,
        ["confirmPassword"]: "Passwords do not match",
      }));
      let temp = errors;
      temp.confirmPassword = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.confirmPassword = false;
      setErrors(temp);
    }
  }
};
