import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 rounded-xl h-full w-[300px] bg-zinc-700 ">
      <div className="flex items-center justify-between px-3 py-2">
        <h3 className="bg-red-700 text-sm my-1 mx-1 px-4 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm my-1 mx-1">{data.taskDate}</h4>
      </div>
      <h2 className="my-1 mx-4 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm my-2 mx-4">{data.taskDescription}</p>
      <div className="flex justify-between mt-4 px-4 ">
        <button className="rounded bg-green-500 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button className=" rounded bg-red-500 py-1 px-2 text-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
