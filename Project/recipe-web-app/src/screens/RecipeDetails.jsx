import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  let [recipe, setRecipe] = useState([]);

  let params = useParams();
  console.log(params.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetchSingleRecipe(); // Await the fetchSingleRecipe
        setRecipe(data.meals); // Log the resolved data
      } catch (error) {
        console.error("Error fetching recipe:", error); // Handle any potential errors
      }
    };

    fetchData(); // Call the async function inside useEffect
  }, []);

  let fetchSingleRecipe = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
    );
    let data = await response.json(); // Await the JSON parsing
    return data;
  };

  console.log(recipe);

  return (
    <div>
      {recipe[0] && (
        <>
          <main className="pt-8 pb-16 lg:pt-16 w-full lg:pb-24 bg-white dark:bg-gray-900 antialiased">
            <div className="flex justify-between px-4 mx-auto w-full ">
              <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-yellow dark:format-invert">
                <header className="mb-4 lg:mb-6 not-format">
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {recipe[0].strMeal}
                  </h1>
                  <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {recipe[0].strArea}
                  </span>
                  <span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                    {recipe[0].strCategory}
                  </span>
                </header>

                <figure>
                  <img
                    className="w-full h-[300px] object-cover shadow-md shadow-gray-300 mb-8 rounded-lg"
                    src={recipe[0].strMealThumb}
                    alt=""
                  />
                </figure>
                <div className="mt-4 mb-6 ">
                  <a
                    target="blank"
                    className="underline text-yellow-700"
                    href={recipe[0].strYoutube}
                  >
                    Watch On Youtube
                  </a>
                </div>

                <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Ingredients
                </h1>
                <p className="lead">
                  {`${recipe[0].strIngredient1} ${recipe[0].strMeasure1}, ${recipe[0].strIngredient2} ${recipe[0].strMeasure2}, ${recipe[0].strIngredient3} ${recipe[0].strMeasure3}, ${recipe[0].strIngredient4} ${recipe[0].strMeasure4}, ${recipe[0].strIngredient5} ${recipe[0].strMeasure5}, ${recipe[0].strIngredient5} ${recipe[0].strMeasure6}, ${recipe[0].strIngredient6} ${recipe[0].strIngredient7}, ${recipe[0].strMeasure7} ${recipe[0].strIngredient8}, ${recipe[0].strMeasure8} ${recipe[0].strIngredient8}, ${recipe[0].strIngredient9} ${recipe[0].strMeasure9}, ${recipe[0].strIngredient10} ${recipe[0].strMeasure10}, ${recipe[0].strIngredient11} ${recipe[0].strMeasure11} `}
                </p>

                <h1 className="mb-4 mt-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Meal
                </h1>

                <p>{recipe[0].strMeal}</p>

                <p></p>

                <h1 className="mb-4 mt-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Instructions
                </h1>

                <p>{recipe[0].strInstructions}</p>
              </article>
            </div>
          </main>{" "}
        </>
      )}
    </div>
  );
}

export default RecipeDetails;
