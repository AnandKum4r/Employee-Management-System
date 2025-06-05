import React from "react";

const TaskBoard = ({ data }) => {
  // console.log("TaskBoard component rendered");

  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-lime-600">
        <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-teal-600">
        <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-violet-600">
        <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-sky-600">
        <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskBoard;
