import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="max-w-[1200px] h-[100px] w-[100%] border-2  text-white flex justify-evenly items-center">
      <NavLink to={"/"}>
        <div className=" font-bold text-6xl custom-sm:font-normal custom-sm:text-[40px]">
          Weather App
        </div>
      </NavLink>
      <div className="hidden md:flex  border-yellow-300 w-[35%] justify-evenly items-center">
        <NavLink to={"/signin"}>
          <button className="border-2 p-2 rounded-lg ">Sign-in</button>
        </NavLink>
        <NavLink to={"/signup"}>
          <button className="border-2 p-2 rounded-lg">Sign-up</button>
        </NavLink>
      </div>
      <button className="mr-4 md:hidden">
        <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
      </button>
    </div>
  );
}
