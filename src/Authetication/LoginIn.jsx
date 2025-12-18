import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, Sparkles, UserCheck, Key } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import Header from "../LandingPageComponent/Header";
import loginImage from "../assets/login.png";
import googleIcon from "../assets/googleIcon.png";

const LoginIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.toLowerCase())) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    return true;
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Welcome back! 🎉");
      navigate("/HomePage");
    } catch (error) {
      console.error("Login error:", error);
      if (error.code === "auth/user-not-found") {
        toast.error("Account not found. Please check your email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        toast.error("Too many attempts. Please try again later.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Welcome back, ${result.user.displayName}! 🎉`);
      navigate("/HomePage");
    } catch (error) {
      if (error?.code !== "auth/popup-closed-by-user") {
        toast.error(error.message || "Google sign-in failed");
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 overflow-hidden">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #333',
            },
          }}
        />
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-linear(to right, #ffffff 1px, transparent 1px),
                               linear-linear(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Stars Effect */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[1px] h-[1px] bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.5 + 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative w-full max-w-6xl flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-800 bg-linear-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-sm shadow-2xl">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-semibold mb-4">
                  <UserCheck size={14} />
                  Welcome Back
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Log In to <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400">VideoConnect</span>
                </h1>
                <p className="text-gray-400">
                  Enter your credentials to access your professional meeting space.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleEmailLogin} className="space-y-6">
                {/* Email Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-12 pr-12 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Must be at least 8 characters long
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-blue-500 bg-gray-800 border-gray-600 rounded focus:ring-blue-500/30 focus:ring-offset-gray-900"
                    />
                    <label htmlFor="remember" className="text-sm text-gray-400">
                      Remember me
                    </label>
                  </div>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-blue-400 hover:text-blue-300 hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </>
                  ) : (
                    <>
                      Log In
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900 text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Sign-In */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading}
                className="w-full py-3 border border-gray-700 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isGoogleLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <img src={googleIcon} className="w-5 h-5" alt="Google" />
                )}
                <span className="font-medium text-gray-300">
                  {isGoogleLoading ? "Signing in..." : "Sign in with Google"}
                </span>
              </button>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <p className="text-gray-400">
                  New to VideoConnect?{" "}
                  <Link 
                    to="/signup" 
                    className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-colors"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Security Badge */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield size={16} className="text-green-400" />
                <span>Your session is secured with end-to-end encryption</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image & Features */}
          <div className="w-full lg:w-1/2 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 lg:p-12 relative overflow-hidden border-l border-gray-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative h-full flex flex-col justify-center">
              {/* Image Container with Glow */}
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <img
                  src={loginImage}
                  alt="Team Collaboration"
                  className="relative w-full max-w-md mx-auto rounded-2xl border border-gray-700 shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Your Professional Meeting Space Awaits</h2>
                
                <div className="space-y-4">
                  {[
                    "Access all your scheduled meetings",
                    "Join or create instant video conferences",
                    "Manage your team and contacts",
                    "Review meeting recordings and transcripts",
                    "Customize your meeting environment",
                    "Access premium features based on your plan"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-linear-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Key size={14} className="text-blue-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Access</div>
                  </div>
                  <div className="p-4 bg-linear-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700">
                    <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for twinkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>
    </>
  );
};

export default LoginIn;