import axios from "axios";
import { FetchData, GetDataParamsType } from "./index.type";
import { normalizeCategories } from "@/helper";

const apiUrl = "https://fakestoreapi.com";

export const getDataTags: FetchData = async (props: GetDataParamsType) => {
  const { search } = props;
  const res = await axios.get(`${apiUrl}/products/categories?${search && `search=${search ?? ""}`}`);

  const data = normalizeCategories(res?.data);

  return data ?? [];
};
