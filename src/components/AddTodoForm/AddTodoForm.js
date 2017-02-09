import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

class AddTodoForm extends React.Component {
  constructor() {
    super();
    // DatePicker requires value from state?
    this.state = {
      today: new Date().toISOString(),
      todayFormatted: new Date().toISOString().slice(0,10),
      value: new Date().toISOString(),
    }
    console.log(this.state.todayFormatted);
  }

  createTodo(event) {
    event.preventDefault();
    console.log(this.state.value);
    const todo = {
      description: this.description.value,
      created: new Date().toISOString(),
      due: this.state.value,
      complete: false,
    };
    this.props.addTodo(todo);
    this.todoForm.reset();
    this.handleChange(this.state.today, this.state.todayFormatted);
  }

  handleChange = (value, formattedValue) => {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016" 
    });
  };

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
        <DatePicker
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">➕</button>
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
}

export default AddTodoForm;
