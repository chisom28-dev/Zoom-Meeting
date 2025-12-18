import React from "react";
import Header from "../LandingPageComponent/Header";
import { 
  Share2, 
  Video, 
  MessageSquare, 
  Save, 
  Shield, 
  Users, 
  Zap, 
  Clock,
  Globe,
  Lock,
  Bell,
  Download,
  Palette,
  Code,
  Cloud
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Video className="text-blue-500" size={24} />,
      title: "Crystal Clear Video",
      description: "HD video streaming with intelligent bandwidth optimization for flawless quality on any connection.",
      highlights: ["1080p/4K Support", "AI Noise Cancellation", "Low Light Enhancement"],
      linear: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Share2 className="text-purple-500" size={24} />,
      title: "Advanced Screen Sharing",
      description: "Share your entire screen, specific applications, or whiteboard with annotation tools and remote control.",
      highlights: ["Application Sharing", "Whiteboard", "Remote Control", "Multi-screen"],
      linear: "from-purple-400 to-pink-400"
    },
    {
      icon: <MessageSquare className="text-green-500" size={24} />,
      title: "Real-time Collaboration",
      description: "Integrated chat, file sharing, reactions, and polls to keep everyone engaged and productive.",
      highlights: ["Group Chat", "File Sharing", "Live Polls", "Emoji Reactions"],
      linear: "from-green-400 to-emerald-400"
    },
    {
      icon: <Save className="text-amber-500" size={24} />,
      title: "Cloud Recording",
      description: "Automatically record meetings with AI-powered transcription and searchable highlights.",
      highlights: ["Auto Transcription", "Searchable Content", "Cloud Storage", "Easy Sharing"],
      linear: "from-amber-400 to-orange-400"
    },
    {
      icon: <Shield className="text-indigo-500" size={24} />,
      title: "Enterprise Security",
      description: "End-to-end encryption, SOC2 compliance, and advanced access controls for mission-critical meetings.",
      highlights: ["E2E Encryption", "GDPR Compliant", "SSO Support", "Audit Logs"],
      linear: "from-indigo-400 to-violet-400"
    },
    {
      icon: <Users className="text-pink-500" size={24} />,
      title: "Breakout Rooms",
      description: "Effortlessly split large meetings into smaller groups for focused discussions and workshops.",
      highlights: ["Auto Assignment", "Timer Settings", "Moderator Access", "Easy Regroup"],
      linear: "from-pink-400 to-rose-400"
    },
    {
      icon: <Globe className="text-teal-500" size={24} />,
      title: "Global Connectivity",
      description: "Low-latency global network with servers in 50+ countries for seamless international meetings.",
      highlights: ["50+ Locations", "99.9% Uptime", "Auto Region Select", "Redundant Backups"],
      linear: "from-teal-400 to-cyan-400"
    },
    {
      icon: <Code className="text-slate-600" size={24} />,
      title: "API & Integration",
      description: "Comprehensive API, webhooks, and native integrations with your favorite productivity tools.",
      highlights: ["REST API", "Webhooks", "Slack Integration", "Calendar Sync"],
      linear: "from-slate-400 to-gray-400"
    }
  ];

  const platformFeatures = [
    { icon: <Zap />, label: "Lightning Fast", value: "< 100ms latency" },
    { icon: <Clock />, label: "Unlimited Duration", value: "24/7 meetings" },
    { icon: <Lock />, label: "Secure", value: "Military-grade encryption" },
    { icon: <Bell />, label: "Notifications", value: "Smart alerts" },
    { icon: <Download />, label: "Offline Access", value: "Recordings available" },
    { icon: <Palette />, label: "Custom Branding", value: "White-label options" },
    { icon: <Cloud />, label: "Cloud Storage", value: "Unlimited for Enterprise" },
    { icon: <Users />, label: "Scalable", value: "1 to 1000+ participants" }
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-linear-to-b from-white via-gray-50 to-white py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-green-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-linear(to right, #3b82f6 1px, transparent 1px),
                               linear-linear(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              Powerful Features
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need for <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">Professional Meetings</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From crystal-clear video to advanced collaboration tools, we've built every feature to enhance your virtual meetings.
            </p>
          </div>

          {/* Platform Stats */}
          <div className="mb-20">
            <div className="bg-linear-to-r from-white to-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {platformFeatures.map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-3">
                      {React.cloneElement(feature.icon, { className: "text-blue-600", size: 20 })}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{feature.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{feature.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* linear Corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                    <div className={`absolute -top-8 -right-8 w-32 h-32 bg-linear-to-br ${feature.linear} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Section */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-linear-to-r from-blue-50 via-white to-purple-50 rounded-3xl border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Experience the Difference
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    See how VideoConnect transforms virtual meetings into engaging, productive experiences with our interactive demo.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
                      Try Live Demo
                    </button>
                    <button className="px-8 py-4 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all">
                      View All Features
                    </button>
                  </div>
                </div>
                
                {/* Interactive Demo Preview */}
                <div className="relative">
                  <div className="relative bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 overflow-hidden">
                    {/* Video Grid Mockup */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-linear-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                          <div className="text-2xl">👤</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Control Bar */}
                    <div className="bg-gray-800 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                          </div>
                          <div className="w-10 h-10 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center">
                            <Share2 size={18} className="text-green-400" />
                          </div>
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full border border-blue-500/30 flex items-center justify-center">
                            <MessageSquare size={18} className="text-blue-400" />
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Live • 12 Participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-3 -right-3 w-20 h-20 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg"></div>
                    <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-linear-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Section */}
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Seamlessly Integrates With Your Favorite Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {["Slack", "Google Calendar", "Microsoft Teams", "Notion", "Zoom", "Asana", "Jira", "Salesforce"].map((tool) => (
                <div key={tool} className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;