import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <div className={css.details}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
      </div>
      <button onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
