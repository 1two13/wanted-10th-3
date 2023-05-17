import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FaSpinner, FaSearch } from 'react-icons/fa';

import { createTodo } from '../api/todo';
import { getSearchedList } from '../api/search';
import { ContextList } from '../hooks/useContext';
import useFocus from '../hooks/useFocus';
import useDebounce from '../hooks/useDebounce';
import { Todo } from '../types/todoTypes';
import '../css/inputTodo.css';
import { DEBOUNCE_LIMIT_TIME, ERROR_ALERT_MESSAGE, EMPTY_ALERT_MESSAGE } from '../static/constants';

const InputTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { ref, setFocus } = useFocus();
  const { inputText, setInputText, setTodoListData, setSearchedData } = useContext(ContextList);
  const debounceValue = useDebounce(inputText, DEBOUNCE_LIMIT_TIME);

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert(EMPTY_ALERT_MESSAGE);
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodoListData((prev: Todo[]) => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert(ERROR_ALERT_MESSAGE);
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText]
  );

  useEffect(() => {
    if (inputText.length === 0) setSearchedData(undefined);

    const api = async () => {
      try {
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert(EMPTY_ALERT_MESSAGE);
        }

        const { data } = await getSearchedList({ q: inputText, page: 1 });
        setSearchedData(data);
      } catch (error) {
        console.error(error);
        alert(ERROR_ALERT_MESSAGE);
      } finally {
        setIsLoading(false);
      }
    };

    if (debounceValue) api();
  }, [debounceValue]);

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <button className="input-submit">
        <FaSearch className="search" />
      </button>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? '' : <FaSpinner className="spinner" />}
    </form>
  );
};

export default InputTodo;
