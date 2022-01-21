import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar padding fixed z-10 w-full max-h-[68px] border-b-2 shadow-xl border-gray-100/[.20] bg-slate-100 h-25">
      <div className="flex flex-row w-full">
        <div className="text-3xl font-bold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r  from-yellow-500 via-red-500 to-pink-500">
            bkm
          </span>
        </div>
        <div className="links hidden ml-auto md:flex gap-[5px] items-center justify-center h-50 flex-row p-5">
          <Link to ="/" class="button">Home</Link>
          <Link to="/form" class="button">Contact</Link>
          <a class="button"  target="_blank" href="https://daisyui.com/"><img class="img-responsive w-[80%] h-[30px]" src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
