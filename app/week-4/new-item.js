"use client";
import React, { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    const item = {name, quantity,category};

    console.log(item); 
    alert(`Added item:${name}, quantitiy: ${quantity} & category: ${category}`); 

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form className=' m-5 p-4 max-h-[11rem]  bg-slate-900' onSubmit={handleSubmit}  >
      <div className='mb-1' >
        <input className='w-full mb-1.5 p-2 border-gray-700 rounded-lg' placeholder='Item Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div className= 'mb-2 flex justify-between'>
        <input className='mr-14 p-2 border-gray-700 rounded-lg' type="number" value={quantity} min="1" max="99" onChange={(e) => setQuantity(Number(e.target.value))} required/>
        <select className='ml-14 p-2 border-gray-700 rounded-lg' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce" defaultChecked>Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button className='w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ' type="submit">+</button>
    </form>
  );
}
