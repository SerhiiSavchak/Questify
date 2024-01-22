import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";

export const RegisterForm = () => {
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
    <form onSubmit={handleSubmit} className="register-form">
      <div className="register-form-wrap">
        <div className="register-input-wrap">
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
                ? "register-input error"
                : " register-input"
            }
          />
          {errors.email && touched.email && (
            <p className="register-input-error">{errors.email}</p>
          )}
        </div>

        <div className="register-input-wrap">
          <input
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={
              errors.password && touched.password
                ? "register-input error"
                : " register-input"
            }
            type="password"
          />
          {errors.password && touched.password && (
            <p className="register-input-error">{errors.password}</p>
          )}
        </div>
      </div>
      <button className="register-btn" type="submit">
        go!
      </button>
    </form>
  );
};
