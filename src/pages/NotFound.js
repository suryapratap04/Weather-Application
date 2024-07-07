// src/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-[1200px] min-h-[450px] h-[100%] w-[100%] border-2 flex flex-col justify-center items-center bg-slate-900  text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-white text-purple-700 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
