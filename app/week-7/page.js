"use client";
import ItemList from "./item-list";
import Item from "./item"; 
import NewItem from "./new-item";
import itemData from "./item.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page(){
    const [items, setItems] = useState(itemData);
    const [selectedItemName,setSelectedItemName] = useState('');

    const handleItemSelect = (item) => {
        const splitItemName = item.name.split(',')[0].trim().replace(/\p{Emoji}/gu, '');
        setSelectedItemName(splitItemName);
    }
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    return(
        <main className=" bg-black min-h-screen text-white text-bold px-4">
            <h1 className="text-3xl font-bold p-3 pl-0">Shopping List</h1>
            <h2 className="text-xl font-bold pb-0">Add New Item</h2>
            <div className="flex ">
                <div>
                    <NewItem onAddItem = {handleAddItem}/>
                    <ItemList items = {items} onItemSelect={handleItemSelect}/>
                </div>
                <div>
                    <MealIdeas ingredient= {selectedItemName}/>   
                </div>
            </div>
        </main>
    );
}