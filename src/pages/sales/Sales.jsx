import React from "react";
import SimpleAreaChart from "../../component/SimpleAreaChart";

export default function Sales() {
  return (
    <>
      <div className=" mt-20   overflow-x-auto">
        <h1 className="text-[25px] sm:text-4xl mb-14">This year's sales</h1>
        <SimpleAreaChart></SimpleAreaChart>
      </div>
      
    </>
  );
}
