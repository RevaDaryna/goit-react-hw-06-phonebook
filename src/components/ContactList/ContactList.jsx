import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/ContactsSlice';
import { selectFilter } from 'redux/FilterSlice';
import { delContact } from 'redux/ContactsSlice';

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter))
    
  return (
    <ul>
      {filteredContacts?.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}:{number}
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(delContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export {ContactList}