import React from "react";
import Header from "../Others/Header";
import TaskBoard from "../Others/TaskBoard";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 min-h-screen bg-gray-900 text-white">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskBoard data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
