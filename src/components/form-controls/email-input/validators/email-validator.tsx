 const EmailValidator = (email: string) => {
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
 );

    if (!email) {
      return console.log('cannot be empty');
    } if (validEmail.test(email)) {
      return console.log('invalid email');
    }
    return '';
  };

  export default EmailValidator;
