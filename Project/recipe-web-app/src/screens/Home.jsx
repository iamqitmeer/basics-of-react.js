import React, { useEffect, useState } from "react";
import RecipeCards from "../Componet/RecipeCards";
import { NavLink } from "react-router-dom";

const Home = () => {
  let [userInput, setUserInput] = useState("beef");
  let [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetchRecipe().then((data) => setRecipe(data.meals));
  }, [userInput]);

  let fetchRecipe = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
    );
    return await response.json();
  };

  return (
    <div className="container mx-auto p-12 w-full h-screen flex mt-16 flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-bold mb-6 tracking-tighter	">
          Recipe Finder
        </h1>
        <NavLink
          to={"/favourite"}
          className="px-8 py-4 text-white rounded-lg bg-black hover:opacity-80 text-xl 	"
        >
          Favorites
        </NavLink>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6 w-full">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder="Enter ingredients..."
          className="px-4 py-4 rounded-lg w-full border border-black"
        />
        <button
          onClick={fetchRecipe}
          className="ml-4 w-40 py-4 text-xl px-4 bg-black hover:opacity-80 text-white rounded-lg"
        >
          <i className="ri-search-line"></i> Search
        </button>
      </div>

      <div className="flex space-x-4 mb-4">
        <button className="py-2 bg-gray-100 rounded-lg text-2xl ">
          All Recipes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipe ? (
          recipe.map((product) => {
            return (
              <RecipeCards
                idMeal={product.idMeal}
                key={product.idMeal}
                title={product.strMeal}
                image={product.strMealThumb}
                strIngredient1={product.strIngredient1}
                strIngredient2={product.strIngredient2}
                strIngredient3={product.strIngredient3}
                strIngredient4={product.strIngredient4}
              />
            );
          })
        ) : (
          <div className="flex items-center justify-center">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
