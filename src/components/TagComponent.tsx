"use client";

import { useIndex } from "@/hooks/index.hook";
import React, { useState } from "react";

import InputComponent from "./InputComponent";
import { useDeleteTag } from "@/hooks/mutations/useDeleteTag";

const TagComponent = () => {
  const [add, setAdd] = useState<boolean>(false);

  const { data, setData, isLoading, option, setOption } = useIndex();
  const { mutateAsync } = useDeleteTag();

  const handleDelete = async (item: any) => {
    try {
      const res = await mutateAsync(item);
      if (res) {
        const tempData = data?.filter((data) => data?.id !== item);
        setData(tempData);
      }
    } catch (e: any) {
      console.log(e);
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
                <div className="border border-1 border-[blue] rounded-xl p-2 flex items-center gap-4">
                  <p>{item?.value}</p>
                  <button className="hover:bg-gray-600 w-[20px] h-auto rounded-full" onClick={() => handleDelete(item.id)}>
                    x
                  </button>
                </div>
                {index === data?.length - 1 && (
                  <>
                    {add && (
                      <InputComponent data={option} setData={setData} isLoading={isLoading} isAdd={add} setIsAdd={setAdd} setOption={setOption} />
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
