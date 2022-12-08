import { ContactForm } from '../components/ContactForm/ContactForm';
import  ContactList  from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

// export default function Contacts () {
//     return <>
//         <h1>Phonebook</h1>
//         <ContactForm/>

//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//     </>
// }

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
import { fetchContacts } from '../redux/ContactsRedux/operations';
import { getIsLoading } from '../redux/ContactsRedux/selector';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactList />
    </>
  );
}

