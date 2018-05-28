import React from 'react';

const TodoItem = ({ item, onUpdate, onRemove }) => {
  let completed = item.completed ? '--complete' : ''

  return (
    <div className="TodoItem">
      <button
        className={`TodoItem__button${completed}`}
        onClick={() => onUpdate(item.id)}
      >
      {
        item.completed
        && <i className="fas fa-check"></i>
      }
      </button>
      <div className={`TodoItem__title${completed}`}>{item.title}</div>
      <button
        className="TodoItem__button--remove" 
        onClick={() => onRemove(item.id)}>X</button>
    </div>
  )
}


export default TodoItem;