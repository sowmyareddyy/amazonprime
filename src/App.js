import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfileSelection from "./components/ProfileSelection";
import HomePage from "./pages/HomePage";
import LiveTVPage from "./pages/LiveTVPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import Layout from "./components/Layout";
import MoviesPage from "./pages/MoviesPage";
import TVShowsPage from "./pages/TVShowsPage";
import AccountPage from "./pages/AccountPage";
import SettingsPage from "./pages/SettingsPage";

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("primeUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("primeUser", JSON.stringify(userData));
    setUser(userData);
    navigate("/profiles");
  };

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("primeUser");
    setUser(null);
    setSelectedProfile(null);
    navigate("/");
  };

  if (loading) return null;

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/profiles" />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/profiles"
        element={
          user ? (
            <ProfileSelection onProfileSelect={handleProfileSelect} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/home"
        element={
          user && selectedProfile ? (
            <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
              <HomePage selectedProfile={selectedProfile} />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/livetv"
        element={
          user && selectedProfile ? (
            <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
              <LiveTVPage />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/subscriptions"
        element={
          user && selectedProfile ? (
            <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
              <SubscriptionPage />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/movies"
        element={
          user && selectedProfile ? (
            <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
              <MoviesPage />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/tvshows"
        element={
          user && selectedProfile ? (
            <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
              <TVShowsPage />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />

<Route
  path="/account"
  element={
    <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
      <AccountPage />
    </Layout>
  }
/>

<Route
  path="/settings"
  element={
    <Layout selectedProfile={selectedProfile} onLogout={handleLogout}>
      <SettingsPage />
    </Layout>
  }
/>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
