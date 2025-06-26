import { useSelector } from 'react-redux';
import ContactItem from '../Contact/Contact';
import styles from './ContactList.module.css';

import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && <p className={styles.message}>Завантаження...</p>}
      {error && <p className={styles.error}>Помилка: {error}</p>}

      <ul className={styles.list}>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
