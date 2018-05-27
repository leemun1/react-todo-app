import React from 'react';

const TodoListSummary = ({ todos, foo, onClearCompleted }) => {
  let word = todos.length === 1 ? 'item' : 'items'
  return (
    <div className="TodoList__summary">
      <span>{todos.length} {word} left</span>
      <div>
        <button 
          className="TodoList__filter"
          onClick={foo}
        >
          All
        </button>
        <button 
          className="TodoList__filter"
          onClick={foo}
        >
          Active
        </button>
        <button 
          className="TodoList__filter"
          onClick={foo}
        >
          Completed
        </button>
        <button 
          className="TodoList__clear"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default TodoListSummary;