// pages/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Optional eye toggle
// import paygLogo from '../assets/payg-logo.png'; // Add your logo to assets

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-4 border-b">
        {/* <img src={paygLogo} alt="Pay जी Logo" className="h-8" /> */}
        <div className="text-sm">
          Don’t have a Upyogu Account?{' '}
          <Link to="/signup" className="text-cyan-500 font-semibold">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center px-8 py-12">
        <div className="w-full max-w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="bg-gradient-to-b from-zinc-800 to-black text-white p-8 rounded-2xl space-y-15 shadow-md">
            <h2 className="text-2xl font-bold leading-snug">
              Let us help you to run your business <span className="text-cyan-400">Smoothly</span>
            </h2>
            <p className="text-sm opacity-90">
              We have great payment solutions for you, which will help you to grow your business.
            </p>
            <ul className="space-y-3 text-sm font-medium">
              <li>📱 Payment Gateway for Website & App</li>
              <li>🔳 Dynamic & Static QR Code</li>
              <li>🏠 Payment Profiles to Collect Payments</li>
              <li>🛒 Free Online Store with Payment Integration</li>
              <li>📅 Free Booking Solution</li>
            </ul>
          </div>

          {/* Right Register Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Welcome to <span className="text-cyan-500">Upyogu</span>
            </h2>
            <p className="text-sm text-gray-600">Keep tracking your money easily and quickly.</p>

            <form className="space-y-5">
              <div>
                <label className="text-sm font-medium block mb-1">
                  Email ID / Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter email or phone"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full border border-gray-300 px-4 py-2 rounded-md pr-10 focus:ring-2 focus:ring-cyan-400"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-cyan-500 font-medium">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white w-full py-2 rounded-md font-semibold transition"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
