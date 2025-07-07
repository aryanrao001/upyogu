import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import DashboardLayout from './pages/dashboard/Layout'; // 👈 Parent layout
import MainDashboard from './pages/dashboard/MainDashboard';
import Manage from './pages/dashboard/Manage';
import ChargeBack from './pages/dashboard/ChargeBack';
import RefundTransaction from './pages/dashboard/RefundTransaction';
import PayProfile from './pages/dashboard/PayProfile';
import SupportTicket from './pages/dashboard/SupportTicket';
import SettlementReport from './pages/dashboard/SettlementReport';
import Reports from './pages/dashboard/Reports';
import BookingTicket from './pages/dashboard/BookingTicket';
import Register from './pages/Registe';
// import MainDashboard from './pages/dashboard/Main'; // 👈 /dashboard
// import Transactions from './pages/dashboard/Transactions';
// import Refunds from './pages/dashboard/Refunds';
// import Reports from './pages/dashboard/Reports';

const App = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/regsiter" element={!token ? <Register /> : <Navigate to="/dashboard" />} />

        {/* All Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            // <PrivateRoute allowedRoles={['admin', 'finance', 'support']}>
              <DashboardLayout />
            // </PrivateRoute>
          }
        >
          <Route index element={<MainDashboard />} />
          <Route path="manage" element={<Manage/>} />
          <Route path="chargeback" element={<ChargeBack/>} />
          <Route path="refund-transactions" element={<RefundTransaction/>} />
          <Route path="pay-profile" element={<PayProfile/>} />
          <Route path="support-ticket" element={<SupportTicket/>} />
          <Route path="settlement-reports" element={<SettlementReport/>} />
          <Route path="reports" element={<Reports/>} />
          <Route path="booking-ticket" element={<BookingTicket/>} />
          
          {/* <Route path="transactions" element={<Transactions />} />
          <Route path="refunds" element={<Refunds />} />
          <Route path="reports" element={<Reports />} /> */}
        </Route>

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
