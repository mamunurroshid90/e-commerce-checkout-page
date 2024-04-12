import * as Yup from "yup";

export const SignupValidation = Yup.object({
  fname: Yup.string().min(3).required("Please Enter first name"),
  lname: Yup.string().min(3).required("Please Enter last name"),
  email: Yup.string()
    .email("Please Enter a valid Email")
    .required("Please Enter Email"),
});
