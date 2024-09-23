import React, { useState } from "react";

function Abc() {
  let [task, setTask] = useState(() => {
    let getTask = localStorage.getItem("task");
    if (getTask) {
      return JSON.parse(getTask);
    } else {
      return [];
    }
  });

  let [taskTitle, setTaskTitle] = useState("");
  let [taskDescription, setTaskDescription] = useState("");
  let [taskPriorityLevel, setTaskPriorityLevel] = useState("");
  let [taskDate, setTaskDate] = useState("");

  let [isEdited, setIsEdited] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(null);
  let [isModalOpen, setIsModalOpen] = useState(null);
  let [isChecked, setIsChecked] = useState(false);

  let addTask = () => {
    let newObj = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      priority: taskPriorityLevel,
    };

    let newArray = [...task];
    newArray.push(newObj);
    setTask(newArray);

    console.log(task);

    setTaskDescription("");
    setTaskTitle("");
    setTaskPriorityLevel("");
    setTaskDate("");
    setIsModalOpen(false);
  };

  let deleteTask = (index) => {
    let newArray = [...task];
    newArray.splice(index, 1);
    setTask(newArray);
  };

  let editTask = (index) => {
    setIsModalOpen(true);

    setCurrentIndex(index);
    setIsEdited(true);
    console.log(task[index]);

    setTaskTitle(task[index].title);
    setTaskDescription(task[index].description);
    setTaskDate(task[index].date);
    setTaskPriorityLevel(task[index].priority);
  };

  let updateTask = () => {
    let newArray = [...task];
    let newObj = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      priority: taskPriorityLevel,
    };
    newArray[currentIndex] = newObj;
    setTask(newArray);

    setTaskDescription("");
    setTaskTitle("");
    setTaskPriorityLevel("");
    setTaskDate("");

    setCurrentIndex(null);
    setIsModalOpen(false);
  };

  let closeModal = () => {
    setIsModalOpen(false);
    setIsEdited(null);
    setTaskDescription("");
    setTaskTitle("");
    setTaskPriorityLevel("");
    setTaskDate("");
    setCurrentIndex(null);
  };

  localStorage.setItem("task", JSON.stringify(task));

  return (
    <>
      <div className="flex flex-col h-screen bg-black">
        <header className="bg-gray-800 py-4 px-6 flex items-center justify-between shadow-sm">
          <h1 className="text-xl font-bold text-white">Task Manager</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-600 text-white hover:bg-gray-700 h-10 px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Add Task
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900">
          <div className="grid gap-4">
            {task.map((task, index) => {
              return (
                <div
                  key={index}
                  className={`rounded-lg border ${
                    currentIndex == index ? "bg-blue-800" : "bg-gray-800"
                  }  text-white shadow-sm p-4 flex items-center gap-4`}
                  data-v0-t="card"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-medium text-white">
                        {task.title}
                      </h2>
                    </div>
                    <p className="text-gray-400 text-sm">Due: {task.date}</p>
                    <div>
                      <p>{task.description}</p>
                    </div>
                  </div>
                  <div>{task.priority}</div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => editTask(index)}
                      data-modal-target="crud-modal"
                      data-modal-toggle="crud-modal"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-600 hover:text-white h-10 w-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
                      </svg>
                      <span className="sr-only">Edit</span>
                    </button>

                    <button
                      onClick={() => deleteTask(index)}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-600 hover:text-white h-10 w-10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {/* Modallllllllllllllllllllllllll */}

      {/* Main modal */}
      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {isEdited !== null ? "Edit Task" : "Create New Task"}
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Task name"
                      required=""
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={taskDate}
                      onChange={(e) => setTaskDate(e.target.value)}
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required=""
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Priority Level
                    </label>
                    <select
                      value={taskPriorityLevel}
                      onChange={(e) => setTaskPriorityLevel(e.target.value)}
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="None">None</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Task Description
                    </label>
                    <textarea
                      id="description"
                      maxLength="100"
                      rows={4}
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write Task description here"
                      defaultValue={""}
                    />
                  </div>
                </div>

                {isEdited ? (
                  <button
                    onClick={updateTask}
                    className="text-white w-full justify-center inline-flex items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Update Task
                  </button>
                ) : (
                  <button
                    onClick={addTask}
                    className="text-white w-full justify-center inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add new Task
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Abc;
