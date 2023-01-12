import * as yup from 'yup';
import {emailRegex} from 'utils/constants';

// TODO We probably want to handle this differently,
// since email and password are only validations for this particular modal.

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(emailRegex, 'Email must be a valid format'),
  password: yup.string().required('Password is required'),
});
