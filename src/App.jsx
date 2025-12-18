import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPageComponent/landingPage";
import SignUp from "./Authetication/signup";
import LoginIn from "./Authetication/LoginIn";
import Header from "./LandingPageComponent/Header";
import FeaturesSection from "./LandingPageComponent/FeaturesSection";
import TestimonialsSection from "./LandingPageComponent/TestimonialsSection";
import PricingSection from "./LandingPageComponent/PricingSection";
import NavBar from "./Pages/NavBar"
import HomePage from "./Pages/homePage"
import ContactPage from "./Pages/Contact";
import Reminder from "./Pages/Reminder";
// import CreateMeeting from "./Pages/CreateMeeting";
import MeetingPage from './Pages/Meeting'
import MeetingRoom from './Pages/meetingRoom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/HomePage" element ={<HomePage />} />
        <Route path ="/NavBar" element ={<NavBar />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/login" element={<LoginIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Page" element={<ContactPage />} />
        <Route path="/Reminder" element={<Reminder />} />
        <Route path="/Meeting" element={<MeetingPage />} />
        <Route path="/MeetingRoom" element={<MeetingRoom />} />

      </Routes>
    </BrowserRouter>
    // <MeetingRoom />
  );
}



export default App;
