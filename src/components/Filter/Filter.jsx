import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispath = useDispatch();

  return (
    <input
      className={s.input}
      placeholder="Find contacts by name"
      type="text"
      value={value}
      onChange={e => dispath(changeFilter(e.target.value))}
    />
  );
};
export default Filter;
