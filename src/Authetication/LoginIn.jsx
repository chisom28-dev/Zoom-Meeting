import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../LandingPageComponent/Header";
import loginImage from "../assets/login.png";
import googleIcon from "../assets/googleIcon.png";

const LoginIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form validation & submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.toLowerCase())) {
      toast.error("Enter a valid email");
      return;
    }
    if (password.trim().length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    toast.success("Login successful!");
    navigate("/HomePage");
  };

  // Toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);
  // Email Sign IN
 const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
          navigate("/HomePage");

        } catch (error) {
            console.log(error);
            
        }
    }
  // Google Sign-In
const [isSigning, setIsSigning] = useState(false);

const handleGoogleSignIn = async () => {
  if (isSigning) return;                // guard: ignore concurrent attempts
  setIsSigning(true);
  try {
    console.debug("Starting Google popup...");
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google user:", result.user);
    toast.success(`Welcome ${result.user.displayName}`);
    navigate("/HomePage");
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    // Friendly handling for common popup errors
    if (error?.code === "auth/cancelled-popup-request") {
      toast.error("Sign-in was cancelled (multiple popups). Try again.");
    } else if (error?.code === "auth/popup-closed-by-user") {
      toast.error("Popup closed before finishing sign-in.");
    } else {
      toast.error(error.message || "Google sign-in failed");
    }
  } finally {
    // small delay to avoid immediate re-click issues (optional)
    setTimeout(() => setIsSigning(false), 300);
  }
};


  return (
    <>
      <Header />
      <Toaster position="top-right" />

      <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 bg-gray-100 gap-4 mt-12">
        <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">

          {/* LEFT SIDE (Form) */}
          <div className="flex flex-col w-full md:w-1/2 p-6 items-center justify-evenly gap-6">
            <h1 className="text-3xl text-blue-600 font-bold">Login</h1>

            <form className="flex flex-col gap-6 w-full px-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border px-4 py-2.5 rounded outline-none"
              />

              <div className="border rounded w-full flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-2.5 outline-none w-full rounded-l"
                />
                <button type="button" onClick={togglePassword} className="pr-3">
                  {showPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>

              <button onClick={signIn}
              
                type="submit"
                className="bg-blue-600 text-white py-2 rounded font-semibold"
              >
                Submit
              </button>

              {/* Horizontal line with text */}
              <div className="relative flex items-center text-center my-2 justify-center">
                <div className="absolute left-0 right-0 top-1/2 border-t border-gray-400"></div>
                <span className="bg-white px-2 z-10">Or</span>
              </div>

              {/* Google Sign-In */}
              <button
                type="button"
              disabled={isSigning}
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition"
              >
                <img src={googleIcon} className="w-6 h-6" alt="Google icon" />
                Sign in with Google
              </button>

              <p className="text-sm text-center mt-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 font-semibold">
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
