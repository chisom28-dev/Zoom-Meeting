import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight, CheckCircle, Shield, Sparkles, Stars } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import Header from "../LandingPageComponent/Header";
import signUpImage from "../assets/signup.png";
import googleIcon from "../assets/googleIcon.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (formData.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.toLowerCase())) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }

    if (!formData.agreeTerms) {
      toast.error("Please agree to the Terms & Conditions");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Account created successfully! Welcome aboard! 🎉");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error("This email is already registered. Please login.");
      } else if (error.code === 'auth/weak-password') {
        toast.error("Password is too weak. Please use a stronger password.");
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success(`Welcome ${result.user.displayName}! 🎉`);
      navigate("/HomePage");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      if (error?.code === "auth/cancelled-popup-request") {
        toast.error("Sign-in was cancelled. Please try again.");
      } else if (error?.code === "auth/popup-closed-by-user") {
        toast.error("Popup closed before completing sign-in.");
      } else {
        toast.error(error.message || "Google sign-in failed");
      }
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const passwordStrength = formData.password.length > 0 
    ? formData.password.length >= 12 ? "Strong" 
      : formData.password.length >= 8 ? "Medium" 
      : "Weak"
    : "";

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-[#000101] flex items-center justify-center p-4 overflow-hidden">
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
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-linear(to right, #ffffff 1px, transparent 1px),
                               linear-linear(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating linear Orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-linear-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
          
          {/* Stars Effect */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
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
                  <Sparkles size={14} />
                  Join VideoConnect
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Create Your <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400">Free Account</span>
                </h1>
                <p className="text-gray-400">
                  Start your journey with the world's most reliable video conferencing platform.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

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
                    {passwordStrength && (
                      <span className={`ml-2 text-xs font-semibold ${
                        passwordStrength === "Strong" ? "text-green-400" :
                        passwordStrength === "Medium" ? "text-amber-400" : "text-red-400"
                      }`}>
                        • {passwordStrength}
                      </span>
                    )}
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
                    Minimum 8 characters with letters and numbers
                  </div>
                </div>

                {/* Password Strength Indicator */}
                {formData.password.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Password strength</span>
                      <span className={`font-semibold ${
                        passwordStrength === "Strong" ? "text-green-400" :
                        passwordStrength === "Medium" ? "text-amber-400" : "text-red-400"
                      }`}>
                        {passwordStrength}
                      </span>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          passwordStrength === "Strong" ? "w-full bg-green-500" :
                          passwordStrength === "Medium" ? "w-2/3 bg-amber-500" : "w-1/3 bg-red-500"
                        }`}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-blue-500 bg-gray-800 border-gray-600 rounded focus:ring-blue-500/30 focus:ring-offset-gray-900"
                  />
                  <label className="text-sm text-gray-400">
                    I agree to the{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline font-medium">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline font-medium">Privacy Policy</a>
                  </label>
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
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
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
                  {isGoogleLoading ? "Signing in..." : "Sign up with Google"}
                </span>
              </button>

              {/* Login Link */}
              <div className="text-center mt-8">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link 
                    to="/login" 
                    className="text-blue-400 font-semibold hover:text-blue-300 hover:underline transition-colors"
                  >
                    Log in here
                  </Link>
                </p>
              </div>

              {/* Security Badge */}
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield size={16} className="text-green-400" />
                <span>End-to-end encrypted & secure</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image & Benefits */}
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
                  src={signUpImage}
                  alt="Collaboration"
                  className="relative w-full max-w-md mx-auto rounded-2xl border border-gray-700 shadow-2xl"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white">Why Join VideoConnect?</h2>
                
                <div className="space-y-4">
                  {[
                    "HD video quality with crystal clear audio",
                    "Unlimited 1-on-1 meetings forever",
                    "Screen sharing & recording capabilities",
                    "Advanced security & encryption",
                    "24/7 customer support",
                    "No credit card required to start"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-linear-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <CheckCircle size={14} className="text-green-400" />
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Premium Badge */}
                <div className="mt-8 p-4 bg-linear-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                      <Stars size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Free Forever Plan</div>
                      <div className="text-sm text-gray-400">Start with all essential features</div>
                    </div>
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

export default SignUp;