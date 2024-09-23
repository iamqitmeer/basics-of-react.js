import React from "react";
import "./App.css";
import { useState } from "react";

function App() {

  let [todos, setTodos] = useState(() => {
    let rawTodo = localStorage.getItem("todos")
    if (rawTodo) {
      return JSON.parse(rawTodo)
    } else { return [] }
  })
  let [userInput, setUserInput] = useState("")
  let [updateButtonFlag, setUpdateButtonFlag] = useState(false)
  let [updateIndexNum, setUpdateIndexNum] = useState()
  let [isEdited, setIsEdited] = useState(null)
  let [isDone, setIsDone] = useState(null)
  let [isChecked, setIsChecked] = useState(null)
  let [isCurrEdit, setIsCurrEdit] = useState()


  let addTodo = () => {
    if (userInput) {
      let newArray = [...todos]
      newArray.push(userInput)
      setTodos(newArray)

      setUserInput("")
    } else {
      alert("Bhai Kuch to likh!!")
    }

  }
  let deleteTodo = (index) => {
    let newArray = [...todos]
    newArray.splice(index, 1)
    setTodos(newArray)
  }
  let editTodo = (index) => {
    setIsCurrEdit(index)

    setIsEdited(index)

    setUpdateButtonFlag(true)
    setUserInput(todos[index])

    setUpdateIndexNum(index)

  }
  let deleteAllTodo = () => {
    if (confirm("Are You Sure?")) {
      setTodos([])
    } else {
      return false
    }
  }
  let updateTodo = () => {
    let newArray = [...todos]
    newArray[updateIndexNum] = userInput
    setTodos(newArray)

    setUserInput("")

    console.log(userInput);

    setUpdateButtonFlag(false)

    setIsEdited(null)
    setIsCurrEdit(null)
  }

  let isDoneFunction = (index) => (e) => {

    setIsDone(index)
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  }

  localStorage.setItem("todos", JSON.stringify(todos))

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center font-bold mb-4 text-white">Todo List</h1>
        <div className="flex items-center mb-4">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border-gray-700 outline-none flex h-10 w-full rounded-md border bg-gray-700 px-3 py-2 text-sm text-white placeholder-gray-400 ring-offset-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            placeholder="Add a new todo"
            type="text"

          />
          {updateButtonFlag ?
            <button
              onClick={updateTodo}
              className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 bg-green-600 hover:bg-green-700 h-10 px-4 py-2 ml-2"
            >
              Update Todo
            </button>
            : <button
              onClick={addTodo}
              className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 h-10 px-4 py-2 ml-2"
            >
              Add Todo
            </button>}
          {todos[0] && <button
            className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 bg-red-600 hover:bg-red-700 h-10 px-4 py-2 ml-2"
            onClick={deleteAllTodo}
          >
            Delete All
          </button>}
        </div>
        <div className="space-y-2">
          {todos.map((todo, index) => (
            <div
              key={index}
              className={(`${isEdited == index ? "bg-green-700" : "bg-gray-700"} ${isChecked && isDone == index ? "bg-yellow-600" : "bg-gray-700"} flex items-center justify-between p-3 rounded-md transition-colors `)}
            >
              <div className="flex items-center">
                <input
                  disabled={isCurrEdit == index}
                type="checkbox"
                checked={isChecked && isDone == index}
                onChange={isDoneFunction(index)}
                className={(`h-6 w-6 shrink-0 rounded-sm border border-gray-600 m-2`)}
                />
                <span
                  className={(`text-base text-white ${isChecked && isDone == index ? "line-through" : "no-underline"}`)}>{todo}</span>
              </div>
              <div className="flex items-center">
                <button
                  className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 h-8 px-4 py-1 mr-2"
                  onClick={() => editTodo(index)}
                  disabled={isChecked || isCurrEdit == index}

                >
                  Edit
                </button>
                <button
                  className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 bg-red-600 hover:bg-red-700 h-8 px-4 py-1"
                  onClick={() => deleteTodo(index)}
                  disabled={isChecked}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
