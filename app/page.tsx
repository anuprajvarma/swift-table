"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiExpandUpDownLine } from "react-icons/ri";
import { MdArrowBackIos } from "react-icons/md";
import Header from "./components/Header";

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
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    setCurrentPage(1);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const filteredComments = comments.filter(
    (comment) =>
      comment.name.toLowerCase().includes(searchQuery) ||
      comment.email.toLowerCase().includes(searchQuery) ||
      comment.body.toLowerCase().includes(searchQuery)
  );

  const totalPages = Math.ceil(filteredComments.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filteredComments.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
          {/* Controls */}
          <div className="w-full flex justify-between items-center">
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
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="bg-gray-50 w-[20rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 p-2.5 outline-none"
                  placeholder="Search name, email or comment"
                />
              </div>
            </form>
          </div>

          {/* Table */}
          <div className="relative shadow-md sm:rounded-lg text-[#2A3B5D]">
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
                {currentData.map((comment) => (
                  <tr
                    key={comment.id}
                    className="border-b bg-white hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-[16rem]">
                      {comment.postId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-[16rem]">
                      {comment.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-[16rem]">
                      {comment.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-[16rem]">
                      {comment.body}
                    </td>
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

          <div className="flex w-full justify-end items-center mt-2">
            <div className="flex gap-2 w-fit items-center text-sm text-[#425570]">
              <div className="flex gap-1">
                <p>1-{pageSize} of </p>
                <p>{comments.length} items</p>
              </div>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="rounded disabled:opacity-50 cursor-pointer"
                disabled={currentPage === 1}
              >
                <MdArrowBackIos className="w-4 h-4" />
              </button>

              <button className="border border-gray-500 px-3 py-1 text-sm rounded">
                {currentPage}
              </button>

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="border border-gray-300 px-3 py-1 rounded"
                >
                  {currentPage + 1}
                </button>
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="rounded disabled:opacity-50 cursor-pointer"
                disabled={currentPage >= totalPages}
              >
                <MdArrowBackIos className="w-4 h-4 transform rotate-y-180" />
              </button>
              <div className="text-sm text-gray-700 flex items-center gap-2">
                <select
                  id="pageSize"
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  className="border border-gray-300 rounded p-1 text-xs text-gray-900 w-full"
                >
                  <option value={10}>10 / Page</option>
                  <option value={50}>50/Page</option>
                  <option value={100}>100/Page</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
