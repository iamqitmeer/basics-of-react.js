import { useState } from "react"

function App() {

  let [inputValue, setInputValue] = useState("")

  function handleClick(val) {
    setInputValue(prev => prev.toString() + val)
  }

  return (
    <div className='bg-blue-400 w-full h-screen flex items-center justify-center flex-col'>
      <div className='w-[300px] bg-gray-900 min-h-[500px] shadow-2xl shadow-gray-900 rounded-2xl p-4 flex items-center flex-col'>
        <div>
          <input type="text" placeholder="0" value={inputValue} readOnly className='w-[95%] h-[80px] mt-2 bg-gray-900 outline-none rounded-2xl text-blue-100 text-right text-5xl' />
        </div>
        <div className='flex items-center justify-center gap-3 flex-col m-4'>

          <div className='flex items-center justify-center gap-3 flex-wrap mt-4'>
            <div className='h-[40px] w-[250px] flex items-center justify-between gap-3'>
              <div className='bg-[#303136] text-[#29A8FF] rounded-full w-full h-full flex items-center justify-center font-medium cursor-pointer'>e</div>
              <div className='bg-[#303136] text-[#29A8FF] rounded-full w-full h-full flex items-center justify-center font-medium cursor-pointer'>μ</div>
              <div className='bg-[#303136] text-[#29A8FF] rounded-full w-full h-full flex items-center justify-center font-medium cursor-pointer'>sin</div>
              <div className='bg-[#303136] text-[#29A8FF] rounded-full w-full h-full flex items-center justify-center font-medium cursor-pointer'>deg</div>
            </div>

            <div className='h-[55px] w-[250px] flex items-center justify-between gap-3'>
              <div className='bg-[#616161] text-[#A5A5A5] rounded-2xl w-full h-full flex items-center justify-center font-medium cursor-pointer' onClick={() => setInputValue("")}>Ac</div>
              <div className='bg-[#616161] text-[#A5A5A5] rounded-2xl w-full h-full flex items-center justify-center font-medium cursor-pointer text-xl' onClick={() => setInputValue(inputValue.slice(0, 1))}><i className="ri-delete-back-2-line font-medium text-md"></i></div>
              <div className='bg-[#005DB2] text-[#339DFF] rounded-2xl w-full h-full flex items-center justify-center font-medium cursor-pointer' onClick={() => handleClick("/")}>/</div>
              <div className='bg-[#005DB2] text-[#339DFF] rounded-2xl w-full h-full flex items-center justify-center font-medium text-md cursor-pointer' onClick={() => handleClick("*")}><i className="ri-asterisk"></i></div>
            </div>

            <div className='h-[55px] w-[250px] flex items-center justify-between gap-3'>
              <div className='bg-[#303136] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(7)}>7</div>
              <div className='bg-[#303136] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(8)}>8</div>
              <div className='bg-[#303136] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(9)}>9</div>
              <div className='bg-[#005DB2] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick("-")} >-</div>
            </div>

            <div className='h-[55px] w-[250px] flex items-center justify-between gap-3'>
              <div className='bg-[#303136] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(4)}>4</div>
              <div className='bg-[#303136] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(5)}>5</div>
              <div className='bg-[#303136] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(6)}>6</div>
              <div className='bg-[#005DB2] text-[#339DFF] cursor-pointer rounded-2xl w-full h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick("+")}>+</div>
            </div>

            <div className='h-[55px] w-[250px] flex items-center gap-3'>
              <div className='bg-[#303136] cursor-pointer text-[#339DFF] rounded-2xl w-[54px] h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(1)}>1</div>
              <div className='bg-[#303136] cursor-pointer text-[#339DFF] rounded-2xl w-[54px] h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(2)}>2</div>
              <div className='bg-[#303136] cursor-pointer text-[#339DFF] rounded-2xl w-[54px] h-full flex items-center justify-center font-medium text-xl' onClick={() => handleClick(3)}>3</div>
            </div>

            <div className='h-[55px] w-[250px] flex items-center gap-3'>
              <div className='bg-[#303136] cursor-pointer text-[#339DFF] rounded-2xl h-full flex items-center justify-center font-medium w-[98px]' onClick={() => handleClick(0)}>0</div>
              <div className='bg-[#303136] text-[#339DFF] rounded-2xl h-full flex items-center justify-center cursor-pointer font-medium w-[75px]' onClick={() => handleClick(".")}><i className="ri-circle-fill text-[10px]"></i></div>
              <div className='bg-[#005DB2] text-[#339DFF] h-28 rounded-2xl h-full flex items-center justify-center font-medium w-[54px] h-[121px] mb-[60px] cursor-pointer' onClick={() => setInputValue(eval(inputValue))}>=</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
