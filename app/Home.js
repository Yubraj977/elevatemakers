import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-green-400 animate-pulse">
        ElevateMakers
      </h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-3xl animate-fadeIn">
        Transforming brands with powerful digital strategies, engaging content, and data-driven marketing solutions.
      </p>
      <a href="#services" className="px-6 py-3 bg-green-600 rounded-lg text-lg font-semibold hover:bg-green-500 transition shadow-lg animate-bounce">
        Get Started
      </a>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-green-400">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={300} className="rounded-md mb-4" alt="Social Media Marketing" />
            <h3 className="text-2xl font-semibold mb-2">Social Media Marketing</h3>
            <p className="text-gray-300">Boost engagement and brand awareness with our tailored social media strategies.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Image src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=3235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={300} className="rounded-md mb-4 object-contain" alt="SEO Optimization" />
            <h3 className="text-2xl font-semibold mb-2">Google SEO Optimization</h3>
            <p className="text-gray-300">Increase visibility, drive traffic, and rank higher on search engines.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <Image src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={500} height={300} className="rounded-md mb-4" alt="Content Strategy" />
            <h3 className="text-2xl font-semibold mb-2">Content Strategy</h3>
            <p className="text-gray-300">Craft engaging content that speaks to your audience and drives conversions.</p>
          </div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-20 px-6 bg-gray-900 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 mb-6">At ElevateMakers, we dont just market brands—we elevate them. With cutting-edge analytics and creative storytelling, we ensure your business thrives in the digital landscape.</p>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-6 text-center bg-gray-800">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400 animate-fadeIn">
        Let’s Elevate Your Brand!
      </h2>
      <p className="text-lg text-gray-300 mb-6">Partner with ElevateMakers for tailored digital marketing solutions that drive real results.</p>
      <a href="#contact" className="px-6 py-3 bg-green-600 rounded-lg text-lg font-semibold hover:bg-green-500 transition shadow-lg animate-bounce">
        Contact Us
      </a>
    </section>

    {/* Footer */}
    <footer className="py-6 bg-gray-900 text-center">
      <p className="text-gray-400">&copy; 2025 ElevateMakers. All rights reserved.</p>
    </footer>
  </div>
  );
}
