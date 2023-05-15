import { createContext } from 'react';
import { TodoListDataContext } from '../types/types';

export const TodoListContext = createContext<TodoListDataContext>({
  todoListData: [],
  setTodoListData: () => {},
});
