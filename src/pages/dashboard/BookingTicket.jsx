import React from 'react';
import { Calendar, QrCode, ArrowDownWideNarrow } from 'lucide-react';

const BookingTicket = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">Dashboard</div>
        <button className="bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">Create New Booking Event</button>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-1">Take Bookings for your Events by Creating Attractive Customised Booking Profile</h2>
          <p><strong>Step 1:</strong> Add your Event Details</p>
          <p><strong>Step 2:</strong> Add Booking Details</p>
        </div>
        <img
          src="https://via.placeholder.com/150x100"
          alt="Banner Illustration"
          className="w-40 md:w-48"
        />
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-between items-center gap-3 bg-white p-4 rounded shadow-sm">
        <div className="flex items-center gap-2 text-cyan-600 font-semibold">
          <ArrowDownWideNarrow size={20} />
          Booking & Ticketing
        </div>
        <div className="flex gap-2">
          <select className="border rounded px-2 py-1 text-sm">
            <option>Select Date</option>
          </select>
          <button className="bg-gray-800 text-white px-3 py-1 rounded flex items-center gap-1">
            <QrCode size={16} /> Profile QR & Link
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-cyan-500 text-white p-4 rounded shadow">
          <div className="text-sm">Revenue</div>
          <div className="text-xl font-bold">₹0 <span className="text-xs font-normal">23% from previous period</span></div>
        </div>
        <div className="bg-indigo-700 text-white p-4 rounded shadow">
          <div className="text-sm">Booking</div>
          <div className="text-xl font-bold">0 <span className="text-xs font-normal">23% from previous period</span></div>
        </div>
        <div className="bg-green-600 text-white p-4 rounded shadow">
          <div className="text-sm">Entry Done</div>
          <div className="text-xl font-bold">0 <span className="text-xs font-normal">23% from previous period</span></div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm font-semibold mb-2">Revenue (In Thousand)</h3>
        <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
          [Chart Placeholder]
        </div>
      </div>

      {/* Bookings vs Entry Chart */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm font-semibold mb-2">Bookings vs Entry</h3>
        <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
          [Chart Placeholder]
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <h3 className="text-sm font-semibold mb-2">Recent Booking Profiles</h3>
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              {['View', 'Booking Profile', 'Type', 'Created Date/Time', 'Booking Start Date', 'Booking End Date', 'Total Book', 'Profile URL'].map((head, i) => (
                <th key={i} className="px-4 py-2 border text-nowrap">{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="8" className="text-center text-gray-500 py-4">No data to display</td>
            </tr>
          </tbody>
        </table>
        <div className="text-xs text-gray-500 mt-2">0 total</div>
      </div>

    </div>
  );
};

export default BookingTicket;