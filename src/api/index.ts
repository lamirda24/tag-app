import axios from "axios";
import { FetchData, GetDataParamsType, PostData } from "./index.type";
import { normalizeCategories } from "@/helper";

const apiUrl = "https://fakestoreapi.com";

export const getDataTags: FetchData = async (props: GetDataParamsType) => {
  const { search } = props;
  const res = await axios.get(`${apiUrl}/products/categories?${search && `search=${search ?? ""}`}`);

  const data = normalizeCategories(res?.data);

  return data ?? [];
};

export const postDataTags: PostData = async ({ data }) => {
  const res = await axios.post(`${apiUrl}/carts`, data);
  return res.data;
};

export const deleteTag = async (data: string) => {
  console.log(data);

  const res = await axios.delete(`${apiUrl}/carts/${data}`);
  return res.data;
};
