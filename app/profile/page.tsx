"use client";

import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Header from "../components/Header";
import Link from "next/link";

const Page = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const firstUser = data[0];

        setUser({
          id: firstUser.id,
          name: firstUser.name,
          email: firstUser.email,
          phone: firstUser.phone,
          address: `${firstUser.address.street}, ${firstUser.address.city}`,
        });
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full flex justify-center py-4">
        <div className="w-[70rem] flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#334365] py-4 font-semibold">
            <Link href={"/"}>
              <IoMdArrowBack className="w-5 h-5" />
            </Link>
            <p>Welcome, {user.name}</p>
          </div>
          <div className="w-full h-[30rem] flex flex-col gap-4 p-[3rem] border-2 rounded-lg">
            <div className="flex gap-4 items-center">
              <div className="text-[#334365] flex justify-center items-center w-[5rem] h-[5rem] rounded-full bg-[#F5F5F5] ">
                <p className="text-xl font-semibold">
                  {user.name ? user.name[0] : "U"}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#334365] font-semibold">{user.name}</p>
                <p className="text-[#6F7B8F]">{user.email}</p>
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
                    value={user.id}
                    readOnly
                    className="bg-[#F5F5F5] px-4 py-2 text-[#808A9D] text-sm rounded-lg block w-full"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium ">
                    Email ID
                  </label>
                  <input
                    type="text"
                    value={user.email}
                    readOnly
                    className="bg-[#F5F5F5] px-4 py-2  text-[#808A9D] text-sm rounded-lg block w-full"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium  ">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={user.phone}
                    readOnly
                    className="bg-[#F5F5F5] px-4 py-2  text-[#808A9D] text-sm rounded-lg block w-full"
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
                    value={user.name}
                    readOnly
                    className="bg-[#F5F5F5] px-4 py-2  text-[#808A9D] text-sm rounded-lg block w-full"
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium ">
                    Address
                  </label>
                  <input
                    type="text"
                    value={user.address}
                    readOnly
                    className="bg-[#F5F5F5] px-4 py-2  text-[#808A9D] text-sm rounded-lg block w-full"
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

export default Page;
