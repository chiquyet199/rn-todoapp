import React from 'react';
import {Input} from 'react-native-elements';
import useInput from '../../hooks/input';

const AddTodoForm = props => {
  const [newTodo, bindNewTodo, clearForm] = useInput('');
  const onSubmit = () => {
    if (!newTodo) {
      return;
    }
    props.onSubmit({title: newTodo});
    clearForm();
  };
  return (
    <Input
      placeholder="Add new todo..."
      {...bindNewTodo}
      rightIcon={{name: 'checkcircle', type: 'antdesign', onPress: onSubmit}}
    />
  );
};

export default AddTodoForm;
