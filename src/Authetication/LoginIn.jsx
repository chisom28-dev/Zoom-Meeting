import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../LandingPageComponent/Header";
import loginImage from "../assets/login.png";

const LoginIn = () => {
  const [value, setValue] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPasssword] = useState(true);
  const [result, setResult] = useState(true);

  const clickbtn = () => {
    setResult(!result);
  };
  const FormValidation = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toLowerCase())) {
      toast.error("Enter a valid email");
      return;
    }
    if (password.trim().length < 8) {
      toast.error("Password Must More Than 8");
      return;
    }
    toast.success("You Have Successfull Login in");
  };
  const showbtn = () => {
    setShowPasssword(!showPassword);
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
        <Toaster position="top-right"></Toaster>
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
  <Toaster position="top-right" />

  <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">

    {/* LEFT SIDE (Form) */}
    <div className="flex flex-col w-full md:w-1/2 p-6 items-center justify-evenly gap-6">
      <h1 className="text-3xl text-blue-600 font-bold">Login In</h1>

      <form className="flex flex-col gap-6 w-full px-4">
        <input
          className="border px-4 py-2.5 rounded"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="border rounded w-full flex items-center">
          <input
            className="px-4 py-2.5 outline-none w-full rounded-l"
            type={showPassword ? "password" : "text"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={showbtn} className="pr-3">
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        </div>

        <button
          onClick={FormValidation}
          type="submit"
          className="bg-blue-600 text-white py-2 rounded font-semibold"
        >
          <Link to="/HomePage" className="text-white">
            Submit Here
          </Link>
        </button>

        <h1 className="flex items-center justify-center gap-3 text-sm">
          You Don’t Have an Account?
          <Link to="/signup" className="text-blue-500 font-semibold">
            Sign Up
          </Link>
        </h1>
      </form>
    </div>

    {/* RIGHT SIDE (Image) */}
    <div className="hidden md:block md:w-1/2">
      <img src={loginImage} alt="" className="w-full h-full object-cover" />
    </div>

  </div>
</div>

      </div>
    </>
  );
};

export default LoginIn;
