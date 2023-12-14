import TodoCounter from './TodoCounter';
import TodoItem from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import React from 'react'

function App() {
  return (
    <div>
    <TodoCounter />
    <TodoSearch />

    <TodoList>
    <TodoItem />
    <TodoItem />
    <TodoItem />
    </TodoList>

    {/* <CreateTodoButton /> */}
    </div>
  )
}





export default App;
