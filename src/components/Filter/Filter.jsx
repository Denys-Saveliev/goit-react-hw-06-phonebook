import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onSearch }) => (
  <input
    className={s.input}
    placeholder="Find contacts by name"
    type="text"
    value={value}
    onChange={onSearch}
  />
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
