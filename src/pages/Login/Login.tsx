import "./Login.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import { Container } from "../../components/common/Container/Container";
import { getUserError, getUserIsLoading } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { LoginForm } from "../../components/LoginForm/LoginForm";

function Login() {
  //   const dispatch = useDispatch();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const isLoading = useSelector(getUserIsLoading);
  //   const error = useSelector(getUserError);

  //   useEffect(() => {
  //     if (error) {
  //       Notify.info(error);
  //     }
  //   }, [error]);

  //   const onFormSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(login({ email, password }));
  //     setEmail("");
  //     setPassword("");
  //   };
  //   const inputValue = (e) => {
  //     const key = e.target.name;
  //     const value = e.target.value;

  //     switch (key) {
  //       case "email":
  //         setEmail(value);
  //         break;
  //       case "password":
  //         setPassword(value);
  //         break;

  //       default:
  //         return;
  //     }
  //   };

  return (
    <section className="login-section">
      <Container>
        <>
          <p className="login-title">Questify</p>
          <p className="login-subtitle">Sign in</p>
          <LoginForm />
        </>
      </Container>
    </section>
  );
  // 	(
  //     <>
  //       {isLoading && !error && (
  //         <div className={css.loaderWrap}>
  //           <TailSpin color="#3470ff" />
  //         </div>
  //       )}
  //       <Container>
  //         <section className={css.loginSection}>
  //           <form onSubmit={onFormSubmit} className={css.loginForm}>
  //             <label className={css.loginLabel}>
  //               Email:
  //               <Input
  //                 onChange={inputValue}
  //                 value={email}
  //                 name="email"
  //                 size="medium"
  //                 width="300px"
  //                 type=" text"
  //               />
  //             </label>
  //             <label className={css.loginLabel}>
  //               Password:
  //               <Input
  //                 name="password"
  //                 onChange={inputValue}
  //                 value={password}
  //                 size="medium"
  //                 width="300px"
  //                 type=" text"
  //               />
  //             </label>
  //             <Button
  //               width="300px"
  //               colorScheme="linear-gradient(to right, #00b4db, #0083b0);"
  //               height="40px"
  //               type="submit"
  //             >
  //               Log in
  //             </Button>
  //           </form>
  //         </section>
  //       </Container>
  //     </>
  //   );
}
export { Login };
