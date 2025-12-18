import React from "react";
import Header from "./Header";
import { Check, Zap, Crown, Users, Cloud, Shield, Headphones, Globe, Video, Lock } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "Perfect for personal use & small teams",
      icon: <Zap className="text-blue-500" size={24} />,
      popular: false,
      features: [
        { text: "Up to 50 participants", icon: <Users size={16} /> },
        { text: "Unlimited 1-on-1 meetings", icon: <Video size={16} /> },
        { text: "40-minute group meetings", icon: <Check size={16} /> },
        { text: "Basic screen sharing", icon: <Check size={16} /> },
        { text: "Chat & file sharing", icon: <Check size={16} /> },
      ],
      cta: "Get Started Free",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$15",
      period: "per month",
      description: "For growing teams & businesses",
      icon: <Crown className="text-purple-500" size={24} />,
      popular: true,
      features: [
        { text: "Up to 200 participants", icon: <Users size={16} /> },
        { text: "24-hour meeting duration", icon: <Check size={16} /> },
        { text: "10 GB cloud recording", icon: <Cloud size={16} /> },
        { text: "Advanced screen sharing", icon: <Check size={16} /> },
        { text: "Custom meeting branding", icon: <Globe size={16} /> },
        { text: "Priority email support", icon: <Headphones size={16} /> },
        { text: "Meeting analytics", icon: <Check size={16} /> },
      ],
      cta: "Try 14 Days Free",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored solution",
      description: "For large organizations & security",
      icon: <Shield className="text-green-500" size={24} />,
      popular: false,
      features: [
        { text: "500+ participants", icon: <Users size={16} /> },
        { text: "Unlimited meeting duration", icon: <Check size={16} /> },
        { text: "Unlimited cloud recording", icon: <Cloud size={16} /> },
        { text: "Single Sign-On (SSO)", icon: <Lock size={16} /> },
        { text: "Dedicated customer success", icon: <Headphones size={16} /> },
        { text: "Advanced security & compliance", icon: <Shield size={16} /> },
        { text: "Custom terms & SLA", icon: <Check size={16} /> },
        { text: "On-premise deployment", icon: <Check size={16} /> },
      ],
      cta: "Contact Sales",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-linear-to-b from-gray-50 to-white py-24 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1 bg-linear-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
              <Zap size={16} />
              Flexible Plans
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
            </p>
          </div>

          {/* Toggle for Annual/Monthly */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-xl inline-flex">
              <button className="px-6 py-3 rounded-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                Monthly
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-sm transition-all">
                Annual <span className="text-sm text-green-600 font-medium">(Save 20%)</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Pricing Card */}
                <div className={`h-full bg-white rounded-2xl border ${plan.popular ? 'border-purple-200 shadow-2xl' : 'border-gray-200 shadow-lg'} p-8 transition-all duration-300 hover:shadow-xl group-hover:scale-[1.02]`}>
                  {/* Plan Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${plan.color} flex items-center justify-center`}>
                        {plan.icon}
                      </div>
                      <div className="text-sm font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {plan.name}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-gray-500 ml-2">/month</span>}
                      </div>
                      <div className="text-gray-500 text-sm mt-1">{plan.period}</div>
                    </div>
                    
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8 space-y-4">
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">What's included</div>
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={12} className="text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 font-bold rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105' 
                      : 'bg-linear-to-r from-gray-900 to-gray-800 text-white hover:shadow-lg hover:scale-105'
                  }`}>
                    {plan.cta}
                  </button>

                  {/* Additional Info */}
                  {plan.name === "Starter" && (
                    <div className="mt-4 text-center text-sm text-gray-500">
                      No credit card required
                    </div>
                  )}
                  {plan.name === "Professional" && (
                    <div className="mt-4 text-center text-sm text-gray-500">
                      14-day free trial • Cancel anytime
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately." },
                { q: "Is there a contract or long-term commitment?", a: "No, all plans are month-to-month. Cancel anytime with no penalty." },
                { q: "Do you offer discounts for non-profits?", a: "Yes, we offer special pricing for educational institutions and non-profits." },
                { q: "How secure is my data?", a: "We use end-to-end encryption and comply with GDPR, SOC2, and HIPAA standards." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors">
                  <div className="font-semibold text-gray-900 mb-2">{faq.q}</div>
                  <div className="text-gray-600">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield size={18} className="text-green-500" />
                <span>All plans include 99.9% uptime SLA</span>
              </div>
              <p className="text-gray-600">
                Need a custom solution? <a href="/contact" className="text-blue-600 font-semibold hover:underline">Contact our sales team →</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;