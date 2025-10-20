import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CardPage from "./pages/CardPage/CardPage";
import NewCardPage from "./pages/NewCardPage/NewCardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Защищенные маршруты */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/card/:id"
        element={
          <ProtectedRoute>
            <CardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/new-card"
        element={
          <ProtectedRoute>
            <NewCardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exit"
        element={
          <ProtectedRoute>
            <ExitPage />
          </ProtectedRoute>
        }
      />

      {/* Публичные маршруты */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Страница 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
