import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {AddTodoForm, SearchTodoForm, TodoList} from './components';
import useTodos from './hooks/todos';

const viewPadding = 10;

const App = () => {
  const todosProps = useTodos();

  return (
    <View style={[styles.container]}>
      <Text h1>Todo App</Text>
      <AddTodoForm onSubmit={todosProps.addTodo} />
      <SearchTodoForm onSubmit={todosProps.searchTodo} />
      <TodoList {...todosProps} todos={todosProps.displayTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: viewPadding,
    paddingTop: 40,
  },
  list: {
    width: '100%',
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18,
  },
  hr: {
    height: 1,
    backgroundColor: 'gray',
  },
  listItemCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    width: '100%',
  },
});

export default App;
