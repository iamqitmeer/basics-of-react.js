import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favourite from "../screens/Favourite";

function RecipeCards({
  title,
  idMeal,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  image,
}) {
  let [isClicked, setIsClicked] = useState(null);
  let [recipe, setRecipe] = useState([]);
  let [isFavouriteRecipe, setFavouriteRecipe] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let data = await fetchSingleRecipe();
  //       setRecipe(data);
  //     } catch (error) {
  //       console.error("Error fetching recipe:", error);
  //     }
  //   };

  //   fetchData();
  // }, [isClicked]);

  // let fetchSingleRecipe = async () => {
  //   let response = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${isClicked}`
  //   );
  //   let data = await response.json();
  //   return data;
  // };

  let favouriteList = () => {

    setIsClicked(idMeal)

    let cloneArr = [...isFavouriteRecipe];
    cloneArr.unshift(idMeal);
    setFavouriteRecipe(cloneArr);
  };

  let unFavouriteList = () => {
    setIsClicked(null);
  };

  console.log(isFavouriteRecipe);

  return (
    <div key={idMeal} className="shadow-sm shadow-black rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold mb-2 tracking-tighter	">{title}</h2>
        <h2 className="text-3xl font-bold mb-2 tracking-tighter	cursor-pointer">
          {isClicked == idMeal ? (
            <i
              onClick={unFavouriteList}
              className="ri-heart-fill text-pink-800"
            ></i>
          ) : (
            <i onClick={favouriteList} className="ri-heart-line"></i>
          )}
        </h2>
      </div>
      <p className="mb-4 text-gray-800 text-lg ">
        {`Ingredients: ${strIngredient1}, ${strIngredient2}, ${strIngredient3}`}
      </p>

      <img
        src={image}
        className="h-[180px] w-full object-cover object-center rounded-lg mb-4"
      />

      <NavLink
        to={`/${idMeal}`}
        className="px-4 py-2 w-[100%] text-gray-200 rounded-lg bg-black hover:opacity-80 text-lg"
      >
        + View Recipe
      </NavLink>
    </div>
  );
}

export default RecipeCards;
