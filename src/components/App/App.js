import React from 'react';
import './App.css';
import TodoDashboard from '../TodoDashboard/TodoDashboard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoDashboard />
      </div>
    );
  }
}

export default App;
