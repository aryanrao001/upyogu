import React from 'react';
import { Filter, Download } from 'lucide-react';

const ChargeBack = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Info Text */}
      <div className="p-4 text-sm text-gray-700">
        Currently we are displaying last 7 days report. For more details please click on Filter
      </div>

      {/* Filter + Export */}
      <div className="flex justify-end items-center gap-3 px-4">
        <button className="flex items-center gap-2 bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">
          Export as <Download size={16} />
        </button>
        <button className="flex items-center gap-2 bg-cyan-500 text-white text-sm px-4 py-2 rounded-md">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-auto mt-4 px-4 flex-1">
        <table className="min-w-full bg-white border rounded-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              {[
                'Action',
                'DeadLineDate',
                'Status',
                'Case Name',
                'PaymentTransaction',
                'PaymentTransaction',
                'ChargebackAmount',
                'PaymentMethod',
                'PaymentAccount',
              ].map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-2 border-b text-left whitespace-nowrap"
                >
                  {col}
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

export default ChargeBack;
