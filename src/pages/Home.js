import { getLocation } from "../services/apis/Weather";
import { Searchbar } from "../components/Searchbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="max-w-[1200px] min-h-[450px] h-[100%] w-[100%] border-2  text-white flex justify-evenly items-center">
      <div className=" h-[300px] max-w-[600px] w-[100%] flex border-2 rounded-md flex-col items-center justify-evenly text-2xl">
        <div className="h-[250px] w-[90%]  border-red-700 flex flex-col items-center justify-evenly ">
          <div className="h-[50%]">
            <button
              className="border-2 p-2 rounded-lg"
              onClick={() => {
                dispatch(getLocation());
                navigate("/weather-forcast");
              }}
            >
              Location access
            </button>
          </div>
          <div>Or</div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
