// import { useState } from "react";

// function App() {

//   let [list, setList] = useState([])
//   let [input, setInput] = useState("")
//   let [flag, setFlag] = useState(true)

//   let [updateIndex, setUpdateIndex] = useState()

//   function formHandle(e) {
//     setInput(e.target.value)
//   }

//   let addText = () => {
//     let newList = [...list]
//     newList.push(input)
//     setList(newList)

//     setInput("")
//     // console.log(input);
//   }

//   let deleteItem = (index) => {
//     let delList = [...list]
//     delList.splice(index, 1)
//     setList(delList)

//   }

//   let editItem = (index) => {
//     setFlag(false)
//     let editList = [...list]
//     setInput(editList[index]);
//     setUpdateIndex(index)
//   }

//   let updateText = () => {
//     let updateList = [...list]
//     console.log(input);

//     // updateIndex
//     updateList[updateIndex] = input
//     setList(updateList)

//     setFlag(true)
//     setInput("")

//   }

//   return (
//     <>
//       <input value={input} onChange={formHandle} type="text" />
//       {flag ? <button onClick={addText}>Add Item</button>
//         : <button onClick={updateText}>Update Item</button>}

//       <ul>
//         {list.map((data, index) => {
//           return <li>{data} <button onClick={() => deleteItem(index)}>Delete</button><button onClick={() => editItem(index)}>Edit</button> </li>
//         })}
//       </ul>
//     </>
//   )
// }

// export default App


import React from 'react'
import { useState } from 'react'

function App() {

  let [input, setInput] = useState()
  let [list, setList] = useState([])

  let [flag, setFlag] = useState(false)
  let [currentIndex, setCurrentIndex] = useState()
  // let [] = useState()
  // let [] = useState()

  function addTodo() {
    let newArr = [...list]
    newArr.push(input)
    setList(newArr)

    setInput("")
  }

  function deleteTodo(index) {
    let newArr = [...list]
    newArr.splice(index, 1)
    setList(newArr)
  }

  function updateTodo() {
    let newArr = [...list]
    newArr[currentIndex] = input
    setList(newArr)


    setInput("")
    setFlag(false)

  }

  function editTodo(index) {

    setFlag(true)
    let newArr = [...list]
    setInput(newArr[index])
    setCurrentIndex(index)
  }

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter To-do Item Here.' />
      {flag ? <button onClick={updateTodo}>Update Todo</button> : <button onClick={addTodo}>Add Todo</button>}
      <ul>
        {list.map((data, index) => {
          return <li key={index}>{data} <button onClick={() => deleteTodo(index)}>Delete</button><button onClick={() => editTodo(index)}>Edit</button></li>
        })}
      </ul>
    </div>
  )
}

export default App
