import React from "react";
import { Searchbar } from "./Searchbar";
import { TestUI } from "../MUI/TestUI";
import { ChartUI } from "../Charts/ChartUI";

export const UITemplate = () => {
  return (
    <div className="max-w-[1200px] min-h-[100vh] w-[100%] border-2 text-white flex flex-col justify-evenly items-center">
      <Searchbar />
      <div className="max-w-[800px] w-[100%] p-2">
        <TestUI />
      </div>
      <div className="max-w-[800px] w-[100%] p-2">
        <ChartUI />
      </div>
    </div>
  );
};
