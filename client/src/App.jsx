import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


import { logo } from './assets';

import {Home , CreatePost} from "./pages"
function App() {
  return (
    <BrowserRouter> 
    <header className="w-full flex justify-between item-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-2. h-10  pl-3 pt-3 pb-2 sm:w-25 sm:h-13 object-contain"
        />
      </Link>

      <Link to="/createpost"
       
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-[#4346f2] transition-all duration-200 ease-in-out">
        Create 
      </Link>


      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App