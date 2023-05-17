import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import Dropdown from '../components/Dropdown';
import { Todo } from '../types/todoTypes';
import { SearchedData } from '../types/searchTypes';
import { getTodoList } from '../api/todo';
import { ContextList } from '../hooks/useContext';
import '../css/main.css';

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);
  const [searchedData, setSearchedData] = useState<SearchedData | undefined>();
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, [setTodoListData]);

  return (
    <ContextList.Provider
      value={{
        todoListData,
        setTodoListData,
        searchedData,
        setSearchedData,
        inputText,
        setInputText,
      }}
    >
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo />
          <Dropdown />
          <TodoList />
        </div>
      </div>
    </ContextList.Provider>
  );
};

export default Main;
