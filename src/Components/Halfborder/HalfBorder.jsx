import { useState } from 'react'

import React from "react";

const Card = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <div className="pl-4">
        {/* Content of the card */}
        <h2 className="text-xl font-semibold">Card Title</h2>
        <p className="text-gray-600 mt-2">Card content goes here...</p>
      </div>
      {/* Border element */}
      <div className="absolute inset-y-0 left-0 w-2 bg-blue-500"></div>
      <h5 className='font-bold'>Transport Pricing</h5>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Harum porro delectus 
                    ducimus iste fugiat laboriosam beatae. 
                    Amet porro nam ullam officiis velit! 
                    Mollitia dolore quidem maxime fugit. Velit, quam impedit?</p>
    </div>
  );
};

export default Card;
