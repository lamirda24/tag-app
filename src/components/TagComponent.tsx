"use client";

import { TransformedData } from "@/api/index.type";
import { useIndex } from "@/hooks/index.hook";
import React, { useState } from "react";
import ReactSelect from "react-select";
import ReactSelectCreatable from "react-select/creatable";

const TagComponent = () => {
  const [add, setAdd] = useState<boolean>(false);

  const { data, inputValue, setInputValue } = useIndex();

  const handleChange = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleOnBlur = (e: any) => {
    const { value } = e.target;
    console.log(e.target.value);
    return;

    const payload: TransformedData = {
      id: Math.floor(Math.random() * 100),
      value
    };
    if (value) {
      data?.push(payload);
      setAdd(false);
      setInputValue("");
    }
  };
  return (
    <div className="flex w-full max-w-2xl h-[100vh] bg-red-50 mx-auto flex-col">
      <div className="flex flex-col mt-[40px] px-[25px]">
        <div className="flex flex-col gap-1">
          <p>Tags</p>
          <div className="w-full border border-1 border-green-600 rounded-xl py-[8px] px-[12px] flex flex-row items-center gap-[10px] flex-wrap h-fit-content">
            {data?.map((item, index: number) => (
              <>
                <div className="border border-1 border-[blue] rounded-xl p-2">{item?.value}</div>
                {index === data?.length - 1 && (
                  <>
                    {add && (
                      <InputComponent data={data} onClick={() => {}} handleOnBlur={handleOnBlur} handleChange={handleChange} value={inputValue} />
                    )}
                    <button onClick={() => setAdd(true)}>+</button>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagComponent;

const InputComponent = ({ data, isLoading, onClick, handleChange, handleOnBlur, value }: any) => {
  return (
    <ReactSelectCreatable
      options={data}
      getOptionLabel={(option: any) => option.value}
      getOptionValue={(option) => option?.value}
      onBlur={handleOnBlur}
    />
  );
};
