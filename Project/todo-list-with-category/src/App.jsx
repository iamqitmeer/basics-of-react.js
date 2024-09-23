import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [list, setList] = useState([])
  let [input, setInput] = useState("")

  function addTodo() {
    let cloneArr = [...list]
    cloneArr.push(
      input
    )
    setList(cloneArr)

    setInput("")
  }

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
      <button onClick={addTodo}>Add</button>

      <ul>
        {list.map((item, index) => {
          return <p>{index + 1}) {item}</p>
        })}
      </ul>
    </>
  )
}

export default App
