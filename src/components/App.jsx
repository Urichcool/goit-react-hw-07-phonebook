import {
  ContactsContainer,
  PhoneBookTitle,
  ContactsApp,
  ContactsTitle,
} from './App,styled';
import { AppAddContactsForm } from './AppAddContactsForm';
import AppContactsList from './AppContactsList';
import{ThreeDots} from  'react-loader-spinner'
import { AppContactsFilterInput } from './AppContactsFilterInput';
import { useSelector, useDispatch } from 'react-redux';
import { getError, getIsLoading, getContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { AppLoader } from './App,styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts)


  useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])

  return (
    <ContactsContainer>
      <ContactsApp>
        <PhoneBookTitle>Phonebook</PhoneBookTitle>
        <AppAddContactsForm />
        {isLoading && !error && (
          <AppLoader>
            <ThreeDots color="orange" />
          </AppLoader>
        )}
        {contacts.length !== 0 && (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <AppContactsFilterInput />
            <AppContactsList />
          </>
        )}
      </ContactsApp>
    </ContactsContainer>
  );
};
