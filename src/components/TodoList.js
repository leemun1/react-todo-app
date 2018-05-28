import React from 'react';
import uuid from 'uuid';

import Input from './Input';
import TodoItem from './TodoItem';
import TodoListSummary from './TodoListSummary';

class TodoList extends React.Component {
  state = {
    todos: [],
    filter: '',
  }

  onAddTodo = (event) => {
    const { todos } = this.state;

    let newTodo = {
      id: uuid(),
      title: event.target.newTodo.value,
      completed: false
    }

    this.setState({
      todos: [
        ...todos,
        newTodo
      ]
    })

    event.target.newTodo.value = ''
    event.preventDefault();
  }

  onUpdate = (id) => {
    const { todos } = this.state;
    let i = todos.findIndex(todo => todo.id === id);
    let status = todos[i].completed
    let updatedTodo = {
      ...todos[i],
      completed: !status
    }
    this.setState({
      todos: [
        ...todos.slice(0, i),
        updatedTodo,
        ...todos.slice(i + 1)
      ]
    });
  }

  onRemove = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  onSetFilter = (filter='') => {
    if (filter === 'active') {
      this.setState({ filter: 'active'})
    } else if (filter === 'completed') {
      this.setState({ filter: 'completed'})
    } else {
      this.setState({ filter: ''})
    }
  }

  onClearCompleted = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.completed)
    this.setState({ todos: newTodos });
  }

  filterTodos = (todos, filter) => {
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed)
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.completed)
    } else {
      return todos
    }
  }

  render() {
    const { todos, filter } = this.state;
    const todosRemaining = todos.filter(todo => !todo.completed)
    const filteredTodos = this.filterTodos(todos, filter);
    
    return (
      <div className="TodoList">
        <Input onSubmit={this.onAddTodo} />
        { filteredTodos.map(item =>
            <TodoItem 
              key={item.id} 
              item={item} 
              onUpdate={this.onUpdate}
              onRemove={this.onRemove}/>
          )
        }
        { todos.length >= 1 
          && <TodoListSummary 
              filter={filter}
              remaining={todosRemaining}
              onSetFilter={this.onSetFilter}
              onClearCompleted={this.onClearCompleted}/> 
        }
      </div>
    )
  }
}

export default TodoList;