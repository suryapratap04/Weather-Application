import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { name, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch(login(email, password, navigate))
  };

  return (
    <div className="max-w-[1200px] min-h-[450px] h-[100%] w-[100%] border-2  flex justify-evenly items-center p-2">
      <form
        onSubmit={handleOnSubmit}
        className="mt-6 flex w-[600px] flex-col gap-y-4"
      >
        <label className="w-full ">
          <p className="mb-3 text-2xl leading-[1.375rem] text-white ">
            Name<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
            placeholder="Enter Your Name"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-transparent border-2 p-[12px] text-white"
          />
        </label>
        <label className="w-full ">
          <p className="mb-3 text-2xl leading-[1.375rem] text-white ">
            Email<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-transparent border-2 p-[12px] text-white"
          />
        </label>
        <label className="relative">
          <p className="mb-3 text-2xl leading-[1.375rem] text-white ">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handleOnChange}
            placeholder="Enter Password"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem]  bg-transparent border-2 p-[12px] pr-12  text-white"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-transparent text-white py-[8px] px-[12px] font-medium   border-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
