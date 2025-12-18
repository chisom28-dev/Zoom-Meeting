import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
const Meeting = () => {
  const [showJoin, setShowJoin] = useState(false)
  const [meetingId, setMeetingId] = useState('')      // input for joining
  const [hostedId, setHostedId] = useState('')        // generated meeting id
  const [error, setError] = useState('')

  const generateMeetingId = () =>
    Math.random().toString(36).substring(2, 10)

  const handleHostMeeting = () => {
    const id = generateMeetingId()
    setHostedId(id)
    setError('')
    console.log('Hosting meeting:', id)
  }

  const handleJoinMeeting = () => {
    if (!meetingId.trim()) {
      setError('Meeting ID is required')
      return
    }
    setError('')
    console.log('Joining meeting:', meetingId.trim())
    // TODO: navigate to meeting room or validate via backend
  }

  return (
    <div className="bg-[#142145] min-h-screen text-white">
      <NavBar />

      <div className="flex h-[calc(100vh-64px)]">
        {/* Left panel */}
        <div className="w-[40%] p-8 border-r border-white/10">
          <h2 className="text-xl font-semibold mb-4">Upcoming Meetings</h2>
          <div className="space-y-3">
            <div className="bg-white/5 p-4 rounded-lg">
              {hostedId ? (
                <>
                  <p className="font-semibold">Active Meeting</p>
                  <p className="text-sm text-gray-300">ID: {hostedId}</p>
                </>
              ) : (
                <>
                  <p className="font-semibold">No scheduled meetings</p>
                  <p className="text-sm text-gray-400">Host a meeting to get started</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-[60%] p-10">
          <h1 className="font-bold text-3xl text-blue-400 mb-2">My Personal Meeting</h1>
          <p className="text-gray-300 mb-6">
            Start a new meeting instantly or join using a meeting ID.
          </p>

          <div className="lg:flex grid w-full items-center gap-3 mb-8">
            <button
              onClick={handleHostMeeting}
              className="bg-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Host Meeting
            </button>
            <button
              onClick={() => setShowJoin(true)}
              className="bg-gray-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              Join Meeting
            </button>

            {hostedId && (
              <div className='flex gap-2 item-center justify-center'>
              <span className="ml-3 text-sm text-white">
                Meeting ID: <strong>{hostedId}</strong>
              </span>
              <Link to="/MeetingRoom" className="bg-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">Start</Link>
              </div>
            )}
          </div>

          {/* Join modal */}
          {showJoin && (
            <div className="max-w-md bg-white/5 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Join a Meeting</h3>
              <input
                type="text"
                value={meetingId}
                onChange={(e) => setMeetingId(e.target.value)}
                placeholder="Enter Meeting ID"
                className="w-full px-4 py-2 rounded-md bg-[#0f1a38] border border-white/10 focus:outline-none"
              />
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleJoinMeeting}
                  className="bg-blue-600 px-5 py-2 rounded-md font-semibold hover:bg-blue-700"
                >
                  Join
                </button>
                <button
                  onClick={() => setShowJoin(false)}
                  className="bg-gray-600 px-5 py-2 rounded-md font-semibold hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Meeting