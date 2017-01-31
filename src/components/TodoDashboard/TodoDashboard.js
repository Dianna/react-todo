import React from 'react';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

class TodoDashboard extends React.Component {
  render() {
    return (
      <div className="todo-dashboard">
        <AddTodoForm/>
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

export default TodoDashboard;
