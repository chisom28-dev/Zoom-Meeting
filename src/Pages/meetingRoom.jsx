import React, { useState } from "react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  PhoneOff,
  Users,
  MessageSquare,
  ScreenShare,
  Clock,
  Bot,
  Share2,
  Volume2,
  Maximize2,
  Settings,
  UserPlus,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export default function MeetingRoom() {
  // State
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [aiPanelVisible, setAiPanelVisible] = useState(false);
  const [participantsPanelVisible, setParticipantsPanelVisible] = useState(false);
  const [meetingTime] = useState("01:58:27");

  // Participants state
  const [participants, setParticipants] = useState([
    { id: 1, name: "Alex Johnson", role: "Host", speaking: true },
    { id: 2, name: "Sam Rivera", role: "Presenter", speaking: false },
  ]);

  const [presenter, setPresenter] = useState(participants[1]); // Default presenter

  const AI_TRANSCRIPT = [
    { speaker: "Alex Johnson", text: "Simplify onboarding for new users.", time: "01:45" },
    { speaker: "Sam Rivera", text: "UI feels heavy.", time: "02:15" },
    { speaker: "Alex Johnson", text: "AI suggestions guide design.", time: "02:45" },
    { speaker: "Jordan Lee", text: "Consider progressive disclosure patterns.", time: "03:20" },
  ];

  // Toggle functions
  const toggleMic = () => setMicOn(!micOn);
  const toggleVideo = () => setVideoOn(!videoOn);
  const toggleScreenShare = () => setScreenSharing(!screenSharing);
  const toggleAiPanel = () => setAiPanelVisible(!aiPanelVisible);
  const toggleParticipantsPanel = () => setParticipantsPanelVisible(!participantsPanelVisible);

  const leaveMeeting = () => {
    if (window.confirm("Are you sure you want to leave the meeting?")) {
      console.log("Leaving meeting...");
    }
  };

  // Add participant dynamically
  const addParticipant = (participant) => {
    setParticipants((prev) => [...prev, participant]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0d1b2a] via-[#142145] to-[#1a1d25] text-white flex flex-col">
      {/* Top Bar */}
      <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <span className="font-semibold text-sm sm:text-base">Live Meeting</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <span className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 py-1 rounded-full">
            <Users size={12} /> {participants.length}
          </span>
          <span className="flex items-center gap-1 sm:gap-2">
            <Clock size={12} /> {meetingTime}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Presenter / Full Height */}
        <div className="flex-1 flex flex-col p-2 sm:p-4">
          <div className="relative flex-1 bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="flex flex-col items-center justify-center h-full p-4">
              {videoOn ? (
                <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/20 mb-4">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-2xl font-bold">{presenter.name.split(" ").map(n=>n[0]).join("")}</span>
                  </div>
                </div>
              ) : (
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center border-2 border-dashed border-white/20 mb-4">
                  <VideoOff size={48} className="text-gray-500" />
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{presenter.name}</h2>
              <p className="text-gray-400 text-sm">Presenting now</p>
            </div>
          </div>

          {/* Participant Boxes (Dynamic) */}
          <div className="flex overflow-x-auto gap-2 sm:gap-3 mt-2">
            {participants.filter(p => p.id !== presenter.id).map(p => (
              <div key={p.id} className="flex-none w-20 sm:w-28 rounded-xl overflow-hidden border-2 border-white/10 hover:border-blue-400 transition-all">
                <div className="h-16 sm:h-32 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-sm sm:text-lg font-bold">{p.name.split(" ").map(n=>n[0]).join("")}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-center truncate">{p.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Assistant Panel - Mobile Drawer */}
        {aiPanelVisible && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end lg:relative lg:flex lg:w-96">
            <aside className="w-full sm:w-96 h-full bg-linear-to-b from-[#12141a] to-[#0a0c12] flex flex-col">
              <div className="p-4 flex items-center justify-between border-b border-white/10">
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <button onClick={toggleAiPanel} className="text-white text-xl">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {AI_TRANSCRIPT.map((item,index)=>(
                  <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-300">{item.speaker}</span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                    <p className="text-sm text-gray-200">{item.text}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* Participants Panel - Mobile Drawer */}
        {participantsPanelVisible && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end lg:relative lg:flex lg:w-80">
            <aside className="w-full sm:w-80 h-full bg-linear-to-b from-[#12141a] to-[#0a0c12] flex flex-col">
              <div className="p-4 flex items-center justify-between border-b border-white/10">
                <h3 className="font-bold text-lg">Participants</h3>
                <button onClick={toggleParticipantsPanel} className="text-white text-xl">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {participants.map(p=>(
                  <div key={p.id} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                      {p.name.split(" ").map(n=>n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm">{p.name}</p>
                      <p className="text-xs text-gray-400">{p.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        )}
      </div>

      {/* Control Bar */}
      <footer className="h-20 border-t border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center px-2 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-4 max-w-4xl w-full justify-between">
          <div className="flex items-center gap-2">
            <button onClick={toggleAiPanel} className="p-3 rounded-full bg-white/10 hover:bg-white/20">
              <Bot size={20} />
            </button>
            <button onClick={toggleParticipantsPanel} className="p-3 rounded-full bg-white/10 hover:bg-white/20">
              <Users size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={toggleMic} className="p-3 rounded-full bg-white/10 hover:bg-white/20">
              {micOn ? <Mic size={20} /> : <MicOff size={20} />}
            </button>
            <button onClick={toggleVideo} className="p-3 rounded-full bg-white/10 hover:bg-white/20">
              {videoOn ? <Video size={20} /> : <VideoOff size={20} />}
            </button>
            <button onClick={leaveMeeting} className="px-4 py-2 rounded-full bg-red-600/80 hover:bg-red-700 text-sm flex items-center gap-1">
              <PhoneOff size={18} /> Leave
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
