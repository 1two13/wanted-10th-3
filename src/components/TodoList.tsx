import React from 'react';

import TodoItem from './TodoItem';
import { TodoListProps, Todos } from '../types/types';

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }: Todos) => (
        <TodoItem key={String(id)} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};
export default TodoList;
