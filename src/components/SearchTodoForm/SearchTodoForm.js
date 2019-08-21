import React from 'react';
import {Input} from 'react-native-elements';
import useInput from '../../hooks/input';

const SearchTodoForm = props => {
  const [searchTerm, bindSearchTerm] = useInput('', props.onSubmit);
  return <Input placeholder="Search todo..." {...bindSearchTerm} />;
};

export default SearchTodoForm;
