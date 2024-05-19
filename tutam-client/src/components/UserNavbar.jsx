import React, { useState } from "react";

const UserNavbar = () => {
  return (
    <nav class="bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a class="flex items-center">
          <span class="text-3xl font-bold text-white">Kost Review</span>
        </a>
        <div class="w-auto" id="navbar-default">
          <ul class="flex flex-col md:flex-row md:space-x-16">
            <li>
              <a href="http://localhost:5173/kost" class="text-white md:dark:hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="http://localhost:5173/create" class="text-white md:dark:hover:text-blue-500">Add Review</a>
            </li>
            <li>
              <a href="http://localhost:5173/" class="text-white md:dark:hover:text-blue-500">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;