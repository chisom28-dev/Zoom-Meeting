import React from "react";
import Header from "./NavBar.jsx";
import { Link } from "react-router-dom";
import {
  Video,
  Calendar,
  Contact,
  MessageSquare,
  ScreenShare,
  Globe,
  Users,
  Zap,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  BarChart3
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Conferencing",
      desc: "Crystal clear video calls with up to 100 participants in 4K quality",
      linear: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Smart Participant Management",
      desc: "Advanced controls for moderating large meetings with breakout rooms",
      linear: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Intelligent Scheduling",
      desc: "AI-powered scheduling that finds perfect meeting times across timezones",
      linear: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      desc: "Get instant meeting summaries, action items, and follow-ups automatically",
      linear: "from-amber-500 to-orange-500"
    },
    {
      icon: ScreenShare,
      title: "Interactive Screen Sharing",
      desc: "Share screens with annotation tools and remote control capabilities",
      linear: "from-red-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Real-time Translation",
      desc: "Break language barriers with AI-powered real-time translation in 50+ languages",
      linear: "from-indigo-500 to-violet-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "End-to-end encryption, SSO, and compliance with global security standards",
      linear: "from-teal-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Smart Meeting Recording",
      desc: "Automatically record meetings with AI-powered highlights and transcripts",
      linear: "from-fuchsia-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Gain insights with detailed meeting analytics and participation reports",
      linear: "from-blue-500 to-indigo-500"
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Teams", icon: <Users size={20} /> },
    { value: "99.9%", label: "Uptime", icon: <Zap size={20} /> },
    { value: "4.8/5", label: "User Rating", icon: <Star size={20} /> },
    { value: "150+", label: "Countries", icon: <Globe size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <Header />

      {/* HERO SECTION */}
      <div className="relative pt-32 px-4 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-linear-to-r from-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-linear(to right, #ffffff 1px, transparent 1px),
                               linear-linear(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              The Future of Meetings is Here
            </div>

            {/* Main Heading */}
            <h1 className="font-bold mb-6 leading-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-white">Connect </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400">
                Globally,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-400 to-rose-400">
                Meet Seamlessly
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              Experience next-generation video conferencing with AI-powered features,
              real-time translation, and intelligent meeting management designed for modern teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
              <Link 
                to="/Meeting" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <Video size={24} />
                Start Instant Meeting
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

              <Link 
                to="/ContactPage" 
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Play size={20} />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="relative px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">Modern Teams</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need for productive, engaging, and secure virtual meetings
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute -inset-0.5 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" 
                     style={{ background: `linear-linear(135deg, ${item.linear.split(' ')[1]}, ${item.linear.split(' ')[3]})` }}></div>
                
                {/* Card */}
                <div className="relative h-full bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Icon */}
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-linear-to-r ${item.linear} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-white text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text" 
                      style={{ background: `linear-linear(135deg, ${item.linear.split(' ')[1]}, ${item.linear.split(' ')[3]})` }}>
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{item.desc}</p>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
              <div className="relative bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Meetings?</h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of teams who trust VideoConnect for their mission-critical communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/signup"
                    className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started Free
                  </Link>
                  <Link 
                    to="/demo"
                    className="px-8 py-4 border border-gray-600 text-gray-300 font-bold rounded-xl hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
                  >
                    Schedule Enterprise Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 pt-8 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Video className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">VideoConnect</div>
                  <div className="text-sm text-gray-500">Professional Video Conferencing</div>
                </div>
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} VideoConnect. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;