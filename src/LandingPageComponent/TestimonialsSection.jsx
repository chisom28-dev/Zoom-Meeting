import React from "react";
import Header from "./Header";
const testimonials = [
  { name: "Alice Johnson", feedback: "This platform changed how our team collaborates remotely!" },
  { name: "Mark Stevens", feedback: "Seamless meetings with zero lag. Highly recommended." },
];

const TestimonialsSection = () => {
  return (
    <>
    <Header />
    <section id="testimonials" className="py-20 bg-blue-50 text-center h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 mb-4">"{t.feedback}"</p>
            <h4 className="font-semibold text-blue-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default TestimonialsSection;
