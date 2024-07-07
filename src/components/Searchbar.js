import React, { useState } from "react";
import { city_single_day } from "../services/apis/Weather";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Searchbar = () => {
  const [inp, setInp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="h-[100px] max-w-[550px] w-[90%] border-red-700 flex flex-col items-center justify-evenly ">
      <div className="flex justify-center items-center w-[100%]">
        <input
          placeholder="Enter the city"
          className="bg-transparent border-2 p-2  rounded-lg mr-3 w-[80%]"
          onChange={(e) => {
            setInp(e.target.value);
            // console.log(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("function called for value " + inp);
              dispatch(city_single_day(inp));
              navigate("/weather-forcast");
            }
          }}
          type="text"
          name={inp}
          value={inp}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => {
            console.log("function called for value " + inp);
            dispatch(city_single_day(inp));
            navigate("/weather-forcast");
          }}
        ></i>
      </div>
    </div>
  );
};
