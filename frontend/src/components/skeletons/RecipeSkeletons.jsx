import React from "react";

const RecipeSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-lg bg-white animate-pulse">
      
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-lg mb-4" />

      {/* Title */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3" />

      {/* Subtitle */}
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />

      {/* Tags */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-16 bg-gray-200 rounded-full" />
        <div className="h-6 w-20 bg-gray-200 rounded-full" />
        <div className="h-6 w-14 bg-gray-200 rounded-full" />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <div className="h-10 w-24 bg-gray-300 rounded-xl" />
        <div className="h-10 w-28 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
};

export default RecipeSkeleton;
