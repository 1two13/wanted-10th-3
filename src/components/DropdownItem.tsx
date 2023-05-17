import React, { useCallback, useState, useContext } from 'react';

import { createTodo } from '../api/todo';
import { Todo } from '../types/todoTypes';
import { ContextList } from '../hooks/useContext';
import '../css/dropdownItem.css';
import { ERROR_ALERT_MESSAGE } from '../static/constants';

const DropdownItem = ({ todo }: { todo: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { todoListData, setTodoListData, inputText, setInputText, setSearchedData } =
    useContext(ContextList);
  const parts = todo.split(new RegExp(`(${inputText})`, 'gi'));

  const clickHandler = useCallback(async () => {
    try {
      const { data } = await createTodo({ title: todo });

      setTodoListData((prev: Todo[]) => [...prev, data]);
      setInputText('');
      setSearchedData(undefined);
    } catch (error) {
      console.error(error);
      alert(ERROR_ALERT_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  }, [todoListData]);

  return (
    <div className="item" onClick={clickHandler}>
      {parts.map((part: string, idx: number) =>
        part.toLowerCase() === inputText.toLowerCase() ? (
          <span className="item-highlight" key={inputText + idx}>
            {part}
          </span>
        ) : (
          part
        )
      )}
    </div>
  );
};

export default DropdownItem;
