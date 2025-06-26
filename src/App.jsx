import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsOps';
import { selectLoading, selectError } from '../redux/contactsSlice';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

import styles from './App.module.css'; 

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Книга контактів</h1>

      <ContactsForm />
      <SearchBox />

      {loading && <p className={styles.loading}>Завантаження контактів...</p>}
      {error && <p className={styles.error}>Помилка: {error}</p>}

      <ContactList />
    </div>
  );
};

export default App;
