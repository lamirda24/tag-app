import { getDataTags } from "@/api";
import { GetDataParamsType } from "@/api/index.type";
import { useQuery } from "@tanstack/react-query";

export const useGetData = ({ search }: GetDataParamsType) => {
  return useQuery({
    queryKey: ["get-data", search],
    queryFn: () => getDataTags({ search }),
    refetchOnWindowFocus: false
  });
};
