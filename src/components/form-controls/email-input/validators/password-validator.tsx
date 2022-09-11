 const PasswordValidator = (password: string) => {
  if (!password) {
    return 'Password is required';
  } if (password.length < 8) {
    return 'Password must have a minimum 8 characters';
  }
  return '';
};

export default PasswordValidator;
