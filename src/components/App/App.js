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

  render() {
    return (
      <div className="todo-app">
        <TodoDashboard
          todos={this.state.todos}
          loadSamples={this.loadSamples}
        />
      </div>
    );
  }
}

export default App;
