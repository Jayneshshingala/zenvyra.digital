"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Aman Gupta",
    role: "CEO, Growth Media",
    content: "Zenvyra completely transformed our ad creatives. The 3D integration specifically was next level.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    content: "Fast delivery and exceptional quality for our SaaS tool landing page. Highly recommend!",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    role: "Wedding Photographer",
    content: "The level of professionalism in their drone work and wedding edits is unparalleled.",
    rating: 5
  }
];

export function ReviewSection() {
  return (
    <section className="py-24 bg-black/20" id="reviews">
      <div className="container-tight">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
            Client <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Real feedback from partners we've helped scale through precision digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-8 italic">
                  "{review.content}"
                </p>
              </div>
              <div>
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
