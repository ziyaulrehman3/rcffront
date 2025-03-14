import React from "react";
import UploadComp from "./UploadComp";
import Input from "./Input";

export default function addThankingPerson() {
  return (
    <div className="w-1/2 mx-auto my-20">
      <h2 className="text-lg font-semibold m-0 mb-0">Add Thanking Person</h2>
      <div className="flex min-h-[200px] w-full gap-8">
        <div className="flex flex-col items-center justify-center">
          <UploadComp />
        </div>
        <div className="h-[200px] w-96 flex flex-col justify-center gap-4">
          <Input type="text" label="Name" placeholder="Enter Name" />
          <Input type="text" label="Position" placeholder="Enter Role" />
          <div className="ml-6 flex justify-start items-center gap-12 mt-0">
            <button className="border bg-transparent w-[140px] font-semibold p-2 mt-2  rounded-full ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
