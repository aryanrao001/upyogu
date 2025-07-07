import React from 'react';
import { Download, Filter } from 'lucide-react';

const tabs = [
  'Transaction Summary Reports',
  'Fee Reports',
  'MIS',
  'QuickCode Transaction Summary',
  'Webhook Data',
  'Reconcilitaion Report',
  'Order Failure',
];

const Reports = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Tabs */}
      <div className="bg-white px-4 py-3 shadow-sm overflow-x-auto">
        <div className="flex gap-3 whitespace-nowrap">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                tab === 'Transaction Summary Reports'
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-4 flex flex-col md:flex-row md:items-center gap-3 bg-white border-b">
        <div className="flex gap-3">
          <button className="bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">
            View Settlement
          </button>
          <button className="bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">
            Refresh
          </button>
        </div>
        <div className="flex gap-3 md:ml-auto">
          <button className="flex items-center gap-2 bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">
            <Download size={16} /> Download
          </button>
          <button className="flex items-center gap-2 bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-4 text-sm text-gray-700 mt-4">
        Currently we are displaying last 7 days report. For more details please click on Filter
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4 px-4 flex-1">
        <table className="min-w-full bg-white border mt-2 rounded-md overflow-hidden text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {[
                'Action',
                'Date',
                'Amount',
                'UTR No',
                'Status',
                'Beneficiary Name',
                'IFSC Code',
                'Bank Name',
                'Account Number',
              ].map((head, i) => (
                <th key={i} className="px-4 py-2 border-b text-left whitespace-nowrap">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className="text-center text-gray-500 py-6">
                No data to display
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">0 total</div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-xs text-gray-500">
        Copyright © 2025 - Upyogu. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Reports;
