import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { initialContacts } from './data/initialContacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    const stored = localStorage.getItem('contacts');
    return stored ? JSON.parse(stored) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts((prev) => [...prev, contactWithId]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
