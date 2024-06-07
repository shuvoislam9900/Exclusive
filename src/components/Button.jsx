import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ value, classes, to }) => {
  return (
    <Link to={to} className={` font-popins font-medium text-base bg-komola px-6 lg:px-12 py-2  lg:py-4 rounded text-white inline-block ${classes}`}>
      {value}
    </Link>
  );
};

export default Button
