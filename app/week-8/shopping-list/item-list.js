"use client";
import React, { useState } from 'react';
import item from "./item.js";


export default function ItemList({items,onItemSelect}){
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
        <ul  className="p-2 m-4 bg-black max-w-sm">
    {sortItems.map((item) => (
            (
                <div  className='mb-5 bg-slate-900 hover:bg-orange-900 cursor-pointer p-2'>
                        <li key ={item.id} onSelect={() => onItemSelect(item.name)} className="text-sm">
                        <p  className= "text-xl font-bold ">{item.name}</p>    
                            <p>Buy {item.quantity} in {item.category}</p>
                        </li>
                </div>
               )
            ))}
            </ul>
    </ul>
</div>
);
} 
