import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../LandingPageComponent/Header";
import signUpImage from "../assets/signup.png";
import googleIcon from "../assets/googleIcon.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 8) {
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

    toast.success("Successfully Signed Up");
    navigate("/login");

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   const signIn = async () => {
          try {
              await createUserWithEmailAndPassword(auth, email, password, name)
            navigate("/login");
  
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

      <div className="flex flex-col items-center justify-center w-full h-screen p-4 mt-10 ">
        <Toaster position="top-right " />

        <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white">
          {/* LEFT SIDE (Form) */}
          <div className="flex flex-col w-full md:w-1/2 p-6 items-center justify-evenly gap-6">
            <h1 className="text-3xl text-blue-600 font-bold">Sign Up</h1>

            <form
              className="flex flex-col gap-6 w-full px-4"
              onSubmit={handleFormSubmit}
            >
              <input
                className="border px-4 py-2.5 rounded"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="border px-4 py-2.5 rounded"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="border rounded w-full flex items-center">
                <input
                  className="px-4 py-2.5 outline-none w-full rounded-l"
                  type={showPassword ? "password" : "text"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="pr-3"
                >
                  {showPassword ? <EyeClosed /> : <Eye />}
                </button>
              </div>

              <button onClick={signIn}
                
                to="/login"
                type="submit"
                className="bg-blue-600 text-white py-2 rounded font-semibold"
                 
                 >
                Sign Up
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

              <h1 className="flex items-center justify-center gap-3 text-sm">
                Already have an account?
                <Link to="/login" className="text-blue-500 font-semibold">
                  Login
                </Link>
              </h1>
            </form>
          </div>

          {/* RIGHT SIDE (Image) */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={signUpImage}
              alt="Sign Up"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
