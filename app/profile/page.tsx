import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Header from "../components/header";

const page = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full flex justify-center py-4">
        <div className="w-[70rem] flex flex-col gap-4">
          <button className="flex items-center gap-2 text-[#282846] cursor-pointer">
            <IoMdArrowBack className="w-5 h-5" />
            <p>Welcome, Ervin Howell</p>
          </button>
          <div className="w-full h-[40rem] flex flex-col gap-4 p-[3rem] border border-[#282846] rounded-lg">
            <div className="flex gap-4 items-center">
              <div className="text-[#282846] flex justify-center items-center w-[5rem] h-[5rem] rounded-full bg-[#F5F5F5] ">
                <p className="text-xl">EH</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#282846]">Erin Howell</p>
                <p className="text-[#6F7B8F]">anupraj18@gmail.com</p>
              </div>
            </div>

            <form className="flex gap-4 text-[#6F7B8F]">
              <div className="w-[30rem]">
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium">
                    User ID
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="bg-[#F5F5F5] p-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium ">
                    Email ID
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-[#F5F5F5] p-2  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium  ">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="bg-[#F5F5F5] p-2  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                  />
                </div>
              </div>
              <div className="w-[30rem]">
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="bg-[#F5F5F5] p-2  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium ">
                    Address
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-[#F5F5F5] p-2  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
