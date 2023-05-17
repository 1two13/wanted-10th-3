import apiRequest from './index';
import { Query } from '../types/searchTypes';

const RESOURCE = '/search';

export const getSearchedList = async ({ q, page }: Query) => {
  try {
    const response = await apiRequest.get(`${RESOURCE}?q=${q}&page=${page}`);

    return response;
  } catch (error) {
    throw new Error('API getTodoList error');
  }
};
