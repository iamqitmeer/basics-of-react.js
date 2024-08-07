import React from 'react'

function List({ profileImage, name, isActive, displayMessage }) {
    return (
        <div className='bg-violet-700 m-2 rounded-lg p-4 flex items-start justify-between text-violet-50'>
            <div className='flex items-center justify-center'>
                <div className='mr-2'>
                <img className='w-[45px] h-[45px] bg-center bg-cover rounded-full' src={profileImage} alt="" />
                </div>
                <div>
                <h1 className='text-lg font-bold'>{name}</h1>
                <p className='text-[12px]'>{displayMessage}</p>
                </div>
            </div>
            <div>
                {
                    isActive ? <div className='m-3 w-[15px] h-[15px] rounded-full bg-violet-50'></div> : <div className='m-3 w-[15px] h-[15px] rounded-full bg-none'></div>
                }

            </div>
        </div>
    )
}

export default List
