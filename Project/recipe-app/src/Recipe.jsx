function Recipe({ thum, title, category, steps }) {
    return <div className='bg-gray-200 w-[400px] m-4 rounded-2xl h-[400px] p-3 shadow-gray-800 shadow-xl'>
        <div
            className="relative bg-gray-800 w-full h-[50%] rounded-2xl font-bold text-2xl text-white p-4 flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${thum})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="relative z-10">{title}</h1>
        </div>

        <p className="mt-2 mb-2 text-2xl font-medium">{category}</p>

        <div className='w-full h-[30%] flex items-center justify-center flex-col'>
            <p className="text-sm">
                {steps.slice(0, 300)}
            </p>

        </div>
    </div>
}

export default Recipe