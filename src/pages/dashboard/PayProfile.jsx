import React from 'react';
import { Eye, ArrowLeftRight, IndianRupee } from 'lucide-react';

const PayProfile = () => {
  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-screen">

      {/* Header + Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Pay Profile</h1>
          <p className="text-sm text-gray-500">Dashboard / Pay-Profile</p>
        </div>
        <div className="flex gap-3 items-center">
          <select className="border rounded px-3 py-1 text-sm">
            <option>All</option>
          </select>
          <button className="bg-cyan-500 text-white px-4 py-2 text-sm rounded-md">Create New Pay Profile</button>
        </div>
      </div>

      {/* Banner */}
      <div className="flex items-center bg-gradient-to-r from-blue-700 to-purple-400 text-white rounded-xl overflow-hidden relative p-6">
        <div className="w-2/3">
          <h2 className="text-xl font-bold">Create your business payment profile in just 2 easy steps.</h2>
          <div className="mt-4">
            <p className="font-semibold">Step 1:</p>
            <p>Add your business Details.</p>
            <p className="mt-2 font-semibold">Step 2:</p>
            <p>Add customer payment details.</p>
          </div>
        </div>
        <div className="ml-auto">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5974/5974635.png"
            alt="Pay Profile"
            className="w-48"
          />
        </div>
        <button className="absolute top-3 right-3 text-white text-xl">&times;</button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['All', 'Smart Collect', 'Easy Collect'].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 text-sm rounded-md ${
              i === 0
                ? 'bg-cyan-500 text-white'
                : 'bg-white border text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Profile Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['All', 'Live Profiles', 'Paused Profiles', 'Expired Profiles', 'Draft'].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 text-sm rounded-md ${
              i === 0
                ? 'bg-cyan-500 text-white'
                : 'bg-white border text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Profile Count */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">Number of Profiles</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-cyan-100 text-cyan-600 p-2 rounded">
              <IndianRupee size={20} />
            </div>
            <span className="text-lg font-semibold">0</span>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">Total Revenue</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-cyan-100 text-cyan-600 p-2 rounded">
              <IndianRupee size={20} />
            </div>
            <span className="text-lg font-semibold">₹ 0</span>
          </div>
        </div>

        {/* Total Transactions */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">Total Transactions</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-cyan-100 text-cyan-600 p-2 rounded">
              <ArrowLeftRight size={20} />
            </div>
            <span className="text-lg font-semibold">0</span>
          </div>
        </div>

        {/* Profile Views */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">Profile View</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="bg-cyan-100 text-cyan-600 p-2 rounded">
              <Eye size={20} />
            </div>
            <span className="text-lg font-semibold">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayProfile;
