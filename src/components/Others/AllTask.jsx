import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  // console.log("AllTask component rendered");
  const authData = useContext(AuthContext);

  return (
    <div className="p-5 mt-5 rounded bg-gray-900 ">
      {/* Header Row */}
      <div className="bg-blue-900 text-lg font-medium rounded flex justify-between mb-2 py-2 px-4">
        <h2 className="w-1/5  ">Employee Name</h2>
        <h3 className="w-1/5  ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5  ">Completed</h5>
        <h5 className="w-1/5  ">Failed</h5>
      </div>

      {/* Employee Rows */}
      <div className=" space-y-2">
        {authData.employees.map(function (elem,idx) {
          return (
            <div key={idx} className="bg-gray-900 text-lg font-medium  border border-teal-500 hover:bg-gray-800 rounded flex justify-between py-2 px-4 transition">
              <h2 className="w-1/5 !text-white ">{elem.name}</h2>
              <h3 className="w-1/5 !text-yellow-200">
                {elem.taskStats.newTask}
              </h3>
              <h5 className="w-1/5 !text-cyan-300">{elem.taskStats.active}</h5>
              <h5 className="w-1/5 !text-emerald-300">
                {elem.taskStats.completed}
              </h5>
              <h5 className="w-1/5 !text-rose-400">{elem.taskStats.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
