import React from 'react'; // React is imported, even if not directly used in JSX for modern React versions
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import BlogArticlesPage from './pages/BlogArticlesPage';
import ListOfActionsPage from './pages/ListOfActionsPage';
import CalendarOfScheduledActionsPage from './pages/CalendarOfScheduledActionsPage';
import CommunityHubPage from './pages/CommunityHubPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Footer from './components/Footer';
import './App.css'; // Your App-specific CSS

// Main application component responsible for routing and overall layout
function App() {
  return (
    // BrowserRouter wraps the entire application to provide routing context
    <BrowserRouter>
      <div className="flex flex-col min-h-screen"> {/* Flex container for sticky footer */}
        <Header /> {/* Your Header component */}

        <main className="flex-grow"> {/* Main content area, grows to fill space */}
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<BlogArticlesPage />} />
            <Route path="/actions" element={<ListOfActionsPage />} />
            <Route path="/calendar" element={<CalendarOfScheduledActionsPage />} />
            <Route path="/community" element={<CommunityHubPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            {/* Add more routes as needed */}
            {/* Example for an "About" page if you have one linked from LandingPage */}
            <Route path="/about" element={<div><h1>About Us</h1><p>Information about our mission.</p></div>} />
            <Route path="/signup" element={<div><h1>Sign Up</h1><p>Join our community!</p></div>} />
            <Route path="/privacy" element={<div><h1>Privacy Policy</h1><p>Details about data privacy.</p></div>} />
            <Route path="/terms" element={<div><h1>Terms of Use</h1><p>Our terms and conditions.</p></div>} />
            <Route path="/contact" element={<div><h1>Contact Us</h1><p>Get in touch with us.</p></div>} />
          </Routes>
        </main>

        <Footer /> {/* Your Footer component */}
      </div>
    </BrowserRouter>
  );
}

export default App;