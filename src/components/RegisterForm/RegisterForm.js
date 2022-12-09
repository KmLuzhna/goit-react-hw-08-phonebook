import { useDispatch } from 'react-redux';
import { register } from 'redux/AuthRedux/operations';
import { RegBtn, RegForm, RegInput, RegLbl } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegForm onSubmit={handleSubmit} autoComplete="off">
      <RegLbl >
        Username
        <RegInput
          type="text"
          name="name"
          placeholder="Enter name"
          required
        />
      </RegLbl>
      <RegLbl >
        Email
        <RegInput
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </RegLbl>
      <RegLbl >
        Password
        <RegInput
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </RegLbl>
      <RegBtn type="submit">Register</RegBtn>
    </RegForm>
  );
};
