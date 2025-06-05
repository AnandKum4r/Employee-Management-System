import React, { use, useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(taskTitle, taskDescription, taskDate, assignTo, category);
    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      assignTo,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));
    
    data.forEach((elem) => {
      if (assignTo === elem.name) {
        elem.tasks.push(newTask);
        elem.taskStats.newTask = elem.taskStats.newTask + 1;
        // console.log(elem);

        // elem.taskStats.newTask += 1;
      } 
    });
    localStorage.setItem("employees", JSON.stringify(data));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div>
      <div className="p-5 bg-gray-900 rounded-lg mt-7">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-wrap w-full items-start justify-between"
          action=""
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make UI Design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="Date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Employee Name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Design, Dev, Etc"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="w-full h-58 text-sm px-4 rounded outline-none bg-transparent border-[1px] border-gray-400
            "
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-emerald-700 py-3 hover:bg-emerald-800 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
