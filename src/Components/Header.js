import React, { useState, useEffect } from "react";
import { GitHub, Moon, Sun } from "react-feather";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
 
  return (
    <header className="sticky top-0 w-full z-40 py-3 h-14 dark:bg-gray-800 bg-white shadow-md overflow-hidden">
      <div className="flex justify-between px-2 dark:text-green-400 text-green-500">
        <div className="flex flex-shrink-0 justify-between">
          <button
            type="button"
            className="mr-1 focus:outline-none"
            onClick={() => {
              history.push("/");
            }}>
            <span className="flex text-2xl subpixel-antialiased font-black leading-none">
              Welcome to Bidding Dashboard
            </span>
          </button>
        </div>
       
      </div>
    </header>
  );
}

export default Header;
