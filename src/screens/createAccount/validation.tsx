import * as yup from 'yup';
import {letterRegex, emailRegex} from '../../utils/constants';

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(letterRegex, 'Must be a valid name'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(letterRegex, 'Must be a valid last name'),
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Email must be a valid format'),
  password: yup.string().required('Password is required'),
  repeatPassword: yup
    .string()
    .required('Repeat password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
