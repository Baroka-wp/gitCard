import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GiftListView from './pages/GiftListView';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list/:uid" element={<GiftListView />} />
            <Route path="/auth" element={<AuthPage />} />
            

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;