'use client';

import React from 'react';
import { ArrowRight, Shield, TrendingUp, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MainLandingPage() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Asset Bridge</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Properties</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">Login</button>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Invest in Properties. Stay for Less.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                A hybrid platform where investors fund properties, owners raise capital, and travelers enjoy premium stays at lower prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate("/user/landing_page")} className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2">
                  Explore Hotels <ArrowRight size={18} />
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                  List Your Property
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                  Start Investing
                </button>
              </div>
              {/* <button className="mt-4 text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2">
                Book Hotels <ArrowRight size={16} />
              </button> */}
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">12.5%</div>
                <p className="text-gray-600">Average Annual ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: '10,000+', desc: 'Active Users' },
              { label: '500+', desc: 'Verified Properties' },
              { label: '$50M+', desc: 'Capital Deployed' },
              { label: '98%', desc: 'Investor Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Roles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How It Works for Everyone</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Property Owners */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Home className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Property Owners</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                List your hotel or property and raise capital from a community of investors. Grow your business without traditional loans.
              </p>
              <a href="#" className="text-gray-900 font-medium flex items-center gap-2 hover:gap-3 transition">
                List your Property <ArrowRight size={16} />
              </a>
            </div>

            {/* Investors */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <TrendingUp className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Investors</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Diversify your portfolio by investing in vetted properties. Earn consistent returns and build long-term wealth.
              </p>
              <a href="#" className="text-gray-900 font-medium flex items-center gap-2 hover:gap-3 transition">
                Start Investing <ArrowRight size={16} />
              </a>
            </div>

            {/* Customers */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <Shield className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Travelers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Book premium stays at discounted rates. Enjoy world-class hospitality powered by community investments.
              </p>
              <a href="#" className="text-gray-900 font-medium flex items-center gap-2 hover:gap-3 transition">
                Explore Stays <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Investments</h2>
          <p className="text-gray-600 mb-12 max-w-xl">Explore top-performing properties available for investment.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Coastal Resort', location: 'Maldives', roi: '14.2%', duration: '24 months' },
              { name: 'Urban Boutique', location: 'Dubai', roi: '12.8%', duration: '18 months' },
              { name: 'Mountain Lodge', location: 'Switzerland', roi: '13.5%', duration: '20 months' },
            ].map((property, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{property.location}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Expected ROI</p>
                      <p className="text-2xl font-bold text-gray-900">{property.roi}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{property.duration}</p>
                    </div>
                  </div>
                  <button className="w-full border border-gray-900 text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Simple 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Browse & Explore', desc: 'Discover verified properties and investment opportunities.' },
              { step: '02', title: 'Invest or Book', desc: 'Choose to invest for returns or book for your next stay.' },
              { step: '03', title: 'Earn & Enjoy', desc: 'Collect returns or experience premium hospitality.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-6xl font-bold text-gray-200 mb-4">{item.step}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-gray-300 text-lg mb-10">Join thousands who are building wealth through smart investments and experiences.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Begin Investing
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
              List Property
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="font-bold text-gray-900 mb-4">Asset Bridge</p>
              <p className="text-gray-600 text-sm">Invest. List. Stay Smarter.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-4 text-sm">Product</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Invest</a></li>
                <li><a href="#" className="hover:text-gray-900">List Properties</a></li>
                <li><a href="#" className="hover:text-gray-900">Book Stays</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-4 text-sm">Company</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-4 text-sm">Legal</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2026 Asset Bridge. All rights reserved.</p>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium mt-4 md:mt-0">Admin Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}