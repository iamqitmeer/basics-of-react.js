import React from "react";
import "./App.css";
import TaskCart from "./Component/TaskCart";

function App() {


  let handleClick = () => {}

  return (
    <div className="flex items-center p-14 flex-col w-full h-screen gap-6">
      <div>
        <h1 className="text-4xl font-black">Multiple Task Manager</h1>
      </div>
      <div className="m-4 w-[800px] ">
        <form>
          <div class="relative">
            <input
              type="search"
              id="search"
              className="w-full block outline-none ps-4 p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder="create your new container"
              required
            />
            <button
            onClick={handleClick}
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Task
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center flex-wrap gap-12">
          <TaskCart />
        </div>
      </div>
    </div>
  );
}

export default App;
