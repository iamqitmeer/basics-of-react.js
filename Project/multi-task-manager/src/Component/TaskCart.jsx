import React, { useState } from "react";

function TaskCart({ title, onData, index, deleteMainTask, editMainTask }) {
  let [task, setTask] = useState();
  let [list, setList] = useState([]);
  let [flag, setFlag] = useState(true);
  let [currentIndex, setCurrentIndex] = useState();
  let [isEdited, setIsEdited] = useState(null);

  let handleClick = () => {
    let newArr = [...list];
    newArr.push(task);
    setList(newArr);

    setTask("");
  };

  let deleteTask = (index) => {
    let newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  };

  let editTask = (index) => {
    setIsEdited(index);
    setFlag(false);
    let newArr = [...list];
    setTask(newArr[index]);

    setCurrentIndex(index);
  };
  let updateTask = () => {
    let newArr = [...list];
    newArr[currentIndex] = task;
    setList(newArr);

    setTask("");
    setFlag(true);
    setIsEdited(null);
  };

  return (
    <div className="w-[400px] bg-blue-700 rounded-xl p-6 text-white flex items-center flex-col w-full h-[500px] gap-6 mt-12">
      <div>
        <h1 className="font-black text-4xl">{title}</h1>
      </div>

      <ul className="flex items-center gap-4">
        <li className="cursor-pointer">Comment</li>
        <li onClick={() => editMainTask(index)} className="cursor-pointer">
          Edit
        </li>
        <li onClick={() => deleteMainTask(index)} className="cursor-pointer">
          Delete
        </li>
      </ul>

      <div className="relative w-full">
        <input
          type="text"
          className="w-full block outline-none ps-4 p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="add a new task"
          required=""
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {flag ? (
          <button
            onClick={handleClick}
            className="absolute right-2.5 top-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Task
          </button>
        ) : (
          <button
            onClick={updateTask}
            className="absolute right-2.5 top-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Task
          </button>
        )}
      </div>

      <ul className="flex justify-center flex-col gap-4 w-full px-1 overflow-y-scroll	">
        {list.map((data, index) => {
          return (
            <li
              key={index}
              className={
                isEdited == index
                  ? "bg-blue-950 text-white p-3 font-bold w-full rounded-lg flex justify-between items-center"
                  : "bg-blue-300 text-blue-950 p-3 font-bold w-full rounded-lg flex justify-between items-center"
              }
            >
              <span>{data}</span>
              <div>
                <i
                  onClick={() => deleteTask(index)}
                  className="ri-delete-bin-6-fill text-2xl cursor-pointer"
                ></i>
                <i
                  onClick={() => editTask(index)}
                  className="ri-edit-2-fill text-2xl cursor-pointer"
                ></i>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskCart;
