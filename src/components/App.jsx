import  AddContactForm  from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/ContactsSlice';

export default function App (){

  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  
      return (
        <>
        <Title title="Phonebook" />
        <AddContactForm />
        <Title title="Contacts" />
        {contacts.length !== 0 ? (
          <>
          <Filter />
          <ContactList />
          </>
        ) : (
          <NotificationMessage />
        )}
          
        </>
      )
      


}

