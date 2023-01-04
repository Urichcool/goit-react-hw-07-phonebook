import { ContactsListItem, ContactsDeleteButton } from './App,styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

const AppContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <ContactsListItem>
      {name}: {phone}
      <ContactsDeleteButton onClick={() => dispatch(deleteContact(id))}>
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
