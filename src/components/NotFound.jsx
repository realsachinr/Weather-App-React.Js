import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex h-[100%] flex-col items-center justify-center">
      <img className="w-[20rem]" src="./src\assets\NoFoundimages.svg" alt="" />

      <Link to='/'>
        <button className="rounded-lg border-red-600 border px-5 py-1 active:bg-white bg-slate-500 bg-transparent  text-red-500 ">
          Go To Home Page
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
