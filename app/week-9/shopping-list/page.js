"use client";
import ItemList from "./item-list";
import Item from "./item"; 
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { Navigate } from 'react-router-dom';
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";



export default function Page(){
    const [items, setItems] = useState(itemData);
    const [selectedItemName,setSelectedItemName] = useState('');

    async function loadItems(){
        if(user){
        const items = await getItems(user.uid);
        setItems(items);
        }}

    useEffect(() => {
        loadItems();
    }, [user]);

    const {user} = useUserAuth();
    if (!user) {
        <Route path="/redirect" element={ <Navigate to="/week-8" /> } />
    }
    
    const handleItemSelect = (item) => {
        const splitItemName = item.name.split(',')[0].trim().replace(/\p{Emoji}/gu, '');
        setSelectedItemName(splitItemName);
    }
    const handleAddItem = (newItem) => {
        const idNewItem = addItem(user.uid, newItem);
        newItem.id = idNewItem;
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