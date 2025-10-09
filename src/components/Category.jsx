import React from 'react';
import {
  GiRoastChicken,
  GiFruitBowl,
  GiCoolSpices,
  GiAlmond,
  GiCupcake,
} from "react-icons/gi";

const Category = () => {

  const cards = [
    {
      id: 1,
      image: '/assets/img1.jpg',
      title: 'img1',
      color: 'bg-blue-400'
    },
    {
      id: 2,
      image: '/assets/img2.jpg',
      title: 'img2',
      color: 'bg-pink-400'
    },
    {
      id: 3,
      image: '/assets/img3.jpg',
      title: 'img3',
      color: 'bg-green-400'
    }
  ];

  const categories = [
    { name: "Non Veg Pickles", icon: <GiRoastChicken />, color: "bg-red-600" },
    { name: "Veg Pickles", icon: <GiFruitBowl />, color: "bg-green-600" },
    { name: "Podulu", icon: <GiCoolSpices />, color: "bg-orange-500" },
    { name: "Dry Fruits", icon: <GiAlmond />, color: "bg-yellow-700" },
    { name: "Sweets - Snacks", icon: <GiCupcake />, color: "bg-pink-600" },
  ];

  const handleCategoryClick = (categoryTitle) => {
    console.log(`Clicked on category: ${categoryTitle}`);
    // You can add your navigation logic here, e.g., redirecting to a new page
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-10">
        {/* Top Section with Express, Contact, and Shipping Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map(card => (
            <div key={card.id} className={`p-0 rounded-2xl shadow-lg relative overflow-hidden text-center md:text-left`}>
              {/* Using a direct image tag */}
              <img src={card.image} alt={card.title} className="w-full h-auto rounded-2xl" />
            </div>
          ))}
        </div>


        {/* Categories Icons */}
        <div className="text-center mt-12">
        <h4 className="text-gray-600 uppercase tracking-wide">Shop by</h4>
        <h2 className="text-2xl md:text-3xl font-bold">CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="flex flex-col items-center focus:outline-none"
              onClick={() => alert(`You clicked ${cat.name}`)} // 👉 add navigation here later
            >
              <div
                className={`${cat.color} text-white p-6 rounded-full shadow-md text-4xl transform transition duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
              >
                {cat.icon}
              </div>
              <p className="mt-2 text-sm font-medium">{cat.name}</p>
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Category;



// src/components/CategoriesSection.jsx
// import React from "react";
// import { GiChickenLeg, GiFruitBowl, GiCook, GiAlmond, GiCupcake } from "react-icons/gi"; // icons

// const Category = () => {
//   return (
//     <section className="w-full px-6 py-10">
//       {/* Banners Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <img
//           src="https://via.placeholder.com/400x200?text=Express+Delivery"
//           alt="Express Delivery"
//           className="rounded-lg shadow-md"
//         />
//         <img
//           src="https://via.placeholder.com/400x200?text=Reach+Us+Anytime"
//           alt="Reach Us"
//           className="rounded-lg shadow-md"
//         />
//         <img
//           src="https://via.placeholder.com/400x200?text=Shipping+Worldwide"
//           alt="Shipping"
//           className="rounded-lg shadow-md"
//         />
//       </div>

//       {/* Categories Section */}
//       <div className="text-center mt-12">
//         <h4 className="text-gray-600 uppercase tracking-wide">Shop by</h4>
//         <h2 className="text-2xl md:text-3xl font-bold">CATEGORIES</h2>

//         <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
//           {/* Non Veg Pickles */}
//           <div className="flex flex-col items-center">
//             <div className="bg-red-600 text-white p-6 rounded-full shadow-md text-4xl">
//               <GiChickenLeg />
//             </div>
//             <p className="mt-2 text-sm font-medium">Non Veg Pickles</p>
//           </div>

//           {/* Veg Pickles */}
//           <div className="flex flex-col items-center">
//             <div className="bg-green-600 text-white p-6 rounded-full shadow-md text-4xl">
//               <GiFruitBowl />
//             </div>
//             <p className="mt-2 text-sm font-medium">Veg Pickles</p>
//           </div>

//           {/* Podulu */}
//           <div className="flex flex-col items-center">
//             <div className="bg-orange-500 text-white p-6 rounded-full shadow-md text-4xl">
//               <GiCook />
//             </div>
//             <p className="mt-2 text-sm font-medium">Podulu</p>
//           </div>

//           {/* Dry Fruits */}
//           <div className="flex flex-col items-center">
//             <div className="bg-yellow-700 text-white p-6 rounded-full shadow-md text-4xl">
//               <GiAlmond />
//             </div>
//             <p className="mt-2 text-sm font-medium">Dry Fruits</p>
//           </div>

//           {/* Sweets - Snacks */}
//           <div className="flex flex-col items-center">
//             <div className="bg-pink-600 text-white p-6 rounded-full shadow-md text-4xl">
//               <GiCupcake />
//             </div>
//             <p className="mt-2 text-sm font-medium">Sweets - Snacks</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Category;
