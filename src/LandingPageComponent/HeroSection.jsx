import React from "react";
import { Link } from "react-router-dom";
import { Play, Users, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  const features = [
    { text: "Crystal Clear HD Video", icon: <Play size={16} /> },
    { text: "Unlimited Meeting Time", icon: <Zap size={16} /> },
    { text: "End-to-End Encryption", icon: <Shield size={16} /> },
    { text: "Up to 100 Participants", icon: <Users size={16} /> }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-900 via-black to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-linear(to_right,#ffffff22_1px,transparent_1px),linear-linear(to_bottom,#ffffff22_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-purple-300">Trusted by 10,000+ teams worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Connect Instantly,</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
                Anywhere
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Professional-grade video meetings with crystal clear audio, screen sharing,
              recording, and collaboration tools—all in one seamless platform.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-300 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/signup"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Start Free Meeting
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Play size={20} />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-gray-400">Meetings Hosted</div>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:w-1/2 relative">
            {/* Main Card */}
            <div className="relative">
              {/* Glass Card */}
              <div className="relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                {/* Video Call Interface Mockup */}
                <div className="space-y-6">
                  {/* User Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-2xl bg-linear-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                        <div className="text-2xl">👤</div>
                      </div>
                    ))}
                  </div>

                  {/* Control Bar */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                          <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                          <Zap size={20} className="text-green-400" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Live · 45:22
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-linear-to-r from-pink-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 -rotate-12"></div>

              {/* Notification Badge */}
              <div className="absolute top-4 -right-4 bg-linear-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                <div className="flex items-center gap-2 text-sm">
                  <Users size={14} />
                  <span>12 people joined</span>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;