import React from 'react'
import quizQuestions from './quizQuestions';

function App() {

  console.log(quizQuestions);

  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-900'>
      <div className="text-foreground bg-orange-100 rounded-lg shadow-lg p-8 w-[600px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Quiz</h1>
          <div className="text-muted-foreground">Quiz No. 12/20</div>
        </div>
        <div className="space-y-4">
          <div className="bg-card rounded-md p-4">
            <h2 className="text-3xl font-semibold mb-4">
              What is the capital of France?
            </h2>
            <div className="space-y-3">
              <div className="w-full bg-orange-200 p-4 rounded-2xl border-1 border-green-600 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="option1"
                  name="options"
                  value="paris"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 checked:bg-orange-600 checked:border-transparent"
                />
                <label htmlFor="option1" className="text-left flex-1 cursor-pointer text-xl">
                  Paris
                </label>
              </div>
              <div className="flex items-center gap-3  bg-orange-200 p-4 rounded-2xl border-1 border-green-600 ">
                <input
                  type="checkbox"
                  id="option2"
                  name="options"
                  value="paris"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 checked:bg-orange-600 checked:border-transparent"
                />
                <label htmlFor="option2" className="text-left flex-1 cursor-pointer text-xl">
                  Paris
                </label>
              </div>
              <div className="flex items-center gap-3  bg-orange-200 p-4 rounded-2xl border-1 border-green-600 ">
                <input
                  type="checkbox"
                  id="option3"
                  name="options"
                  value="paris"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 checked:bg-orange-600 checked:border-transparent"
                />
                <label htmlFor="option3" className="text-left flex-1 cursor-pointer text-xl">
                  Paris
                </label>
              </div>
              <div className="flex items-center gap-3  bg-orange-200 p-4 rounded-2xl border-1 border-green-600 ">
                <input
                  type="checkbox"
                  id="option4"
                  name="options"
                  value="paris"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 checked:bg-orange-600 checked:border-transparent"
                />
                <label htmlFor="option4" className="text-left flex-1 cursor-pointer text-xl">
                  Paris
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-gray-200 hover:border-gray-400 hover:bottom-1 hover:text-accent-foreground h-10 px-4 py-2">
              Previous
            </button>
            <button className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-950 text-black-foreground hover:bg-gray-800 h-10 px-8 py-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App