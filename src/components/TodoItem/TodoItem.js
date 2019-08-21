import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

const CrossLine = () => (
  <View
    style={{
      position: 'absolute',
      height: 2,
      left: 0,
      right: 0,
      top: '50%',
      backgroundColor: 'black',
    }}
  />
);

const TodoItem = props => {
  const {title, done, id} = props.todo;
  const toggleTodo = () => props.toggleTodo(id);
  const removeTodo = () => {
    props.removeTodo(id);
  };
  return (
    <View>
      <ListItem
        onPress={toggleTodo}
        title={title}
        rightIcon={{
          name: 'delete',
          type: 'antdesign',
          onPress: removeTodo,
        }}
      />
      {done && <CrossLine />}
    </View>
  );
};

export default TodoItem;
