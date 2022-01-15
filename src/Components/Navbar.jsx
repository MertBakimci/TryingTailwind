import React, {useState,useEffect} from "react";

const Navbar = () => {
    const [menu,setMenu] = useState(false);

    useEffect(() => {
       if (window.innerWidth > 768) {
        setMenu(true)
       }
    }, [])
  return (
    <nav className="navbar max-w-none fixed z-50 top-0 bg-gradient-to-r from-violet-700 to-violet-900 border-b-2 border-opacity-20 border-gray-100 w-full shadow-lg bg-violet-600 text-neutral-content ">
      <div className="container max-w-none sm:w-[95%] lg:w-[85%] flex flex-wrap mx-auto">
          <span class="text-xl font-bold">Navbar</span>
          <div class="md:hidden flex items-center ml-auto">
            <button class="btn btn-ghost" onClick={() => setMenu(!menu)}>
              <svg
                class=" w-6 h-6 text-gray-500 hover:text-gray-100 "
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
          <div class={`${menu ? "" : "hidden"} absolute z-50 md:sticky top-[96%] left-0 bg-gradient-to-l md:bg-gradient-to-r md:from-transparent md:to-transparent  from-violet-900  to-violet-700  p-4  lg:ml-auto justify-evenly items-center flex flex-col  md:flex-row w-full md:w-auto md:order-1`}>
            <a href="#" class="w-full md:w-auto btn btn-ghost btn-sm rounded-btn">Home</a>
              <a href="#" class="w-full md:w-auto btn btn-ghost btn-sm rounded-btn">daısyUI</a>
              <a href="#" class="w-full md:w-auto btn btn-ghost btn-sm rounded-btn">Tailwind</a>
              </div>
        </div>
    </nav>
  );
};

export default Navbar;
