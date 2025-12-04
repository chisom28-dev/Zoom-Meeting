import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "../firebase";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (email) => {
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Check your inbox for the reset link");
    } catch (error) {
      toast.error("Failed to send reset email");
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgotPassword(email);
  };

  return (
    <>
      <Toaster position="top-right"/>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[300px]">
        <h1 className="text-xl font-semibold">Reset Password</h1>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-600 text-white p-2">
          Send Reset Link
        </button>
      </form>
    </>
  );
}
