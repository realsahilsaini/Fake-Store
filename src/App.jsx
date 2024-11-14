import React from "react";
import Nav from "./components/NAv";
import ProductCard from "./components/ProductCard";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  // console.log("search: ", search);
  // console.log("pathname: ", pathname);

  return (
    <div className="relative h-screen w-full flex">

      {(pathname != "/" || search.length>0) && (
        <Link to="/" className="text-red-600 z-99 text-2xl font-semibold top-4 absolute right-7">
          Home
        </Link>
      ) }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create /> } />
        <Route path="/create" element={<Create /> } />
        <Route path="/edit/:id" element={<Edit /> } />
        {/* <Route path='/category=:category' element={<Home />} /> */}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
