"use client";

import { useState } from "react";
import { MessageCircle, Camera } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    "Bridal Makeup",
    "Traditional Wedding Makeup",
    "Graduation Makeup",
    "Birthday Makeup",
    "Soft Glam Makeup",
    "Full Glam Makeup",
    "Wig Installations",
    "Sew-In Weaves",
    "Bridal Hair Styling",
    "Natural Hair Styling",
    "Ponytails",
    "Updos",
    "Braided Styles"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Absolutely stunning bridal makeup! I felt like a princess on my special day.",
      rating: 5
    },
    {
      name: "Jennifer K.",
      text: "The best hair styling experience I've ever had. Professional and talented!",
      rating: 5
    },
    {
      name: "Amanda R.",
      text: "My graduation makeup was perfect. Lasted all day through photos and celebrations!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="shrink-0">
              <div className="flex items-center">
                <img
                  src="/WhatsApp Image 2026-06-23 at 16.33.45.jpeg"
                  alt="DELIPHER ARTISTRY Logo"
                  className="h-20 w-auto mr-3"
                />
                <h1 className="text-2xl font-bold text-gold">DELIPHER ARTISTRY</h1>
              </div>
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                <a href="tel:+254704689565" className="hover:text-gold transition-colors">📞 +254 704 689565</a>
                <a href="mailto:delipherzulu@gmail.com" className="hover:text-gold transition-colors">✉️ delipherzulu@gmail.com</a>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-gold transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-gold transition-colors">Services</a>
              <a href="#pricing" className="text-white hover:text-gold transition-colors">Pricing</a>
              <a href="/gallery" className="text-white hover:text-gold transition-colors">Gallery</a>
              <a href="#testimonials" className="text-white hover:text-gold transition-colors">Testimonials</a>
              <a href="#contact" className="text-white hover:text-gold transition-colors">Contact</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://www.instagram.com/delipher_artistry?igsh=MTVvNWsxMTg1a2puaw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com/delipherartistry" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://tiktok.com/@delipherartistry" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="https://wa.me/254704689565" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gold/20">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#pricing" className="block py-2 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="/gallery" className="block py-2 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#testimonials" className="block py-2 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="block py-2 text-white hover:text-gold" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/WhatsApp Image 2026-06-24 at 09.41.37 (1).jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            You Inspire, We Create
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Luxury beauty services for your most special moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold text-black rounded-full font-semibold hover:bg-gold-light transition-all transform hover:scale-105 shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-gold text-gold rounded-full font-semibold hover:bg-gold hover:text-black transition-all transform hover:scale-105"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">Our Services</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            From bridal elegance to everyday glamour, we offer a full range of beauty services
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gold/30 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
                <p className="text-gray-400">Professional service tailored to your unique beauty needs</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">Our Pricing</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Transparent pricing for all our beauty services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black border border-gold/30 p-8 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all">
              <h3 className="text-2xl font-bold text-gold mb-6">💄 Makeup Services</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Full Glam with Lashes</span>
                  <span className="text-white font-bold">KES 4,000</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>House Call</span>
                  <span className="text-white font-bold">KES 5,500</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Lashes Only</span>
                  <span className="text-white font-bold">KES 1,000</span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">* Client is responsible for transport for house calls</p>
            </div>
            <div className="bg-black border border-gold/30 p-8 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all">
              <h3 className="text-2xl font-bold text-gold mb-6">👰 Bridal Packages</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Bride</span>
                  <span className="text-white font-bold">KES 10,000</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Bridal Trial</span>
                  <span className="text-white font-bold">KES 4,500</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Bridesmaids</span>
                  <span className="text-white font-bold">KES 4,000</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Bride&apos;s Mum</span>
                  <span className="text-white font-bold">KES 3,500</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-800">
                  <span>Flower Girl</span>
                  <span className="text-white font-bold">KES 2,000</span>
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">* Client is responsible for transport</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Work</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              A glimpse into our portfolio of beautiful transformations
            </p>
            <a
              href="https://www.instagram.com/delipher_artistry?igsh=MTVvNWsxMTg1a2puaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
            >
              <Camera size={24} />
              Follow us on Instagram
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              className="aspect-square rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer relative group overflow-hidden"
              onClick={() => setSelectedImage("/WhatsApp Image 2026-06-24 at 09.41.02.jpeg")}
            >
              <img
                src="/WhatsApp Image 2026-06-24 at 09.41.02.jpeg"
                alt="Beauty work 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <Camera size={32} className="text-white" />
              </div>
            </div>
            <div 
              className="aspect-square rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer relative group overflow-hidden"
              onClick={() => setSelectedImage("/WhatsApp Image 2026-06-24 at 09.41.32 (1).jpeg")}
            >
              <img
                src="/WhatsApp Image 2026-06-24 at 09.41.32 (1).jpeg"
                alt="Beauty work 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <Camera size={32} className="text-white" />
              </div>
            </div>
            <div 
              className="aspect-square rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer relative group overflow-hidden"
              onClick={() => setSelectedImage("/WhatsApp Image 2026-06-24 at 09.41.37 (1).jpeg")}
            >
              <img
                src="/WhatsApp Image 2026-06-24 at 09.41.37 (1).jpeg"
                alt="Beauty work 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <Camera size={32} className="text-white" />
              </div>
            </div>
            <div 
              className="aspect-square rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer relative group overflow-hidden"
              onClick={() => setSelectedImage("/WhatsApp Image 2026-06-24 at 09.41.37.jpeg")}
            >
              <img
                src="/WhatsApp Image 2026-06-24 at 09.41.37.jpeg"
                alt="Beauty work 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <Camera size={32} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Real stories from our beautiful clients
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black border border-gold/30 p-8 rounded-2xl shadow-md hover:shadow-xl hover:border-gold transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-white">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">Book Your Appointment</h2>
          <p className="text-center text-gray-400 mb-12">
            Ready to transform your look? Fill out the form below to book your appointment
          </p>
          <form 
            action="https://formsubmit.co/delipherzulu@gmail.com" 
            method="POST"
            className="bg-black-light border border-gold/30 p-8 rounded-2xl shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Preferred Date *</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Preferred Time *</label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all">
                  <option value="">Select a time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Service *</label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all">
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Additional Notes</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all h-32 resize-none"
                placeholder="Any special requests or additional information..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gold text-black rounded-lg font-semibold hover:bg-gold-light transition-all transform hover:scale-[1.02] shadow-lg"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">DELIPHER ARTISTRY</h3>
              <p className="text-gray-400">You Inspire, We Create</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-gold transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-gold transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/delipher_artistry?igsh=MTVvNWsxMTg1a2puaw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com/delipherartistry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://tiktok.com/@delipherartistry" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="https://wa.me/254704689565" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
              <h4 className="font-semibold mb-4 mt-6">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 123 Beauty Lane</li>
                <li>📞 +254 704 689565</li>
                <li>✉️ delipherzulu@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DELIPHER ARTISTRY. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254704689565?text=Hi! I'd like to book an appointment at DELIPHER ARTISTRY"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
