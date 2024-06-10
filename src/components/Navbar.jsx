import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex  relative items-center shadow-2xl border-b-1 justify-between px-52 ">
      <div
        className="absolute  bg-transparent opacity-50 blur-md"
        style={{ backdropFilter: "blur(50px)" }}
      ></div>

      <div className="w-14">
        <img
          src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png"
          alt=""
        />
      </div>
      <div className="flex gap-4">
        <Link to="/" className="active:text-white border border-gray-800 py-1 bg-slate-400 rounded-md px-4">
          Home
        </Link>
        <Link to="/search" className="active:text-white border border-gray-800 py-1 bg-slate-400 rounded-md px-4">
          Search
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
