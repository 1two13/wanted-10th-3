import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';
import { getTodoList } from '../api/todo';
import { Todo } from '../types/types';
import { TodoListContext } from '../hooks/useContext';
import '../css/main.css';

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
  }, [setTodoListData]);

  return (
    <TodoListContext.Provider value={{ todoListData, setTodoListData }}>
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo />
          <TodoList />
        </div>
      </div>
    </TodoListContext.Provider>
  );
};

export default Main;
