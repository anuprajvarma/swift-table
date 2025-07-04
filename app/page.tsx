import { CiSearch } from "react-icons/ci";
import { RiExpandUpDownLine } from "react-icons/ri";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full flex justify-center py-4">
        <div className="w-[70rem] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="text-[#425570] flex text-sm gap-2">
              <button className="border cursor-pointer rounded-lg h-[2rem] px-2 border-gray-300 flex gap-1 items-center">
                <p>Sort Post ID</p>
                <RiExpandUpDownLine />
              </button>
              <button className="border cursor-pointer  rounded-lg h-[2rem] px-2 border-gray-300 flex gap-1 items-center">
                <p>Sort Name</p>
                <RiExpandUpDownLine />
              </button>
              <button className="border cursor-pointer  rounded-lg h-[2rem] px-2 border-gray-300 flex gap-1 items-center">
                <p>Sort Email</p>
                <RiExpandUpDownLine />
              </button>
            </div>

            <form className="flex items-center">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <CiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 w-[20rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                  placeholder="Search name, email or comment"
                  required
                />
              </div>
            </form>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-[#2A3B5D]">
            <table className="w-full text-sm text-left rtl:text-right ">
              <thead className="uppercase bg-[#C8C8D2]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Post ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-6 py-4">Apple MacBook Pro 17</td>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4"> Microsoft Surface Pro</td>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4">Magic Mouse 2</td>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                </tr>
                <tr className="">
                  <td className="px-6 py-4">Google Pixel Phone</td>
                  <td className="px-6 py-4">Gray</td>
                  <td className="px-6 py-4">Phone</td>
                  <td className="px-6 py-4">$799</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
