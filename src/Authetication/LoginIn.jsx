import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"; // Corrected import
import Header from "../LandingPageComponent/Header";
import loginImage from "../assets/login.png";
import googleIcon from "../assets/googleIcon.png";

const LoginIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSigningGoogle, setIsSigningGoogle] = useState(false);

  // Consolidated Submit Handler
  const handleEmailLogin = async (e) => {
    e.preventDefault();

    // 1. Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toLowerCase())) {
      return toast.error("Enter a valid email");
    }
    if (password.trim().length < 8) {
      return toast.error("Password must be at least 8 characters");
    }

    // 2. Firebase Sign In
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      navigate("/HomePage");
    } catch (error) {
      console.error(error);
      // Handle specific Firebase errors
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        toast.error("Invalid email or password");
      } else {
        toast.error("Failed to login. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (isSigningGoogle) return;
    setIsSigningGoogle(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Welcome ${result.user.displayName}`);
      navigate("/HomePage");
    } catch (error) {
      if (error?.code !== "auth/popup-closed-by-user") {
        toast.error(error.message || "Google sign-in failed");
      }
    } finally {
      setTimeout(() => setIsSigningGoogle(false), 300);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Header />
      <Toaster position="top-right" />

      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gray-100 gap-4 mt-12">
        <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">

          {/* LEFT SIDE (Form) */}
          <div className="flex flex-col w-full md:w-1/2 p-6 items-center justify-evenly gap-6">
            <h1 className="text-3xl text-blue-600 font-bold">Login</h1>

            <form className="flex flex-col gap-6 w-full px-4" onSubmit={handleEmailLogin}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-2.5 rounded outline-none focus:border-blue-500"
              />

              <div className="border rounded w-full flex items-center focus-within:border-blue-500">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2.5 outline-none w-full rounded-l"
                />
                <button type="button" onClick={togglePassword} className="pr-3 text-gray-500">
                  {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                </button>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition disabled:bg-blue-300"
              >
                {isLoading ? "Logging in..." : "Submit"}
              </button>

              <div className="relative flex items-center text-center my-2 justify-center">
                <div className="absolute left-0 right-0 top-1/2 border-t border-gray-400"></div>
                <span className="bg-white px-2 z-10 text-gray-500 text-sm">Or</span>
              </div>

              <button
                type="button"
                disabled={isSigningGoogle}
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition disabled:opacity-50"
              >
                <img src={googleIcon} className="w-6 h-6" alt="Google icon" />
                Sign in with Google
              </button>

              <p className="text-sm text-center mt-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>

          {/* RIGHT SIDE (Image) */}
          <div className="hidden md:block md:w-1/2">
            <img src={loginImage} alt="Login" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginIn;