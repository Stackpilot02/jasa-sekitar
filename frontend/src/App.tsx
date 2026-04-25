import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ProviderProfile from './pages/ProviderProfile';
import Booking from './pages/Booking';
import Tracking from './pages/Tracking';
import Completion from './pages/Completion';
import Login from './pages/Login';
import Register from './pages/Register';
import ProviderDashboard from './pages/ProviderDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/provider/:id" element={<ProviderProfile />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/tracking/:id" element={<Tracking />} />
        <Route path="/completion/:id" element={<Completion />} />
        <Route path="/provider/dashboard" element={<ProviderDashboard />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* We will add more routes as we implement pages */}
      </Routes>
    </Router>
  );
}

export default App;
