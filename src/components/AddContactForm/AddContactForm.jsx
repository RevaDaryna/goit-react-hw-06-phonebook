import css from './AddContactForm.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/ContactsSlice';
import { selectContacts } from 'redux/ContactsSlice';


export default function AddContactForm(){
  
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget
    const name = form.elements.name.value
    const number = form.elements.number.value

    
    let contactExists = false;
    
    if(contacts.some(contact => contact.name === name)){
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(name, number))
      form.reset();
    }
    
  }

  return (
          <form onSubmit={handleSubmit} className={css.form}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
    
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
    
            <button type="submit" className={css.formbtn}>
              Add contact
            </button>
          </form>
        )
}

