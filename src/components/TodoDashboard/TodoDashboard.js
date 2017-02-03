import React from 'react';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

class TodoDashboard extends React.Component {
  renderTodos = (key) => {
    const todo = this.props.todos[key];
    return(
      <div
        className="todo-item"
        key={key}>
        {todo.description}
      </div>
    )
  }

  render() {
    return (
      <div className="todo-dashboard">
        <AddTodoForm addTodo={this.props.addTodo}/>
        <ul className="list-of-todos">
          {
            Object.keys(this.props.todos)
            .map(this.renderTodos)
          }
        </ul>
        <button
        className="load-samples"
        onClick={this.props.loadSamples}
        >
        Load Sample Todos
      </button>
      </div>
    );
  }
}

TodoDashboard.propTypes = {
  todos: React.PropTypes.object.isRequired,
  addTodo: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
}

export default TodoDashboard;
