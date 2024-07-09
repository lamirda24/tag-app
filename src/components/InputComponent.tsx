import { TransformedData } from "@/api/index.type";
import { useIndex } from "@/hooks/index.hook";
import { useePostTags } from "@/hooks/mutations/usePostTags";
import ReactSelectCreatable from "react-select/creatable";

interface InputComponenetProps {
  data: TransformedData[];
  isLoading: boolean;

  isAdd: boolean;
  setIsAdd: any;

  setData?: any;
  setOption?: any;
}

const InputComponent = ({ data, isLoading, setData, isAdd, setIsAdd, setOption }: InputComponenetProps) => {
  const { mutateAsync } = useePostTags();

  const { setSearchValue } = useIndex();

  const handleChange = async (option: any, action: any) => {
    try {
      const { id, value, __isNew__ } = option;
      const res = await mutateAsync({ data: value });
      if (res) {
        setData((prev: any) => [...prev, { id: id ? id : prev?.length + 1, value }]);
        if (__isNew__) setOption((prev: any) => [...prev, { ...option }]);
        setIsAdd(!isAdd);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleChangeInput = (item: string) => {
    setSearchValue(item);
  };

  return (
    <ReactSelectCreatable
      options={data}
      isLoading={isLoading}
      getOptionLabel={(option: any) => option.value}
      getOptionValue={(option) => option?.value}
      onChange={handleChange}
      onInputChange={handleChangeInput}
    />
  );
};

export default InputComponent;
