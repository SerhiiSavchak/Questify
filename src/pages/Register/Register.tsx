import "./Register.scss";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useState, useEffect } from "react";
// import { Input, Button } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { register } from "redux/auth/authOperations";

// import { getUserError, getUserIsLoading } from "redux/selectors";
// import { TailSpin } from "react-loader-spinner";

// import { Notify } from "notiflix/build/notiflix-notify-aio";

import sprite from "../../images/icons/sprite.svg";
import { Container } from "../../components/common/Container/Container";

function Register() {
  //   const dispatch = useDispatch();
  //   const [name, setName] = useState('');
  //   const [role, setRole] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const isLoading = useSelector(getUserIsLoading);
  //   const error = useSelector(getUserError);

  //   useEffect(() => {
  //     if (error) {
  //       Notify.info(error);
  //     }
  //   }, [error]);
  //   const onFormSubmit = e => {
  //     e.preventDefault();
  //     dispatch(register({ name, email, password, role }));
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //     setRole('');
  //   };

  //   const inputValue = e => {
  //     const key = e.target.name;
  //     const value = e.target.value;
  //     switch (key) {
  //       case 'name':
  //         setName(value);
  //         break;
  //       case 'email':
  //         setEmail(value);
  //         break;
  //       case 'password':
  //         setPassword(value);
  //         break;
  //       case 'role':
  //         setRole(value);
  //         break;

  //       default:
  //         return;
  //     }
  //   };

  return (
    <section className="register-section">
      <Container>
        <>
          <h1 className="register-title">Questify</h1>
          <p className="register-text">
            Questify will turn your life into a thrilling game full of amazing
            quests and exciting challenges.
          </p>
          <h2 className="register-subtitle">Sign up</h2>
          <RegisterForm />
          {/* <svg className="register-icon">
        <use href={sprite + "#icon-add"}></use>
      </svg>
      <svg className="register-icon">
        <use href={sprite + "#icon-add"}></use>
      </svg> */}
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
  //         <section className={css.registerSection}>
  //           <form onSubmit={onFormSubmit} className={css.registerForm}>
  //             <label className={css.registerLabel}>
  //               User name:
  //               <Input
  //                 value={name}
  //                 name="name"
  //                 onChange={inputValue}
  //                 className={css.registerInput}
  //                 size="medium"
  //                 width="300px"
  //                 type=" text"
  //               />
  //             </label>
  //             <label className={css.registerLabel}>
  //               Email:
  //               <Input
  //                 value={email}
  //                 name="email"
  //                 onChange={inputValue}
  //                 size="medium"
  //                 width="300px"
  //                 type=" text"
  //               />
  //             </label>
  //             <label className={css.registerLabel}>
  //               Password:
  //               <Input
  //                 minLength="7"
  //                 value={password}
  //                 name="password"
  //                 onChange={inputValue}
  //                 size="medium"
  //                 width="300px"
  //                 type=" text"
  //               />
  //             </label>
  //             <h3 className={css.registerRadioTitle}>Role:</h3>

  //             <div className={css.registerRadioWrap}>
  //               <label className={css.registerLabelRadio}>
  //                 Common
  //                 <input
  //                   className={css.registerRadio}
  //                   name="role"
  //                   onChange={inputValue}
  //                   value="admin"
  //                   type="radio"
  //                 />
  //               </label>
  //               <label className={css.registerLabelRadio}>
  //                 Admin
  //                 <input
  //                   className={css.registerRadio}
  //                   name="role"
  //                   onChange={inputValue}
  //                   value="common"
  //                   type="radio"
  //                 />
  //               </label>
  //             </div>
  //             <Button
  //               width="300px"
  //               colorScheme="linear-gradient(to right, #00b4db, #0083b0);"
  //               height="40px"
  //               type="submit"
  //             >
  //               Register
  //             </Button>
  //           </form>
  //         </section>
  //       </Container>
  //     </>
  //   )
}

export { Register };
