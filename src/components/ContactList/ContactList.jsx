import ContactElement from './ContactElement';
import css from './Contact.module.css';
import { deleteContact } from 'store/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = ({}) => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onDeleteHandler = (event, id) => {
    event.preventDefault();
    dispatch(deleteContact(id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <ContactElement
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteHandler={event => onDeleteHandler(event, contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
