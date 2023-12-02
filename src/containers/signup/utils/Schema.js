import * as yup from "yup";

export const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(14)
      .required("At least 8 characters required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords doesn't match")
      .required(),
  });