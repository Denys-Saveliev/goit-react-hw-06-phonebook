import React from 'react';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter } from 'redux/contactsSlice';

const ContactList = () => {
  const value = useSelector(getFilter);
  const contacts = useSelector(state =>
    state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
  );

  const dispath = useDispatch();
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button className={s.btn} onClick={() => dispath(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
