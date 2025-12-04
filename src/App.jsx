import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPageComponent/landingPage";
import SignUp from "./Authetication/signup";
import LoginIn from "./Authetication/LoginIn";
import Header from "./LandingPageComponent/Header";
import FeaturesSection from "./LandingPageComponent/FeaturesSection";
import TestimonialsSection from "./LandingPageComponent/TestimonialsSection";
import PricingSection from "./LandingPageComponent/PricingSection";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/login" element={<LoginIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
