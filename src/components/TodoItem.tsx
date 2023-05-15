import React, { useCallback, useState, useContext } from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';

import { deleteTodo } from '../api/todo';
import { Todos, Todo } from '../types/types';
import { TodoListContext } from '../hooks/useContext';
import '../css/todoItem.css';

const TodoItem = ({ id, title }: Todos) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setTodoListData } = useContext(TodoListContext);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodoListData((prev: Todo[]) => prev.filter((item: Todo) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodoListData]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
