import { createContext } from 'react';
import { Context } from '../types/contextTypes';

export const ContextList = createContext<Context>({
  todoListData: [],
  searchedData: undefined,
  inputText: '',
  setTodoListData: () => {},
  setSearchedData: () => {},
  setInputText: () => {},
});
