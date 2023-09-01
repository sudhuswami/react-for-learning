"use client";
import React, { useState } from "react";

function TextSizeAdjuster() {
  // State to hold the text size
  const [textSize, setTextSize] = useState(16); // Initial font size: 16px

  // Function to increase the text size
  const increaseTextSize = () => {
    setTextSize(textSize + 2); // Increase font size by 2px
  };

  // Function to decrease the text size
  const decreaseTextSize = () => {
    setTextSize(textSize - 2); // Decrease font size by 2px
  };

  return (
    <div className="text-center mt-8">
      <h1 style={{ fontSize: `${textSize}px` }}>Resizable Text</h1>
      <button
        onClick={increaseTextSize}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Increase Size
      </button>
      <button
        onClick={decreaseTextSize}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrease Size
      </button>
    </div>
  );
}

export default TextSizeAdjuster;
