import React from 'react';
import {FlatList} from 'react-native';
import {TodoItem} from '../../components';

const TodoList = props => {
  const {todos, toggleTodo, removeTodo} = props;
  const renderTodoItem = ({item}) => (
    <TodoItem
      key={item.id}
      todo={item}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  );
  return (
    <FlatList
      style={{width: '100%'}}
      data={todos}
      renderItem={renderTodoItem}
    />
  );
};

export default TodoList;
