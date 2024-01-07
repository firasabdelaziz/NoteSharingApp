import * as yup from 'yup';

const ValidationFactory = {
  createLoginForm: () => {
    return yup.object().shape({
      email: yup.string().required('Please enter your login!'),
      password: yup
        .string()
        .required('Please enter your password!')
        .min(8, 'Your password must be a minimum of 8 characters!')
        .matches(
          /^(?=.*\d)(?=.*[a-z])[\w~@'#/€£§•<>$%¥´^&*+=`|{}:;!.?\"()\[\]-\s]+$/,
          'The password must have at least one letter and one number!'
        ),
    });
  },

  createRegistrationForm: () => {
    return yup.object().shape({
      email: yup.string().required('Please enter your email!').email('Please enter a valid email address!'),
      password: yup
        .string()
        .required('Please enter your password!')
        .min(8, 'Your password must be a minimum of 8 characters!')
        .matches(
          /^(?=.*\d)(?=.*[a-z])[\w~@'#/€£§•<>$%¥´^&*+=`|{}:;!.?\"()\[\]-\s]+$/,
          'The password must have at least one letter and one number!'
        ),
      confirmPassword: yup
        .string()
        .required('Please confirm your password!')
        .oneOf([yup.ref('password'), null], 'Passwords must match!'),
    });
  },
};

export default ValidationFactory;
