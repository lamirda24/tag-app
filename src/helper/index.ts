import { TransformedData } from "@/api/index.type";

export const normalizeCategories = async (data: string[]): Promise<TransformedData[]> => {
  return data?.map((item, index) => ({
    id: index + 1,
    value: item
  }));
};
