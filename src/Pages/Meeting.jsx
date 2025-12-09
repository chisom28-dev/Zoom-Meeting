// import React, { useEffect, useRef, useState } from "react";
// import { getAuth } from "firebase/auth";
// import { doc, setDoc, getDoc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
// // import { db } from "../firebase"; // your initialized Firebase Firestore
// import { v4 as uuidv4 } from "uuid";

// const MeetingPage = ({ roomId }) => {
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();
//   const [pc, setPc] = useState(null);
//   const [localStream, setLocalStream] = useState(null);

//   useEffect(() => {
//     const init = async () => {
//       // 1. Get user media
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       localVideoRef.current.srcObject = stream;
//       setLocalStream(stream);

//       // 2. Create PeerConnection
//       const peerConnection = new RTCPeerConnection({
//         iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
//       });
//       setPc(peerConnection);

//       // Add local tracks to connection
//       stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

//       // Remote tracks
//       peerConnection.ontrack = (event) => {
//         remoteVideoRef.current.srcObject = event.streams[0];
//       };

//       // ICE candidate collection
//       const roomRef = doc(db, "rooms", roomId);
//       peerConnection.onicecandidate = async (event) => {
//         if (event.candidate) {
//           await updateDoc(roomRef, { iceCandidates: arrayUnion(event.candidate.toJSON()) });
//         }
//       };

//       // 3. Check if room exists
//       const roomSnapshot = await getDoc(roomRef);
//       if (!roomSnapshot.exists()) {
//         // Create offer if room doesn't exist
//         const offer = await peerConnection.createOffer();
//         await peerConnection.setLocalDescription(offer);
//         await setDoc(roomRef, { offer: offer.toJSON(), iceCandidates: [] });
//       } else {
//         // Join existing room
//         const roomData = roomSnapshot.data();
//         await peerConnection.setRemoteDescription(new RTCSessionDescription(roomData.offer));
//         const answer = await peerConnection.createAnswer();
//         await peerConnection.setLocalDescription(answer);
//         await updateDoc(roomRef, { answer: answer.toJSON() });
//       }

//       // Listen for remote ICE candidates
//       onSnapshot(roomRef, (snapshot) => {
//         const data = snapshot.data();
//         if (!data) return;

//         if (data.answer && peerConnection.localDescription.type === "offer") {
//           peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
//         }

//         if (data.iceCandidates) {
//           data.iceCandidates.forEach(candidate => {
//             peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
//           });
//         }
//       });
//     };

//     init();

//     return () => {
//       if (localStream) {
//         localStream.getTracks().forEach(track => track.stop());
//       }
//       if (pc) pc.close();
//     };
//   }, [roomId]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
//       <div className="flex gap-4">
//         <video ref={localVideoRef} autoPlay playsInline muted className="w-80 h-60 bg-black"/>
//         <video ref={remoteVideoRef} autoPlay playsInline className="w-80 h-60 bg-black"/>
//       </div>
//     </div>
//   );
// };

// export default MeetingPage;
