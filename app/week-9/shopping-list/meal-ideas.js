"use client"

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {

  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([])
      }

    } catch (error) {
       
        setMeals([]);
    } 
  };

  useEffect(() => {
   fetchMealIdeas(ingredient);
   console.log(ingredient)
  }, [ingredient]);


  return (
    <div>
      <h1 className="text-2xl font-bold font-sans">More Ideas</h1>
     
        <div>
          {meals.length > 0 ? (
              <div>
                <h2 className="mb-2">Here are some meal ideas using {ingredient}</h2>
                <ul>
                  {meals.map((meal) => (                    
                    <li key={meal.idMeal} className=" bg-blue-500 p-2 mb-3 cursor-pointer font-bold flex ">
                      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20 mr-5"/>
                      {meal.strMeal}
                    </li>
                  ))}
                </ul>
              </div>) : ( <p>No meal ideas found for {ingredient}</p>)
            } 
          
        </div>
  
    </div>
  );
};

export default MealIdeas;