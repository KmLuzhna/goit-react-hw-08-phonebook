// import { NavLink } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import { ContactPage } from './Navigation.styled';
import { RiContactsFill } from 'react-icons/ri';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && (
        <ContactPage to="/contacts">
          <RiContactsFill size="25" />  Contacts
        </ContactPage>
      )}
    </nav>
  );
};