import React, { useState } from 'react';

export default function Buttons({ menuItems, setItem, filterItem, c, setC}) {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]); // Initially select the first button

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the selected item on click
    filterItem(item);
    setC(c + 1);
  };

  return (
    <div className="mb-2 md:flex xl:flex">
      {menuItems.map((val) => (
        <button
          key={val}
          className={`text-lg px-7 py-4 mt-2 sm:ml-2 rounded-lg text-base ${
            selectedItem === val ? 'bg-primary text-white' : 'bg-light text-primary'
          }`}
          onClick={() => {
            handleItemClick(val);
          }}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
