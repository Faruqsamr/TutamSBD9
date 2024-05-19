import React from "react";

const Firstpg = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-8">Kost Review</h1>
      <p className="text-lg mb-12">Pernah nge kost atau nongkrong di kost orang</p>
      <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Kasih Review lu sekarang
      </a>
    </div>
  );
};

export default Firstpg;