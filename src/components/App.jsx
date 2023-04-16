import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import css from './App.module.css';

const App = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      fontSize: 40,
      color: '#010101',
    }}
  >
    <h1 className={css['primary-title']}>Phonebook</h1>
    <ContactForm />
    <h2 className={css['secondary-title']}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default App;
