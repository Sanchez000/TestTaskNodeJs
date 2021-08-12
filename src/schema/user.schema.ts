import * as yup from "yup";

export const createUserSchema = yup.object({
  body: yup.object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string()
      .email("Must be a valid email")
      .required("Email is required")
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Email can only be in format - example@email.com"),
  }),
});
