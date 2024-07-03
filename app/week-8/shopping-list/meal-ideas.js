"use client";

import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = response.ok ? await response.json() : { meals: [] };
    return data.meals || [];
 };


const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };


  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <main>
      <h1 className="text-3xl text-center font-bold mt-4">Meal Ideas</h1>
        <ul>
          {meals.length ? (
            meals.map((meal) => (
              <li key={meal.idMeal} className="bg-black text-white p-4 m-4 rounded">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto" />
                <h2 className="text-xl font-bold">{meal.strMeal}</h2>
              </li>
            ))
          ) : (
            <li className=" p-4 m-4 ">
              <h2 className="text-xl font-bold">No ideas found for {ingredient}</h2>
            </li>
          )}
        </ul>
    </main>
  );
};

export default MealIdeas;
