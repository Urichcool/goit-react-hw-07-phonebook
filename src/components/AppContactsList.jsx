import { ContactsList } from './App,styled';
import AppContactsItem from './AppContactsItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

const AppContactsList = () => {
  const filter = useSelector(selectFilter)
  const contacts = useSelector(getContacts);

  return (
    <ContactsList>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim())
        )
        .map(({ name, id, number }) => (
          <AppContactsItem name={name} key={id} number={number} id={id} />
        ))}
    </ContactsList>
  );
};

export default AppContactsList;
