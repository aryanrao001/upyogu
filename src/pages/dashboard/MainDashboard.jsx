// src/pages/dashboard/MainDashboard.jsx
import React from 'react';
import { CheckCircle, HelpCircle } from 'lucide-react';

const steps = [
    { label: 'Business Registration', step: 1, completed: true },
    { label: 'Business Details', step: 2, completed: false },
    { label: 'Bank Details', step: 3, completed: false },
    { label: 'Business Overview', step: 4, completed: false },
    { label: 'Document Verification', step: 5, completed: false },
    { label: 'Agreement E-Sign', step: 6, completed: false },
];

const services = [
    {
        title: 'Payment Gateway',
        desc: 'A convenient URL that allows customers to make payments easily by redirecting them to a secure payment page.',
        icon: '/icons/payment-gateway.svg',
    },
    {
        title: 'Payment Link',
        desc: 'A convenient URL that allows customers to make payments easily by redirecting them to a secure payment page.',
        icon: '/icons/payment-link.svg',
    },
    {
        title: 'Invoice',
        desc: 'Create customise digital invoices, send to your customers easily settle your bills in your account.',
        icon: '/icons/invoice.svg',
    },
    {
        title: 'Payment Button',
        desc: 'Easily generate your payment button in two simple steps and utilize it across various platforms and collect payments.',
        icon: '/icons/payment-button.svg',
    },
    {
        title: 'Easy Collect',
        desc: 'Gather payments for donations, registrations, real estate, and more while capturing essential customer details.',
        icon: '/icons/easy-collect.svg',
    },
    {
        title: 'Smart Collect',
        desc: 'Securely manage educational fees, insurance premiums and much more using Smart Collect feature.',
        icon: '/icons/smart-collect.svg',
    },
    {
        title: 'Booking & Ticketing',
        desc: 'A convenient URL that allows customers to make payments easily by redirecting them to a secure payment page.',
        icon: '/icons/booking.svg',
    },
    {
        title: 'G-Store',
        desc: 'Take you business online with Upyogu G-Store with our most powerful feature.',
        icon: '/icons/g-store.svg',
    },
];

const MainDashboard = () => {
    return (
        <div className="space-y-6">
            {/* Top Section */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
                <button className="bg-gray-200 px-4 py-2 text-sm rounded-md shadow-sm hover:bg-gray-300 flex items-center gap-2">
                    <HelpCircle size={16} /> Need Help ?
                </button>
            </div>

            {/* KYC Alert */}
            <div className="bg-red-100 text-red-700 px-4 py-3 rounded-md shadow-sm text-sm font-medium">
                You need to complete KYC process to activate account for taking online payments.
            </div>

            {/* Steps Section */}
            <div className="bg-white rounded-xl shadow p-6">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {steps.map((step) => (
                        <div
                            key={step.step}
                            className={`flex flex-col items-center p-4 rounded-xl border text-center ${step.completed
                                    ? 'border-green-500 text-green-600'
                                    : step.step === 2
                                        ? 'border-cyan-500 text-cyan-600'
                                        : 'border-gray-300 text-gray-500'
                                }`}
                        >
                            <div className="text-xs bg-gray-100 px-2 py-1 rounded-full mb-2 font-semibold">
                                Step {step.step}
                            </div>
                            <div className="text-sm font-medium">{step.label}</div>
                            {step.completed && (
                                <CheckCircle size={18} className="text-green-500 mt-2" />
                            )}
                            {step.step === 2 && !step.completed && (
                                <button className="bg-cyan-500 text-white mt-2 px-3 py-1 text-xs rounded-md">
                                    Complete now
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-100 px-4 py-3 rounded-md flex justify-between items-center text-sm font-semibold text-gray-700">
                <span>📌 Our Services for You</span>
                <span className="cursor-pointer">⋮</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                        <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MainDashboard;
