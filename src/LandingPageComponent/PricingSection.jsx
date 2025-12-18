import React from "react";
import Header from "./Header";
const plans = [
  { name: "Free", price: "$0", features: ["Unlimited meetings", "Up to 50 participants", "Basic support"] },
  { name: "Pro", price: "$15/mo", features: ["Up to 200 participants", "Cloud recording", "Priority support"] },
];

const PricingSection = () => {
  return (
    <>
    <Header />
    <section id="pricing" className="py-20 text-center bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition w-80">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-semibold mb-6">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-gray-600">
              {plan.features.map((f, i) => <li key={i}>• {f}</li>)}
            </ul>
            <a href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Get Started</a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default PricingSection;
