import React from 'react';
import TodoDashboard from '../TodoDashboard/TodoDashboard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <TodoDashboard />
      </div>
    );
  }
}

export default App;
