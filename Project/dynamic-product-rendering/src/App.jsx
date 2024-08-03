import './App.css'
import Cart from './Cart'
import products from './Products';

function App() {

  console.log(products);

  return (
    <>
      <div className='flex justify-center items-center flex-wrap'>
        {products.map((data) => {
          return <Cart title={data.title} description={data.description} price={data.price} category={data.category} image={data.image} />
        })}
      </div>
    </>
  )
}

export default App
