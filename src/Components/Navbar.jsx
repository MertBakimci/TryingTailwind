import React, {useState,useEffect} from "react";

const Navbar = () => {
    const [menu,setMenu] = useState(false);

 
    useEffect(() => {
     if(menu === true) {
       document.getElementById('nav').classList.toggle("left-0");
       document.getElementById('nav').classList.remove("left-[-100%]");
     } else {
      document.getElementById('nav').classList.toggle("left-[-100%]");
      document.getElementById('nav').classList.remove("left-0");
     }
    }, [menu])
  return (
    <div>
      <div className={`overlay z-40 transition-all visible md:invisible duration-500 ease-in-out absolute top-0 left-0 h-[100vh] w-[100vw] bg-black ${menu ? "visible opacity-50" : "invisible opacity-0 "}`}></div>
    <nav className="navbar max-w-none fixed z-50 top-0 bg-gradient-to-r from-violet-700 to-violet-900 border-b-2 border-opacity-20 border-gray-100 w-full shadow-lg bg-violet-600 text-neutral-content ">
      <div className="container  max-w-none sm:w-[95%] lg:w-[85%] flex flex-wrap mx-auto">
          <span class="text-xl font-bold">Navbar</span>
          <div class="md:hidden flex items-center ml-auto">
            <button class="btn btn-ghost" onClick={() => setMenu(!menu)}>
              <svg
                class=" w-6 h-6 text-gray-300 hover:text-gray-100 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div id="nav" class={`transition-all  ease-in-out duration-500 absolute z-50 md:h-auto md:w-auto md:sticky top-[96%] h-[100vh]  bg-gradient-to-l md:bg-gradient-to-r md:from-transparent md:to-transparent  from-violet-800  to-violet-700  p-1  md:ml-auto justify-start items-center flex flex-col  md:flex-row w-[60%] md:order-1`}>
            <a href="#" class="w-full mt-4 md:mt-0 md:w-auto btn btn-ghost btn rounded-btn">Home</a>
              <a href="#" class="w-full md:w-auto btn btn-ghost btn rounded-btn">daısyUI</a>
              <a href="#" class="w-full md:w-auto btn btn-ghost btn rounded-btn">Tailwind</a>
              </div>
        </div>
  
    </nav>
    </div>
  );
};

export default Navbar;
