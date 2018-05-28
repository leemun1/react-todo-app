import React from 'react';

const Button = ({ 
  currentFilter, 
  filterToSet ='', 
  onSetFilter,
  children }) => {

  const activeFlag = currentFilter === filterToSet ? '--active' : '--inactive'

  return (
    <button
    className={`TodoList__filter${activeFlag}`}
    onClick={() => onSetFilter(filterToSet)}
    >
    {children}
    </button>
  )
}

export default Button;