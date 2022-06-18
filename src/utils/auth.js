import { toast } from "react-toastify";

const validateEmail = (email) => {
  const regularExpression =
    /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  if (regularExpression.test(email)) {
    return true;
  } else {
    toast.warning("Enter a valid email address");
    return false;
  }
};

const validatePassword = (password) => {
  const regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (regularExpression.test(password)) {
    return true;
  } else {
    toast.warning(
      "Password must be between 8 to 16 chars and must include a number, a uppercase letter, a lowercase letter and a special character"
    );
    return false;
  }
};

const confirmPasswordCheck = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    toast.error("Your password and confirm password do not match");
    return false;
  } else {
    return true;
  }
};

export { validateEmail, validatePassword, confirmPasswordCheck };
