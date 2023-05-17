import React, { useCallback, useState, useContext } from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';

import { deleteTodo } from '../api/todo';
import { Todos, Todo } from '../types/todoTypes';
import { ContextList } from '../hooks/useContext';
import { ERROR_ALERT_MESSAGE } from '../static/constants';
import '../css/todoItem.css';

const TodoItem = ({ id, title }: Todos) => {
  const [isLoading, setIsLoading] = useState(false);
  const { setTodoListData } = useContext(ContextList);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodoListData((prev: Todo[]) => prev.filter((item: Todo) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert(ERROR_ALERT_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodoListData]);

  return (
    <li className="todo-item">
      <span>{title}</span>
      <div className="todo-item-option">
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
