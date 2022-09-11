 const EmailValidator = (email: string) => {
    if (!email) {
      return 'Email is required';
    } if (/\S+@\S+\.\S+/.test(email)) {
      return 'Incorrect email format';
    }
    return '';
  };

  export default EmailValidator;
