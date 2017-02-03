import React from 'react';

class AddTodoForm extends React.Component {
  createTodo(event) {
    event.preventDefault();
    const todo = {
      description: this.description.value,
      created: Date.now(),
      due: Date.now(),
      complete: false,
    };
    this.props.addTodo(todo);
    this.todoForm.reset();
  }

  render() {
    return (
      <form
        ref={(input) => this.todoForm = input}
        className="todo-edit"
        onSubmit={(e) => this.createTodo(e)}>
        <textarea
          ref={(input) => this.description = input}
          placeholder="What needs to be done?">
        </textarea>
        <button type="submit">➕</button>
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
}

export default AddTodoForm;
