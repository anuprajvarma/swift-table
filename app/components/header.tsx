import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
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
    <div className="bg-[#282846] w-full flex justify-center py-4 text-[#C2C2CB]">
      <div className="w-[70rem] flex justify-between items-center">
        <Link href={"/"} className="text-xl">
          SWIFT
        </Link>
        <Link href={"/profile"} className="flex gap-4 items-center">
          <div className="text-[#282846] flex justify-center items-center w-[2.5rem] h-[2.5rem] rounded-full bg-[#F5F5F5] ">
            <p className="text-lg text-[#282846]">
              {user.name ? user.name[0] : "U"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="">{user.name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
