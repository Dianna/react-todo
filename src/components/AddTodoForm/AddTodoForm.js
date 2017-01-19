import React from 'react';

class AddTodoForm extends React.Component {

  render() {
    return (
      <form
        ref={(input) => this.todoForm = input}
        className="todo-edit">
        <textarea
          ref={(input) => this.desc = input}
          placeholder="What needs to be done?">
        </textarea>
      </form>
    );
  }
}

export default AddTodoForm;
