import { useEffect, useState } from "react";
import { useGetData } from "./queries/useGetData";
import { TransformedData } from "@/api/index.type";

export const useIndex = () => {
  const [data, setData] = useState<TransformedData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [serachValue, setSearchValue] = useState<string | null>("");
  const [option, setOption] = useState<TransformedData[]>([]);

  const { data: dataTags, isLoading, isSuccess } = useGetData({ search: serachValue ?? "" });

  useEffect(() => {
    if (isSuccess) {
      setData(dataTags);
      setOption(dataTags);
    }
  }, [dataTags, isSuccess]);

  return {
    data,
    setData,
    inputValue,
    setInputValue,
    dataTags,
    isLoading,
    option,
    setOption,
    setSearchValue
  };
};
