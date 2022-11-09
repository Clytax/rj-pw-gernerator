import { lowerCase } from "./Lowercase";
import { upperCase } from "./Uppercase";
import { symbols } from "./Symbols";
import { numbers } from "./Numbers";

const PasswordGenerator = (
  length,
  hasUpperCase,
  hasLowerCase,
  hasNumbers,
  hasSymbols
) => {
  let password = "";
  let charSet = "";
  let charSetLength = 0;

  // Check if any of these options are activated and add them to the charSet.
  if (hasUpperCase) {
    charSet += upperCase;
  }

  if (hasLowerCase) {
    charSet += lowerCase;
  }

  if (hasSymbols) {
    charSet += symbols;
  }

  if (hasNumbers) {
    charSet += lowerCase;
  }

  // Set Length of Character Set
  charSetLength = charSet.length;

  // Generate password based on the length and character set provided
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSetLength));
  }

  return password;
};

export default PasswordGenerator;
