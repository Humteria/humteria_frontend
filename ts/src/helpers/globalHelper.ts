export function checkMailRequirements(mail: string) {
  const mailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return mailRegex.test(mail);
}

export function checkPasswordRequirements(password: string) {
  // Password Requirements:
  // - Minimum of 8 characters.
  // - Must include at least one uppercase letter.
  // - Must include at least one lowercase letter.
  // - Must include at least one digit.
  // - Must include at least one special character.
  if (password !== undefined && password.length >= 8) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

    if (hasUppercase && hasLowercase && hasDigit && hasSpecialChar) {
      return true;
    }

    return false;
  }
}

export async function setLocalStorageItem(key: string, value: string) {
  return new Promise((reject) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      reject(error);
    }
  });
}
