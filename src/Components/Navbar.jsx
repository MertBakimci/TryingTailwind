import React, {useState,useEffect} from "react";

const Navbar = () => {
    const [menu,setMenu] = useState(false);

    useEffect(() => {
       if (window.innerWidth > 768) {
        setMenu(true)
       }
    }, [])
  return (
    <nav className="navbar w-full shadow-sm bg-neutral text-neutral-content ">
      <div className="container flex flex-wrap mx-auto">
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
          <div class={`${menu ? "" : "hidden"} md:ml-auto justify-evenly items-center flex flex-col  md:flex-row w-full md:w-auto md:order-1`}>
            <a class="w-full md:w-auto btn btn-ghost btn-sm rounded-btn">Home</a>
              <a class="w-full md:w-auto btn btn-ghost btn-sm rounded-btn">daısyUI</a>
              <a class="w-full md:w-auto btn btn-ghost btn-sm rounded-btn">Tailwind</a>
              </div>
        </div>
    </nav>
  );
};

export default Navbar;
