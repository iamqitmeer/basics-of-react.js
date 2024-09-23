import React, { useEffect, useState } from "react";
import products from "./product";
import categories from "../category";
import { Select, SelectItem } from "@nextui-org/react";

function App() {
  let [product, setProduct] = useState(products);
  let [category, setCategory] = useState(categories);

  let [searchInput, setSearchInput] = useState("");
  let [userCategory, setUserCategory] = useState("");
  useEffect(() => {
    if (searchInput.length) {
      // let cloneArr = [...product];
      // let filterArr = cloneArr.filter((singleIndex) => {
      //   return singleIndex.title
      //     .toLowerCase()
      //     .includes(searchInput.toLowerCase());
      // }, []);
      // setProduct(filterArr);

      setProduct(
        [...product].filter((singleIndex) => {
          return singleIndex.title
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        }, [])
      );
    } else {
      setProduct(products);
    }
  }, [searchInput]);

  useEffect(() => {
    setUserCategory("");

    let cloneArr = [...product];
    let filterArr = cloneArr.filter((singleProduct) => {
      return singleProduct.category
        .toLowerCase()
        .includes(userCategory.toLowerCase());
    }, []);
    setProduct(filterArr);
  }, [userCategory]);

  return (
    <div className="flex flex-wrap">
      <div className="w-[25%] p-8">
        <h1 className="text-2xl">React Store</h1>

        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="search"
          className="border-2 p-2 w-full mt-4"
          placeholder="Search Product"
        />
        <div className="mt-6">
          <h1 className="text-md mb-3 ml-1">Category</h1>
          <Select
            value={userCategory}
            onChange={(e) => setUserCategory(e.target.value)}
            key={category.slug}
            label="Search By Category"
            placeholder="Select an Category"
            className="w-full"
          >
            {category.map((category) => {
              return (
                <SelectItem key={category.slug}>{category.name}</SelectItem>
              );
            })}
          </Select>
        </div>

        <div className="mt-6">
          <h1 className="text-md ml-1">Search By Keywords</h1>
          {["Eggs", "Meat", "Lipstick", "Dior J'adore", "Bedside", "Apple"].map(
            (sin) => {
              return (
                <button
                  key={sin}
                  onClick={() => setSearchInput(sin.toLowerCase())}
                  className="w-full p-4 bg-gray-100 mt-2 hover:bg-zinc-200 rounded"
                >
                  {sin}
                </button>
              );
            }
          )}
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              setUserCategory("");
              setSearchInput("");
            }}
            className="w-full p-4 text-white bg-zinc-950 hover:bg-zinc-900 mt-2 rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="w-[60%] p-6">
        <div className=" flex items-center justify-center gap-8 flex-wrap">
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[200px] h-[220px] m-4 flex flex-col justify-center"
              >
                <img src={item.thumbnail} />
                <p className="text-[10px] my-4">{item.category}</p>
                <p className="text-lg font-bold">{item.title}</p>
                <h1 className="text-sm font-semibold">${item.price}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[15%]"></div>
    </div>
  );
}

export default App;
