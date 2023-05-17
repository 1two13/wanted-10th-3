import { Todo, SetTodos } from './todoTypes';
import { SearchedData, SetSearchedData } from './searchTypes';

export type Context = {
  todoListData: Todo[];
  searchedData: SearchedData | undefined;
  inputText: string;
  setTodoListData: SetTodos;
  setSearchedData: SetSearchedData;
  setInputText: (value: string) => void;
};
