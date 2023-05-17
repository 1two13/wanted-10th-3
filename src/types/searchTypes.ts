export type Query = {
  q: string;
  page?: Number;
  limit?: Number;
};

export type SearchedData = {
  q: string;
  result: Array<String>;
  qty: number;
  total: number;
  page: number;
  limit: number;
};

export type SetSearchedData = (value: SearchedData | undefined) => void;
