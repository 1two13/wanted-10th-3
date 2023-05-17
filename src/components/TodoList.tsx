import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { Todos } from '../types/todoTypes';
import { ContextList } from '../hooks/useContext';

const TodoList = () => {
  const { todoListData } = useContext(ContextList);

  return todoListData.length ? (
    <ul>
      {todoListData.map(({ id, title }: Todos) => (
        <TodoItem key={String(id)} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <></>
  );
};
export default TodoList;
