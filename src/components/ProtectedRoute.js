import {
    Routes,
    Route,
    NavLink,
    Navigate,
    useNavigate,
  } from 'react-router-dom';
  import { useAuth } from "./DashboardLearning";

  
  const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
  
    if (!token) {
      return <Navigate to="/home" replace />;
    }
  
    return children;
  };

  export default ProtectedRoute