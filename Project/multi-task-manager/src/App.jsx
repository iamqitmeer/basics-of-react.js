import React, { useState } from "react";
import "./App.css";
import TaskCart from "./Component/TaskCart";

function App() {
  let [taskName, setTaskName] = useState("");
  let [createTask, setCreateTask] = useState([]);
  let [existErr, setExistErr] = useState("");

  let handleClick = () => {
    let newArr = [...createTask];
    if (newArr.includes(taskName)) {
      setExistErr("Name Already Exist.");
    } else {
      newArr.push(taskName);
      setCreateTask(newArr);
      setTaskName("");
      setExistErr("");
    }
  };

  function deleteMainTask(index) {
    let newArr = [...createTask]
    newArr.splice(index,1)
    setCreateTask(newArr)
    // console.log("Clicked", index);
  }

  return (
    <div className="flex items-center p-14 flex-col w-full h-screen gap-6">
      <div>
        <h1 className="text-4xl font-black">Multiple Task Manager</h1>
      </div>
      <div className="m-4 w-[1200px] ">
        <div className="relative w-[60%] m-0 m-auto">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="w-full block outline-none ps-4 p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="create your task container"
            required
          />
          <button
            onClick={handleClick}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Task
          </button>
        </div>
        <div className="ml-60 w-[20%]">
          <span className="text-red-700 ml-4 text-sm">{existErr}</span>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-12">
          {createTask.map((data, index) => {
            return <TaskCart deleteMainTask={deleteMainTask} key={index} index={index} title={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
