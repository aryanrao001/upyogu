// components/PrivateRoute.jsx
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles }) => {
  const { role, token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return children;
};

export default PrivateRoute;
