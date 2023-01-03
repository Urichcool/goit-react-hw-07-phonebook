import { ContactsListLabel, ContactsFilterInput } from './App,styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const AppContactsFilterInput = () => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <ContactsListLabel>
      Find contacts by name
      <ContactsFilterInput
        type="text"
        name="filter"
        onChange={handleInputChange}
      ></ContactsFilterInput>
    </ContactsListLabel>
  );
};
