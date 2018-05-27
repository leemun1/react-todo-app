import React from 'react';

class Input extends React.Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const onSubmit = this.props.onSubmit;

    return (
      <form className="TodoInputForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          name="newTodo"
          autoComplete="off"
          ref={node => {this.input = node}}
        />
      </form>
    )
  }
}  

export default Input;