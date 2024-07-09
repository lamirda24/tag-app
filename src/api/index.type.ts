export interface GetDataParamsType {
  search?: string;
}

export type TransformedData = {
  id: number;
  value: string;
};
export type PayloadData = {
  data: string;
};

export type FetchData = (args: GetDataParamsType) => Promise<TransformedData[]>;

export type PostData = (args: PayloadData) => Promise<TransformedData>;
