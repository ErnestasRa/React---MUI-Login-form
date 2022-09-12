 const PasswordValidator = (password: string) => {
  if (!password) {
    return console.log('cannot be empty');
  } if (password.length < 8) {
    return console.log('password must contain atleast 8 letters');
  }
  return '';
};

export default PasswordValidator;
