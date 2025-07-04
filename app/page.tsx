"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiExpandUpDownLine } from "react-icons/ri";
import Header from "./components/header";

interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Home() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [sortBy, setSortBy] = useState<keyof CommentType | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSort = (key: keyof CommentType) => {
    const order = sortBy === key && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(key);
    setSortOrder(order);

    const sorted = [...comments].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setComments(sorted);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredComments = comments.filter(
    (comment) =>
      comment.name.toLowerCase().includes(searchQuery) ||
      comment.email.toLowerCase().includes(searchQuery) ||
      comment.body.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full flex justify-center py-4">
        <div className="w-[70rem] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="text-[#425570] flex text-sm gap-2">
              <button
                onClick={() => handleSort("postId")}
                className="border cursor-pointer rounded-lg h-[2rem] px-2 border-gray-300 flex gap-1 items-center"
              >
                <p>Sort Post ID</p>
                <RiExpandUpDownLine />
              </button>
              <button
                onClick={() => handleSort("name")}
                className="border cursor-pointer rounded-lg h-[2rem] px-2 border-gray-300 flex gap-1 items-center"
              >
                <p>Sort Name</p>
                <RiExpandUpDownLine />
              </button>
              <button
                onClick={() => handleSort("email")}
                className="border cursor-pointer rounded-lg h-[2rem] px-2 border-gray-300 flex gap-1 items-center"
              >
                <p>Sort Email</p>
                <RiExpandUpDownLine />
              </button>
            </div>

            <form className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="bg-gray-50 w-[20rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 outline-none"
                  placeholder="Search name, email or comment"
                />
              </div>
            </form>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-[#2A3B5D]">
            <table className="w-full text-sm text-left">
              <thead className="uppercase bg-[#C8C8D2]">
                <tr>
                  <th className="px-6 py-3 w-[8rem]">Post ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Comment</th>
                </tr>
              </thead>
              <tbody>
                {filteredComments.map((comment) => (
                  <tr
                    key={comment.id}
                    className="border-b bg-white hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{comment.postId}</td>
                    <td className="px-6 py-4">{comment.name}</td>
                    <td className="px-6 py-4">{comment.email}</td>
                    <td className="px-6 py-4">{comment.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredComments.length === 0 && (
              <div className="p-4 text-gray-500 text-center">
                No matching results found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
