import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../LandingPageComponent/Header";
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
      
      <h1 className="text-2xl text-blue-600 font-bold">Login In</h1>
      <form action="" className="flex flex-col gap-3 ">
        <input
          className="outline px-4 py-2.5"
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <div className="border flex items-center justify-center">
          <input
            className=" px-4 py-2.5 outline-none"
            type={showPassword ? "password" : "text"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={showbtn} className="pr-3">
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        </div>
        <button
          onClick={FormValidation}
          type="submit"
          className="outline bg-blue-600 text-white py-2   "
        >
          <Link to="/homePage" className="text-white cursor-point font-semibold" > Submit Here </Link>
          
        </button>
        <h1 className='flex items-center justify-center gap-3' >You Dont Have an Account? <Link to="/signup" className="text-blue-500 cursor-point font-semibold" >Sign Up</Link></h1>
      </form>
    </div>
    </>
  );
};

export default LoginIn;
