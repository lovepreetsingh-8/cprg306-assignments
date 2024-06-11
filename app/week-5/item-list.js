"use client";
import React, { useState } from 'react';
import item from "./item.js";
import items from "./items.json";

export default function ItemList(){
const[sortBy,setSortBy] = useState('name');

const sortItems = items.sort((item1,item2) => {
    if (sortBy === 'name') {
        return item1.name.localeCompare(item2.name);
    } else if (sortBy === 'category'){
        return item1.category.localeCompare(item2.category);
    } else {
        return 0;
    };

});

return(
    <div>
        <label>Sort By:</label> 
        <button className="bg-orange-500 p-1 px-9 m-2 " onClick={() =>setSortBy('name')}>Name</button>
        <button className="bg-orange-700 p-1 px-8 m-2 " onClick={() => setSortBy('category')}>Category</button>
    <ul>
    {sortItems.map(function(item){
            return(
                <>
                    <ul className="p-2 m-4 bg-slate-900 max-w-sm">
                        <li className= "text-xl font-bold">{item.name}</li>
                        <li className="text-sm"><p>Buy {item.quantity} in {item.category}</p></li>
                    </ul>
                </>
               )
        })}
    </ul>
</div>
);
} 
