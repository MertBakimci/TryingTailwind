import React, { useState } from "react";
import banner from "../img/contactBanner.svg";
const Form = () => {
  return (
    <div className="form flex flex-row mx-auto w-[100%] max-w-none h-auto min-h-[75vh] justify-center align-center">
      <form action="" className="form-control items-start flex flex-row w-full justify-between xl:justify-evenly h-[fit-content]">
        <div className="flex relative bottom-2 flex-col text-black bg-gray-300 w-full max-w-[550px] p-7 h-full rounded-b-[15px]  ">
        <h1 className="text-5xl mb-2 font-semi text-gray-600">CONTACT</h1>
          <div className="form-control w-full flex flex-col gap-0 md:flex-row md:gap-10">
            <div class="form-control w-[100%]">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                class="input input-white input-bordered"
              />
            </div>
            <div class="form-control w-[100%]">
              <label class="label">
                <span class="label-text">Surname</span>
              </label>
              <input
                type="text"
                placeholder="surname"
                class="input input-white input-bordered"
              />
            </div>
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Mail</span>
            </label>
            <input
              type="text"
              placeholder="mail"
              class="input input-white input-bordered"
            />
          </div>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Mail</span>
            </label>
            <textarea
              type="text"
              placeholder="mail"
              class="textarea min-h-[100px] textarea-bordered"
            />
          </div>
          <button className="button mt-5">SEND</button>
        </div>
        <img className="w-[100%] max-w-[475px] mt-[150px] hidden lg:block" src={banner} alt="" />
      </form>
    </div>
  );
};

export default Form;
