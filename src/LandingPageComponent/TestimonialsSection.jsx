import React, { useState } from "react";
import Header from "./Header";
import { 
  Star, 
  MessageCircle, 
  ThumbsUp, 
  Share2, 
  User, 
  Send, 
  Quote, 
  Building,
  Globe,
  Award
} from "lucide-react";

const TestimonialsSection = () => {
  const [newComment, setNewComment] = useState("");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [comments, setComments] = useState({
    1: [
      { id: 1, user: "Sarah Chen", text: "Absolutely love the screen sharing feature!", likes: 12, time: "2 hours ago" },
      { id: 2, user: "Alex Rivera", text: "The video quality is exceptional even on slow connections", likes: 8, time: "1 day ago" }
    ],
    2: [
      { id: 1, user: "Michael Park", text: "Our team productivity increased by 40% after switching", likes: 15, time: "3 days ago" }
    ]
  });

  const testimonials = [
    { 
      id: 1,
      name: "Alice Johnson", 
      role: "Product Manager",
      company: "TechCorp Inc.",
      feedback: "This platform completely transformed how our distributed team collaborates. The video quality is consistently excellent, and the recording features have been invaluable for our retrospectives.", 
      rating: 5,
      image: "👩‍💼",
      location: "San Francisco, CA",
      date: "2 weeks ago",
      likes: 42,
      shares: 8
    },
    { 
      id: 2,
      name: "Mark Stevens", 
      role: "CTO",
      company: "StartupXYZ",
      feedback: "Seamless meetings with zero lag. We've tried multiple platforms and VideoConnect outperforms them all. The simplicity combined with powerful features is exactly what we needed.", 
      rating: 5,
      image: "👨‍💻",
      location: "New York, NY",
      date: "1 month ago",
      likes: 31,
      shares: 5
    },
    { 
      id: 3,
      name: "Priya Patel", 
      role: "Education Director",
      company: "GlobalEd Academy",
      feedback: "Using this for our online classes has been revolutionary. The breakout rooms feature allows for small group discussions, and students love the interactive whiteboard.", 
      rating: 4,
      image: "👩‍🏫",
      location: "London, UK",
      date: "3 days ago",
      likes: 28,
      shares: 3
    },
    { 
      id: 4,
      name: "Carlos Mendez", 
      role: "Freelance Designer",
      company: "DesignStudio",
      feedback: "As a freelancer, I need reliable video calls with clients worldwide. The timezone scheduling feature and calendar integration save me hours every week.", 
      rating: 5,
      image: "👨‍🎨",
      location: "Barcelona, ES",
      date: "1 week ago",
      likes: 19,
      shares: 2
    }
  ];

  const handleAddComment = (testimonialId) => {
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: Date.now(),
      user: "You",
      text: newComment,
      likes: 0,
      time: "Just now"
    };

    setComments(prev => ({
      ...prev,
      [testimonialId]: [...(prev[testimonialId] || []), newCommentObj]
    }));
    
    setNewComment("");
    setSelectedTestimonial(testimonialId);
  };

  const handleLikeComment = (testimonialId, commentId) => {
    setComments(prev => ({
      ...prev,
      [testimonialId]: prev[testimonialId].map(comment => 
        comment.id === commentId 
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    }));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-linear-to-b from-gray-50 to-white py-24 px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-50 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
              <Award size={16} />
              Community Voices
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Teams Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who trust VideoConnect for their daily communication needs.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { value: "10K+", label: "Active Teams", icon: <Building /> },
              { value: "4.9/5", label: "Average Rating", icon: <Star /> },
              { value: "98%", label: "Satisfaction", icon: <ThumbsUp /> },
              { value: "150+", label: "Countries", icon: <Globe /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="group">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{testimonial.image}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <span>{testimonial.role}</span>
                          <span>•</span>
                          <span>{testimonial.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Feedback */}
                  <div className="mb-6 relative">
                    <Quote className="absolute -top-2 -left-2 text-gray-200" size={24} />
                    <p className="text-gray-700 text-lg leading-relaxed pl-4">
                      "{testimonial.feedback}"
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Globe size={14} />
                        {testimonial.location}
                      </div>
                      <div>•</div>
                      <div>{testimonial.date}</div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <ThumbsUp size={18} />
                        <span>{testimonial.likes}</span>
                      </button>
                      <button 
                        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                        onClick={() => setSelectedTestimonial(
                          selectedTestimonial === testimonial.id ? null : testimonial.id
                        )}
                      >
                        <MessageCircle size={18} />
                        <span>{comments[testimonial.id]?.length || 0}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                        <Share2 size={18} />
                        <span>{testimonial.shares}</span>
                      </button>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Reply
                    </button>
                  </div>

                  {/* Comments Section */}
                  {selectedTestimonial === testimonial.id && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="space-y-4 mb-6">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Comments ({comments[testimonial.id]?.length || 0})
                        </h4>
                        
                        {/* Existing Comments */}
                        {comments[testimonial.id]?.map(comment => (
                          <div key={comment.id} className="flex gap-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <User size={14} className="text-gray-500" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-900">{comment.user}</span>
                                <span className="text-gray-400 text-xs">{comment.time}</span>
                              </div>
                              <p className="text-gray-700 mt-1">{comment.text}</p>
                              <button 
                                onClick={() => handleLikeComment(testimonial.id, comment.id)}
                                className="flex items-center gap-1 text-gray-500 hover:text-blue-600 mt-2 text-sm"
                              >
                                <ThumbsUp size={14} />
                                <span>{comment.likes}</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add Comment */}
                      <div className="flex gap-3">
                        <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="text-white" size={18} />
                        </div>
                        <div className="flex-1">
                          <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add your thoughts or experience..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                            rows="2"
                          />
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-gray-500 text-sm">
                              Share your experience with this testimonial
                            </span>
                            <button
                              onClick={() => handleAddComment(testimonial.id)}
                              disabled={!newComment.trim()}
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                                newComment.trim()
                                  ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              } transition-all`}
                            >
                              <Send size={16} />
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add Your Testimonial CTA */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Have a story about how VideoConnect helped your team? We'd love to hear about it!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all">
                  Write a Testimonial
                </button>
                <button className="px-8 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-white transition-all">
                  Read More Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;