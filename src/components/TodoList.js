import React from 'react';
import uuid from 'uuid';

import Input from './Input';
import TodoItem from './TodoItem';
import TodoListSummary from './TodoListSummary';

class TodoList extends React.Component {
  state = {
    todos: [],
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
    console.log(updatedTodo);
  }

  onRemove = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  onClearCompleted = () => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => !todo.completed)
    this.setState({ todos: newTodos });
  }

  foo = () => {
    console.log('bar');
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="TodoList">
        <Input onSubmit={this.onAddTodo} />
        {
          todos.map(item =>
            <TodoItem 
              key={item.id} 
              item={item} 
              onUpdate={this.onUpdate}
              onRemove={this.onRemove}/>
          )
        }
        { 
          todos.length >= 1 
          && <TodoListSummary 
              todos={todos}
              foo={this.foo}
              onClearCompleted={this.onClearCompleted}/>
        
        }
      </div>
    )
  }
}

export default TodoList;