import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export const SignIn = ({ users }) => {
  // Yup schema for form validation
  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Must enter email"),
    password: yup.string().required("Must enter a password"),
  });

  // Formik hook for managing form state and submission
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log("Sign-in values:", values.email);
      console.log("users:", users);

      for (let i = 0; i < users.length; i++) {
        console.log("useremail:", users[i].email);
        if (values.email === users[i].email) {
          console.log("Found");
          console.log("upassword::", values.password);
        }
      }
      // Example: Send a POST request to a sign-in endpoint
      // fetch("/signin", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values),
      // })
      //   .then((res) => {
      //     if (res.status === 200) {
      //       // Sign-in successful, handle it as needed (e.g., redirect)
      //     } else {
      //       // Sign-in failed, handle errors
      //     }
      //   })
      //   .catch((error) => {
      //     // Handle network errors
      //   });
    },
  });

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p style={{ color: "red" }}>{formik.errors.email}</p>

        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p style={{ color: "red" }}>{formik.errors.password}</p>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
