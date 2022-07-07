import React from 'react';
import s from './Container.module.css';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <section className={s.container}>{children}</section>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
