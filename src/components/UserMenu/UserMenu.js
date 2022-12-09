import { useDispatch } from 'react-redux';
import { logOut } from 'redux/AuthRedux/operations';
import { useAuth } from '../Hooks/useAuth';
import { UserBtn, UserMenuBox, WelcomeUser } from './UserMenu.styled';
import { MdLogout } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBox >
      <WelcomeUser >
        <IoMdContact size="25"/> Welcome, {user.name}
      </WelcomeUser>
      <UserBtn type="button" onClick={() => dispatch(logOut())}>
        <MdLogout size="25" /> 
      </UserBtn>
    </UserMenuBox>
  );
};
