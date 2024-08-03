import React from 'react'

function TaskCart() {
    return (
        <div className='w-[350px] bg-blue-700 rounded-xl p-6 text-white flex items-center p-14 flex-col w-full h-[500px] gap-6 mt-12'>
            <div>
                <h1 className='font-black text-4xl'>Home Work</h1>
            </div>

            <ul className='flex items-center gap-4'>
                <li className='cursor-pointer'>Comment</li>
                <li className='cursor-pointer'>Edit</li>
                <li className='cursor-pointer'>Delete</li>
            </ul>

            {/* <form className='w-full'> */}
            <form className="relative w-full">
                <input
                    type="search"
                    className="w-full block outline-none ps-4 p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required=""
                />
                <button
                    type="submit"
                    className="absolute right-2.5 top-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </form>

            <ul className='flex justify-center flex-col gap-4 w-full px-1 overflow-y-scroll	'>
                <li className='bg-blue-300 text-blue-950 p-3 font-bold w-full rounded-lg'>Abc</li>
                <li className='bg-blue-300 text-blue-950 p-3 font-bold w-full rounded-lg'>Def</li>
                <li className='bg-blue-300 text-blue-950 p-3 font-bold w-full rounded-lg'>Ghk</li>
            </ul>

        </div>
    )
}

export default TaskCart
