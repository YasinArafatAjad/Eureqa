import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';

// Context Providers
import { LanguageProvider } from './context/LanguageContext';
import { ThemeContextProvider, useThemeContext } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

// Layout Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CategoriesPage from './pages/CategoriesPage';
import InstructorsPage from './pages/InstructorsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import CreateCoursePage from './pages/CreateCoursePage';

// Dashboard Pages
import UserDashboardPage from './pages/UserDashboardPage';
import InstructorDashboardPage from './pages/InstructorDashboardPage';
import ModeratorDashboardPage from './pages/ModeratorDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Auth Context Hook
import { useAuth } from './context/AuthContext';

function DashboardRouter() {
  const { userRole } = useAuth();

  if (userRole === 'admin') {
    return <AdminDashboardPage />;
  } else if (userRole === 'moderator') {
    return <ModeratorDashboardPage />;
  } else if (userRole === 'instructor') {
    return <InstructorDashboardPage />;
  } else {
    return <UserDashboardPage />;
  }
}

function AppContent() {
  const { darkMode } = useThemeContext();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#16a34a',
        light: '#22c55e',
        dark: '#15803d',
      },
      secondary: {
        main: '#64748b',
        light: '#94a3b8',
        dark: '#475569',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
        }`}>
          <Router>
            <Routes>
              {/* Public Routes with Layout */}
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="courses" element={<CoursesPage />} />
                <Route path="categories" element={<CategoriesPage />} />
                <Route path="instructors" element={<InstructorsPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
              
              {/* Auth Routes (No Layout) */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              
              {/* Protected Dashboard Route */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardRouter />
                  </ProtectedRoute>
                } 
              />

              {/* Protected Create Course Route */}
              <Route 
                path="/create-course" 
                element={
                  <ProtectedRoute requiredRole="instructor">
                    <CreateCoursePage />
                  </ProtectedRoute>
                } 
              />

              {/* Protected Instructor Routes */}
              <Route 
                path="/instructor/courses" 
                element={
                  <ProtectedRoute requiredRole="instructor">
                    <InstructorDashboardPage />
                  </ProtectedRoute>
                } 
              />
              
              <Route path="/unauthorized" element={<UnauthorizedPage />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </LanguageProvider>
    </ThemeContextProvider>
  );
}

export default App;