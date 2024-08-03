import { useState } from "react";

function App() {

  let [list, setList] = useState([])
  let [input, setInput] = useState("")
  let [flag, setFlag] = useState(true)

  let [updateIndex, setUpdateIndex] = useState()

  function formHandle(e) {
    setInput(e.target.value)
  }

  let addText = () => {
    let newList = [...list]
    newList.push(input)
    setList(newList)

    setInput("")
    // console.log(input);
  }

  let deleteItem = (index) => {
    let delList = [...list]
    delList.splice(index, 1)
    setList(delList)

  }
  
  let editItem = (index) => {
    setFlag(false)
    let editList = [...list]
    setInput(editList[index]);
    setUpdateIndex(index)
  }

  let updateText = () => {
    let updateList = [...list]
    console.log(input);

    // updateIndex
    updateList[updateIndex] = input
    setList(updateList)

    setFlag(true)
    setInput("")

  }

  return (
    <>
      <input value={input} onChange={formHandle} type="text" />
      {flag ? <button onClick={addText}>Add Item</button>
        : <button onClick={updateText}>Update Item</button>}

      <ul>
        {list.map((data, index) => {
          return <li>{data} <button onClick={() => deleteItem(index)}>Delete</button><button onClick={() => editItem(index)}>Edit</button> </li>
        })}
      </ul>
    </>
  )
}

export default App
