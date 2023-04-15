import React, { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmitForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmitForm({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form__data} onSubmit={event => onSubmitHandler(event)}>
      <label className={css.form__text}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </label>
      <label className={css.form__text}>
        Number
        <input
          className={css.form__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={event => setNumber(event.target.value)}
          value={number}
        />
      </label>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
