import { ContactsListItem, ContactsDeleteButton } from './App,styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/contactsSlice';

const AppContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  return (
    <ContactsListItem>
      {name}: {phone}
      <ContactsDeleteButton
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        Delete
      </ContactsDeleteButton>
    </ContactsListItem>
  );
};

export default AppContactsItem;

AppContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
