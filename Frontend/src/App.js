import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import HomePage from './components/module 1/HomePage';
// import RegistrationForm from './components/module 1/RegistrationForm';
// import LoginPage from './components/module 1/LoginPage';
// import ForgotPassword from './components/module 1/ForgotPassword';

import InventoryManagement from './components/module 2/InventoryManagement';
import StockManagement from './components/module 2/StockManagement';
import StockLevelTracking from './components/module 2/StockLevelTracking';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/" element={<InventoryManagement />} />
        <Route path="/stock-management" element={<StockManagement />} />
        <Route path="/stock-level-tracking" element={<StockLevelTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
