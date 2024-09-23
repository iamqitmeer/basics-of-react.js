import React from 'react'

function Input() {
    return (
        <div className='p-8'>
            <div class="relative ">
                <input
                    class="w-[500px] bg-indigo-700 pr-20 text-white h-14 pl-3 py-2 bg-transparent placeholder:text-white text-slate-700 text-sm border border-slate-200 rounded-lg transition duration-300 ease focus:outline-none focus:border-indigo-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                    placeholder="Enter City Name."
                />
                <button
                    class="absolute h-10 py-2 text-indigo-950 text-sm right-1 top-1 my-auto px-5 flex items-center bg-gray-100 rounded-lg hover:bg-gray-200"
                    type="button"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Input