import ContactForm from './ContactForm';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';
import css from './App.module.css';
import { addContact, deleteContact } from 'store/contactsSlice';
import { filterContacts } from 'store/filterSlice';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onSubmitForm = formData => {
    contacts.find(
      item => item.name.toLowerCase() === formData.name.toLowerCase()
    )
      ? alert(`${formData.name} is already in contacts`)
      : dispatch(addContact(formData));
  };

  const onFilterHandler = event => {
    dispatch(filterContacts(event.target.value));
  };

  const onDeleteHandler = (event, id) => {
    event.preventDefault();
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
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
      <ContactForm onSubmitForm={onSubmitForm} />
      <h2 className={css['secondary-title']}>Contacts</h2>
      <Filter filter={filter} onFilterHandler={onFilterHandler} />
      <ContactList
        contacts={filteredContacts}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};

export default App;
