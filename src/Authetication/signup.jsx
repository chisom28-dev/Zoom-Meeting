import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false); // false = Sign Up, true = Login
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && name.trim().length < 8) {
      toast.error("Name must be at least 8 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toLowerCase())) {
      toast.error("Enter a valid email");
      return;
    }

    if (password.trim().length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    toast.success(isLogin ? "Successfully Logged In" : "Successfully Signed Up");
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleLoginSignUp = () => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <Toaster position="top-right" />

      <h1 className="text-2xl text-blue-600 font-bold">
       SIGN UP
      </h1>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 w-80">
          <input
            className="outline px-4 py-2.5"
            value={name}
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        

        <input
          className="outline px-4 py-2.5"
          value={email}
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="border flex items-center justify-between px-2">
          <input
            className="outline-none py-2.5 w-full"
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={togglePasswordVisibility}
            type="button"
            className="pl-2"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </button>
        </div>

        <button
          type="submit"
          className="outline bg-blue-600 text-white py-2"
        >
          Sign Up
        </button>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
          <span
            onClick={toggleLoginSignUp}
            className="cursor-pointer text-blue-500 font-semibold"
          >
            <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}
export default SignUp
