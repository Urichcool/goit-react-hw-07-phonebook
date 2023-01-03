import {
  ContactsAddForm,
  ContactsAddButton,
  ContactsListLabel,
} from './App,styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';
import { addContact } from 'redux/operations';

export const AppAddContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleFormSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements[0].value;
    const number = e.currentTarget.elements[1].value;

    if (contacts.some(contact => contact.name === name)) {
      window.alert(`${name} is already in contacts`);
      e.currentTarget.reset();
      return;
    }
    dispatch(
      addContact({
        name: name,
        id: nanoid(),
        number: number,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <ContactsAddForm autoComplete="off" onSubmit={handleFormSubmit}>
      <ContactsListLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactsListLabel>
      <ContactsListLabel>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactsListLabel>
      <ContactsAddButton type="submit">Add contact</ContactsAddButton>
    </ContactsAddForm>
  );
};
