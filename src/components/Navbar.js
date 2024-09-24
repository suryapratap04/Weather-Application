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
    </div>
  );
}
