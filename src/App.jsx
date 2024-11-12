import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import MainPage from './pages/MainPage';
import AdminForm from './pages/AdminForm';
import ScholarshipDetail from './pages/ScholarshipDetail';
import { UserProvider } from './config/useContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-scholarship" element={<AdminForm />} />
          <Route path="/dashboard" element={<MainPage />} />
          <Route path="/detail" element={<ScholarshipDetail />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;