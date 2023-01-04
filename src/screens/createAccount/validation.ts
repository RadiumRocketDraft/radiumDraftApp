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
  skill: yup
    .number()
    .typeError('Skill should be a number')
    .transform(input => input || undefined)
    .required('Skill is required')
    .min(0, 'Skill should be between 0 and 100')
    .max(100, 'Skill should be between 0 and 100'),
  position: yup.string().required('Position should be a number'),
});
