import React from "react";
import banner from "../img/formBanner.svg";
const Form = () => {
  return (
    <div className="mt-0 pt-4 pl-4 h-[100%] bg-violet-700 bg-gradient-to-r from-violet-700 to-violet-900 mx-auto w-full">
      <div className="w-[100%] max-w-[1920px] relative h-full sm:w-[95%] lg:w-[85%] flex items-center  mx-auto">
        <img className="w-[70%] max-w-[700px] md:top-50 right-20 md:right-10 absolute bottom-0 mt-auto" src={banner} alt="" />
        <div class="form-control absolute top-20 text-black left-0 md:top-1/2 md:transform  md:-translate-y-1/2  z-20 w-full md:mb-5 md:ml-5 max-w-[600px] bg-violet-700 p-5  md:rounded-xl md:shadow-lg">
          <div className="form-control flex flex-col md:flex-row md:gap-5">
            <div className="w-full md:w1/2">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" class="input ring-gray-100 bg-gray-100 appearance-none border border-violet-500 w-full" />
            </div>
            <div className="w-full md:w1/2">
              <label class="label">
                <span class="label-text">Surname</span>
              </label>
              <input type="text" placeholder="Surname" class="input ring-gray-100 bg-gray-100 appearance-none border border-violet-500 w-full" />
            </div>
          </div>
          <div className="w-full">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="text" placeholder="E-Mail" class="input ring-gray-100 bg-gray-100 appearance-none border border-violet-500 w-full" />
          </div>
          <div class="w-full">
            <label class="label">
              <span class="label-text">Your bio</span>
            </label>
            <textarea
              class="textarea h-24  ring-gray-100 bg-gray-100 appearance-none border border-violet-500 textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <a href="mailto:bkmmert2004@gmail.com" class="btn w-full mt-5 bg-violet-600 border-500 border-violet-500 hover:border-violet-500 hover:bg-violet-800">Submit</a>
        </div>
      </div>
    </div>
  );
};

export default Form;
