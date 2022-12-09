import { useDispatch } from 'react-redux';
import { logIn } from 'redux/AuthRedux/operations';
import { LogInBtn, LogInForm, LogInInput, LogInLbl } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogInForm onSubmit={handleSubmit} autoComplete="off">
      <LogInLbl >
        Email
        <LogInInput
          type="email"
          name="email"
          placeholder="Enter email"
          autocomplete="on"
          required
        />
      </LogInLbl>
      <LogInLbl >
        Password
        <LogInInput
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </LogInLbl>
      <LogInBtn type="submit">Log In</LogInBtn>
    </LogInForm>
  );

  // return (
  //   <form autoComplete="off">
  //     <label >
  //       Email
  //       <input type="email" name="email" />
  //     </label>
  //     <label >
  //       Password
  //       <input type="password" name="password" />
  //     </label>
  //     <button type="submit">Log In</button>
  //   </form>
  // );
};
