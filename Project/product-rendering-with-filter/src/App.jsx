import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function App() {
  let [products, setProducts] = useState(null);
  let [category, setCategory] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
      setFilteredProducts(data);
    });
  }, []);

  async function getData() {
    let getDataFromAPI = await fetch("https://fakestoreapi.com/products");
    let data = await getDataFromAPI.json();
    return data;
  }

  let handleDropdownChange = (e) => {
    // setCategory(e.target.value);
    let category = e.target.value;
    setCategory(category);

    let newArr = [...products];

    let filterArr = newArr.filter((product) => {
      return product.category == category;
    });
    newArr = filterArr;
    setProducts(newArr);
  };

  console.log(category);

  return (
    <div className="p-12">
      {products ? (
        <div className="flex justify-center items-center flex-wrap flex-col">
          <div>
            <select value={category} onChange={handleDropdownChange}>
              <option value="all">Select Category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>
          <div className="flex justify-center items-center flex-wrap ">
            {products.map((data) => {
              return (
                <Cart
                  title={data.title}
                  description={data.description}
                  price={data.price}
                  category={data.category}
                  image={data.image}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
