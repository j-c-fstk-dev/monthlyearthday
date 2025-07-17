import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import BlogArticlesPage from './pages/BlogArticlesPage';
import ListOfActionsPage from './pages/ListOfActionsPage';
import CalendarOfScheduledActionsPage from './pages/CalendarOfScheduledActionsPage';
import CommunityHubPage from './pages/CommunityHubPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Footer from './components/Footer';
import './App.css'
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter basename="/monthlyearthday">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogArticlesPage />} />
          <Route path="/actions" element={<ListOfActionsPage />} />
          <Route path="/calendar" element={<CalendarOfScheduledActionsPage />} />
          <Route path="/community" element={<CommunityHubPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
