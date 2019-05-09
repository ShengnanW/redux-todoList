import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';
function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
