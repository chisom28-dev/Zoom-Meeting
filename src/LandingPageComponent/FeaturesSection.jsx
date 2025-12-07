import React from "react";
import Header from "../LandingPageComponent/Header";

const features = [
  { title: "Screen Sharing", description: "Share your screen with anyone in real-time." },
  { title: "High-Quality Video", description: "Crystal clear audio and HD video streaming." },
  { title: "Chat & Reactions", description: "Stay connected with instant messaging and reactions." },
  { title: "Record Meetings", description: "Save your meetings and access them anytime." },
];

const FeaturesSection = () => {
  return (
    <>
    <Header />
    <section id="features" className="py-20 bg-gray-50 text-center flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default FeaturesSection;
