export const validateName = (name) =>
  /^[A-Za-z ]+$/.test(name.trim()) ? "" : "Name must contain only alphabets.";

const allowed = "A-Za-z0-9!@#$%^&*()_+\\-={}\\[\\]|:;\\\"'<>,.?/";
const allowedRegex = new RegExp(`^[${allowed}]+$`);

export const validateUsername = (username) =>
  allowedRegex.test(username)
    ? ""
    : "Username can contain letters, numbers, and special characters.";

export const validatePassword = (password, username) => {
  if (password === username) return "Password cannot be the same as Username.";
  return allowedRegex.test(password)
    ? ""
    : "Password can contain letters, numbers, and special characters.";
};

export const validateConfirmPassword = (password, confirm) =>
  password === confirm ? "" : "Passwords do not match.";

export const validateEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail\\.com$/.test(email)
    ? ""
    : "Email must be a valid Gmail address.";

export const validatePhone = (phone) =>
  /^\\+\\d{1,3}\\d{10}$/.test(phone)
    ? ""
    : "Phone must include country code and 10 digits (e.g., +911234567890).";
