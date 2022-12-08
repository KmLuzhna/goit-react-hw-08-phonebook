// import {ContactForm} from './ContactForm/ContactForm';
// import {Filter} from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
// import { Wrapper } from './ContactForm/Base.styled';

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";

// export const App = () => {
//   const store = useSelector(state => state)
//   console.log(store)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);
//  return (
//       <Wrapper>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contacts</h2>
//         <Filter />
//           <ContactList />
//       </Wrapper>
//     );

// };
import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from './Hooks/useAuth';
// import { lazy } from 'react';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { Route, Routes } from "react-router-dom";
import { refreshUser } from 'redux/AuthRedux/operations';



// const Contacts = lazy(() => import('../pages/Contacts'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Layout = lazy(() => import('./Layout'));


export const App = () => {
  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path='/' element={< Layout/>}>
            <Route path="/register"
              element={<RestrictedRoute redirectTo="/contacts" component={<Register/>}/>} />
            <Route path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<Login/>}/>} />
            <Route path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<Contacts/>}/>} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>

    </>
  );
};
