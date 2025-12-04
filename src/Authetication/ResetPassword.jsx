
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
export default function ResetPassword() {
const [password, setPassword] = useState("");
const [showPassword, setShowPasssword] = useState(true);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    handleForgotPassword(email);
  };

  return (
    <>
      <Toaster position="top-right"/>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[300px]">
        <h1 className="text-xl font-semibold">Create New Password</h1>
         <div className="border flex items-center justify-center">
          <input
            className=" px-4 py-2.5 outline-none"
            value={password}
            type={showPassword ? "password" : "text"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={showbtn} className="pr-3">
            {showPassword ? <EyeClosed /> : <Eye />}
          </button>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2">
          Send Reset Link
        </button>
      </form>
    </>
  );
}
