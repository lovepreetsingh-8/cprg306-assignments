"use client";
import React, { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    const item = { name, quantity,category};

    console.log(item); 
    alert(`Added item:${name}, quantitiy: ${quantity} & category: ${category}`); 

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <input type="number" value={quantity} min="1" max="99" onChange={(e) => setQuantity(Number(e.target.value))}/>
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce" Default>Produce</option>
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
      <button type="submit">+</button>
    </form>
  );
}
