import React from 'react'
import TestimonialCard from '../components/cards/testimonialCard'

const testimonialData = [
  {
    id: 1,
    name: "Anita Roy",
    position: "Founder, Creative Ventures",
    rating: 5,
    message: "Working with this team was an absolute pleasure! They understood our vision perfectly and delivered a website that not only looks stunning but performs flawlessly. Their professionalism and attention to detail exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Rahul Mehta",
    position: "Owner, Mehta Interiors",
    rating: 5,
    message: "As a small business owner, I needed a reliable team to bring my online presence to life. They delivered a modern, user-friendly website that has significantly boosted my customer engagement. Their support throughout the process was outstanding!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  }
];

function Testimonials() {
  return (
    <div className="container overflow-x-hidden  mx-auto px-4 py-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-800">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default Testimonials