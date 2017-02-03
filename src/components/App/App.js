import React from 'react';
import TodoDashboard from '../TodoDashboard/TodoDashboard';
import './App.css';
import sampleTodos from '../../sample-todos';

class App extends React.Component {
  state = {
    todos: {}
  }

  loadSamples = () => {
    this.setState({
      todos: sampleTodos
    });
  }

  addTodo = (todo) => {
    const todos = {...this.state.todos};
    todos[todo.created] = todo;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-app">
        <TodoDashboard
          todos={this.state.todos}
          loadSamples={this.loadSamples}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
