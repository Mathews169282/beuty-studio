"use client";

import { useState } from "react";
import { Camera, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/WhatsApp Image 2026-06-24 at 09.41.02.jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.32 (1).jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.37 (1).jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.37.jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.02.jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.32 (1).jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.37 (1).jpeg",
    "/WhatsApp Image 2026-06-24 at 09.41.37.jpeg",
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img
                src="/WhatsApp Image 2026-06-23 at 16.33.45.jpeg"
                alt="DELIPHER ARTISTRY Logo"
                className="h-12 w-auto mr-3"
              />
              <h1 className="text-xl font-bold text-gold">DELIPHER ARTISTRY</h1>
            </Link>
            <Link href="/" className="flex items-center text-white hover:text-gold transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our portfolio of beautiful transformations
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
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer relative group overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <Camera size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gold/20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gold mb-4">DELIPHER ARTISTRY</h3>
          <p className="text-gray-400 mb-4">You Inspire, We Create</p>
          <Link href="/" className="text-gold hover:text-gold-light transition-colors">
            Back to Home
          </Link>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 DELIPHER ARTISTRY. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
