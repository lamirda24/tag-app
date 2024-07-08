import { useEffect, useState } from "react";
import { useGetData } from "./queries/useGetData";
import { TransformedData } from "@/api/index.type";

export const useIndex = () => {
  const [data, setData] = useState<TransformedData[] | null>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [serachValue, setSearchValue] = useState<string | null>(null);

  const { data: dataTags, isLoading, isSuccess } = useGetData({ search: serachValue ?? "" });

  useEffect(() => {
    if (isSuccess) {
      setData(dataTags);
    }
  }, [dataTags, isSuccess]);

  return {
    data,
    setData,
    inputValue,
    setInputValue,
    dataTags,
    isLoading
  };
};
