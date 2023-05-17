import React, { useContext, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

import DropdownItem from './DropdownItem';
import { ContextList } from '../hooks/useContext';
import useThrottle from '../hooks/useThrottle';
import { getSearchedList } from '../api/search';
import { ERROR_ALERT_MESSAGE } from '../static/constants';
import '../css/dropdown.css';

const ALLOW_SCROLL_END = 10;

const Dropdown = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { searchedData, setSearchedData } = useContext(ContextList);

  const onScrollDropdown = async (e: React.UIEvent<HTMLDivElement>) => {
    if (result.length >= total) return;

    const target = e.target as HTMLDivElement;
    const { scrollHeight, scrollTop, clientHeight } = target;

    if (clientHeight + scrollTop >= scrollHeight - ALLOW_SCROLL_END) {
      await getMoreCommendData();
    }
  };

  const throttleScroll = useThrottle<[React.UIEvent<HTMLDivElement>]>(onScrollDropdown, 700);

  if (!searchedData?.result) {
    return <></>;
  }

  const { result, q, total, page } = searchedData;

  const getMoreCommendData = async () => {
    try {
      setIsLoading(true);

      const { data } = await getSearchedList({
        q,
        page: page + 1,
      });

      setSearchedData({
        ...searchedData,
        ...data,
        result: [...searchedData.result, ...data.result],
        qty: searchedData.qty + data.qty,
      });
    } catch (error) {
      console.error(error);
      alert(ERROR_ALERT_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return result && result.length > 0 ? (
    <div className="dropdown-container" onScroll={throttleScroll}>
      {result.map((todo: string, q: number) => (
        <DropdownItem key={todo + q} todo={todo} />
      ))}
      {searchedData.result.length < total ? (
        isLoading ? (
          <FaSpinner className="dropdown-spinner" />
        ) : (
          <div className="empty-list">...</div>
        )
      ) : null}
    </div>
  ) : (
    <></>
  );
};

export default Dropdown;
