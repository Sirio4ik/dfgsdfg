import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const dispatch = useDispatch();
  console.log(filteredContacts);

  return (
    <ul className={css.contactList}>
      <li className={css.contactListHead}>
        <p className={css.contactListText}>Name</p>
        <p className={css.contactListText}>Phone</p>
      </li>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={css.contactListText}>{name}</p>
          <p className={css.contactListText}>{number}</p>
          <button type="button" className={css.delButton} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
