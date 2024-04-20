import React from "react";
import './App.css';
import {useSelector, useDispatch} from 'react-redux'; 
import { addTodo, deleteTodo, setFilter, toggleTodo } from "./features/todoSlice";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";


function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  const handleAddTodo = text => {
    dispatch(addTodo({text}));
  };

  const handleToggleTodo = id => {
    dispatch(toggleTodo({id}));
  };

  const handleDeleteTodo = id => {
    dispatch(deleteTodo({id}));
  };

  const handleSetFilter = filter => {
    dispatch(setFilter(filter));
  };

  const filteredTodos = () => {
    switch (filter){
      case 'active':
        return todos.filter(todo => !todo.completed);
        case 'completed' :
          return todos.filter(todo => todo.completed);
          default:
            return todos;
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList
        todos={filteredTodos()}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
      <FilterTodo filter={filter} setFilter={handleSetFilter} />
    </div>
  )
}

export default App;