import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '/workspace/src/components/LandingPage';

import BlogArticlesPage from '/workspace/src/pages/BlogArticlesPage';
import ListOfActionsPage from '/workspace/src/pages/ListOfActionsPage';
import CalendarOfScheduledActionsPage from '/workspace/src/pages/CalendarOfScheduledActionsPage';
import CommunityHubPage from '/workspace/src/pages/CommunityHubPage';
import TestimonialsPage from '/workspace/src/pages/TestimonialsPage';
import Header from '/workspace/src/components/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogArticlesPage />} />
          <Route path="/actions" element={<ListOfActionsPage />} />
          <Route path="/calendar" element={<CalendarOfScheduledActionsPage />} />
          <Route path="/community" element={<CommunityHubPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;