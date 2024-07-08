export interface GetDataParamsType {
  search?: string;
}

export type TransformedData = {
  id: number;
  value: string;
};

export type FetchData = (args: GetDataParamsType) => Promise<TransformedData[]>;
