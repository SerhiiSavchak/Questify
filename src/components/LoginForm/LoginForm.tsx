import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginForm.scss";

export const LoginForm = () => {
  const { errors, touched, values, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Required"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-form-wrap">
        <div className="login-input-wrap">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={
              errors.email && touched.email
                ? "login-input error"
                : " login-input"
            }
          />
          {errors.email && touched.email && (
            <p className="login-input-error">{errors.email}</p>
          )}
        </div>

        <div className="login-input-wrap">
          <input
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={
              errors.password && touched.password
                ? "login-input error"
                : " login-input"
            }
            type="password"
          />
          {errors.password && touched.password && (
            <p className="login-input-error">{errors.password}</p>
          )}
        </div>
      </div>
      <button className="login-btn" type="submit">
        go!
      </button>
    </form>
  );
};
