import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { Todos } from '../types/types';
import { TodoListContext } from '../hooks/useContext';
import '../css/todoList.css';

const TodoList = () => {
  const { todoListData } = useContext(TodoListContext);

  return todoListData.length ? (
    <ul>
      {todoListData.map(({ id, title }: Todos) => (
        <TodoItem key={String(id)} id={id} title={title} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
