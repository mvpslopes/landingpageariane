import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DailyReportForm from './pages/DailyReportForm';

export default function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Site público */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Sistema interno */}
          <Route path="/sistema/login" element={<Login />} />
          <Route
            path="/sistema/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sistema/registro"
            element={
              <ProtectedRoute>
                <DailyReportForm />
              </ProtectedRoute>
            }
          />
          
          {/* Redirecionar rotas antigas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

