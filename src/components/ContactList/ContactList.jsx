import { ButtonDelete, ContactEl, ContactsText, NewContactsList } from './ContactList.styled';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from '../../redux/ContactsRedux/selector';
import { deleteContact } from "redux/ContactsRedux/operations"
import { RiDeleteBin2Fill } from 'react-icons/ri';


export default function ContactList(task) {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const visibleContacts = () => {
        if (!filter) {
            return contacts;
        }
        
        return contacts.filter(({name}) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
    }

    const getVisibleContacts = visibleContacts()
    
    return (
        <NewContactsList>
            {getVisibleContacts.map((item) =>(
                <ContactEl key={item.id}>
                    <ContactsText>
                        {item.name}: {item.number}
                    </ContactsText>
                    <ButtonDelete
                        type="button"
                        onClick={() => dispatch(deleteContact(item.id))}
                    >
                        <RiDeleteBin2Fill size="25" />
                    </ButtonDelete>
                </ContactEl>
            ))}
        </NewContactsList>
    );
}
