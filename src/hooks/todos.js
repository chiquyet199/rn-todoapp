import {useState, useEffect} from 'react';
import {newId} from '../utils';

const useTodos = (initTodos = {}) => {
  const [todos, setTodos] = useState(initTodos);
  const [displayTodos, setDisplayTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let newDisplayTodos = Object.keys(todos).reduce((result, key) => {
      const todoItem = todos[key];
      if (!todoItem || todoItem.title === '') {
        return result;
      }
      result.push(todoItem);
      return result;
    }, []);
    const matchSearchTerm = todoItem => {
      const todoTitle = todoItem.title.trim().toLowerCase();
      return todoTitle.includes(searchTerm.trim().toLowerCase());
    };
    newDisplayTodos = newDisplayTodos.filter(matchSearchTerm);
    setDisplayTodos(newDisplayTodos);
  }, [todos, searchTerm]);

  const addTodo = ({title}) => {
    const id = newId();
    const newTodo = {title, id: newId(), done: false};
    const newTodos = {...todos, [id]: newTodo};
    setTodos(newTodos);
  };

  const removeTodo = todoId => {
    const todo = todos[todoId];
    if (!todo) {
      return;
    }
    const newTodos = {...todos, [todoId]: undefined};
    setTodos(newTodos);
  };

  const toggleTodo = todoId => {
    const todo = todos[todoId];
    if (!todo) {
      return;
    }
    const newTodo = {...todo, done: !todo.done};
    const newTodos = {...todos, [todoId]: newTodo};
    setTodos(newTodos);
  };

  const searchTodo = str => {
    setSearchTerm(str);
  };

  return {
    displayTodos,
    addTodo,
    removeTodo,
    toggleTodo,
    searchTodo,
  };
};

export default useTodos;
