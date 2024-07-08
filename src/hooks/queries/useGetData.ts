import { getDataTags } from "@/api";
import { GetDataParamsType } from "@/api/index.type";
import { useQuery } from "@tanstack/react-query";

export const useGetData = (data: GetDataParamsType) => {
  return useQuery({
    queryKey: ["get-data", data],
    queryFn: () => getDataTags(data),
    refetchOnWindowFocus: false
  });
};
