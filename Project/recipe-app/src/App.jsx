import { useState } from 'react'
import './App.css'
import Recipe from './Recipe'
import { useEffect } from 'react'

function App() {

  let [recipe, setRecipe] = useState("")
  let [list, setList] = useState()

  let fetchRecipe = async (query) => {
    let getData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    let data = await getData.json()
    return data.meals || []
  }

  function handleClick() {
    fetchRecipe(recipe).then((data) => setList(data))
  }

  return (
    <div className='w-full h-screen p-12  flex items-center justify-center flex-col'>
      <div className='w-[100%] h-full'>
        <div className='p-4'>
          <h1 className='text-5xl text-center text-white font-bold'>Recipe App</h1>
        </div>

        <div className="flex items-center mb-4 m-0 m-auto w-[70%] mt-12">
          <input
            className="border-blue-600 outline-none flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 mr-2"
            placeholder="search a recipe"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)}
            type="text"
            defaultValue=""
          />
          <button
            onClick={handleClick}
            className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-blue-600-foreground hover:bg-blue-700 h-10 px-4 py-2 mr-2"
          >
            Search Recipe
          </button>
        </div>


        {list ? (
          <div className='flex flex-wrap items-center justify-center gap-4'>
            {list.map((data, index) => {
              console.log(data);
              return (
                <Recipe
                  key={index}
                  thum={data.strMealThumb}
                  title={data.strMeal}
                  category={data.strCategory}
                  steps={data.strInstructions}
                />
              );
            })}
          </div>
        ) : (
          <h1 className='text-white text-2xl m-0 m-auto w-[70%]'>
            Nothing in the recipe list
          </h1>
        )}

        {/* {list.map((data) => {
              return data.meals ? (<h1>Not Found</h1>) : (<Recipe thum={data.strMealThumb} title={data.title} category={data.strCategory} steps={data.strInstructions} />)
            })}
          </div>
          : <h1 className='text-white text-2xl '>
            Nothing in a recipe list</h1>} */}


      </div>
    </div>



  )
}

export default App
