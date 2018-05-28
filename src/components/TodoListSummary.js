import React from 'react';

import Button from './Button';

const TodoListSummary = ({
  remaining,
  filter,
  onSetFilter,
  onClearCompleted }) => {

  let word = remaining.length === 1 ? 'item' : 'items';

  return (
    <div className="TodoList__summary">
      <div>
        {remaining.length} {word} left
      </div>
      <div>
        <Button
          id="filter-all"
          currentFilter={filter}
          onSetFilter={onSetFilter}>All</Button>
        <Button
          id="filter-active"
          currentFilter={filter}
          filterToSet="active"
          onSetFilter={onSetFilter}>Active</Button>
        <Button
          id="filter-completed"
          currentFilter={filter}
          filterToSet="completed"
          onSetFilter={onSetFilter}>Completed</Button>
      </div>
      <div>
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