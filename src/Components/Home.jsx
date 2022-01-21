import React from 'react';
import banner from '../img/homeBanner.svg'

const Home = () => {
  return <div className="home mt-[50px] items-center justify-center gap-10 flex flex-col h-100 w-full">
      <img className="object-contain h-[25%] w-[25%]" src={banner} alt="" />
      <div className="text-3xl font-bold">
          <h1 class="bg-clip-text text-transparent bg-gradient-to-r  from-yellow-500 via-red-500 to-pink-500">
            WELCOME MY PAGE !
          </h1>
        </div>
  </div>;
}

export default Home;
