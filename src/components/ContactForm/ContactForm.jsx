import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';
import { formValidation, inputClean } from 'utils/formValidation.js';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (formValidation(event.currentTarget) === true) {
      const newContactName = event.target.name.value;
      if (contacts.find(contact => contact.name.toLowerCase() === newContactName.toLowerCase())) {
        return alert(`Contact "${newContactName}" is already exists!`);
      }
      dispatch(addContact({ name, number, id: nanoid() }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit} noValidate>
      <label className={css.label}>
        <span className={css.labelText}>Name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="[^A-zА-яЁё'-\+ ()\-]"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter your name"
          onFocus={input => inputClean(input.target)}
          onChange={handleChange}
        />
      </label>
      <label className={css.label}>
        <span className={css.labelText}>Number</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="[^0-9\+ ()\-]"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter your phone number"
          onFocus={input => inputClean(input.target)}
          onChange={handleChange}
        />
      </label>
      <button className={css.submit}>Add contact</button>
    </form>
  );
};
