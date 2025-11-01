import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuth, loading } = useAuth();

  if (loading) {
    return <div>Проверка доступа...</div>;
  }

  return isAuth ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
