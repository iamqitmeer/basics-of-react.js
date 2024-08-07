import { useState } from 'react';
import './App.css'
import Contacts from './Contact';
import List from './List';

function App() {

  let [lists, setLists] = useState(Contacts)
  let [buttonClicked, setButtonClicked] = useState(true)

  function onlyActiceContact() {
    setButtonClicked(false)
    let activeArr = Contacts.filter((arr) => {
      return arr.isActive == true
    })
    setLists(activeArr)
  }

  function onlyDeActiceContact() {
    setButtonClicked(false)
    let dActiveArr = Contacts.filter((arr) => {
      return arr.isActive == false
    })
    setLists(dActiveArr)
  }

  function resetFilter() {
    let dActiveArr = Contacts.filter((arr) => {
      return arr
    })
    setLists(dActiveArr)

    setButtonClicked(true)
  }



  return (
    <div className='bg-violet-200 w-full h-screen flex items-center justify-center'>
      <div className='bg-white w-[400px] h-[500px] rounded-xl '>
        <h1 className='text-4xl text-violet-950 font-bold text-center m-6'>Contact List</h1>
        <div className='mb-4 flex items-center justify-evenly'>
          <button onClick={onlyActiceContact} className='bg-violet-500 py-2 px-4 text-sm font-bold rounded-xl'>Only Active</button>
          <button onClick={resetFilter} className='bg-violet-500 py-2 px-4 text-sm font-bold rounded-xl' disabled={buttonClicked}>Reset</button>
          <button onClick={onlyDeActiceContact} className='bg-violet-500 py-2 px-4 text-sm font-bold rounded-xl'>Only Offline</button>
        </div>
        <div className='w-full h-[400px] overflow-y-scroll p-3 rounded-lg'>
          {lists.map((data) => {
            return <List name={data.name} displayMessage={data.displayMessage} isActive={data.isActive} profileImage={data.profileImage} />
          })
          }

        </div>
      </div>
    </div>
  )
}

export default App
