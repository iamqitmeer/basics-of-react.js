import React, { useEffect, useState } from 'react'
import Cart from './Cart'

function App() {

  let [products, setProducts] = useState(null)

  useEffect(() => {
    getData().then((data) => setProducts(data))
  }, [])

  async function getData() {
    let getDataFromAPI = await fetch("https://fakestoreapi.com/products")
    let data = await getDataFromAPI.json()
    return data
  }

  return (
    <div className='p-12'>



      {products ? <div className='flex justify-center items-center flex-wrap flex-col'>
        <div>
          <label htmlFor="Select Category">Select Category</label>
          <select name="Select Category">
            <option value="men's">men's</option>
          </select>
        </div>
        <div className='flex justify-center items-center flex-wrap '>

          {products.map((data) => {
            return <Cart title={data.title} description={data.description} price={data.price} category={data.category} image={data.image} />
          })}
        </div>
      </div> : <h1>Loading...</h1>}


    </div>
  )
}

export default App
