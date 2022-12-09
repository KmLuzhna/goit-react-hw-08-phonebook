// import { NavLink } from 'react-router-dom';
import { AuthBox, AuthEl, AuthLink, AuthList, WelcomeText } from './AuthNav.styled';
import { SlLogin } from 'react-icons/sl';
import { SlPeople } from 'react-icons/sl';

export const AuthNav = () => {
  return (
    <AuthBox>
      <div>
        <WelcomeText>Welcome to Contact Book !</WelcomeText>
      </div>
      <AuthList>
        <AuthEl>
          <AuthLink to="/register">
            <SlPeople /> Register
          </AuthLink>
        </AuthEl>
        <AuthEl>
          <AuthLink to="/login">
            <SlLogin /> Log In
          </AuthLink>
        </AuthEl>
      </AuthList>
    </AuthBox>
    
  );
};
