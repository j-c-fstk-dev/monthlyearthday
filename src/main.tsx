import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global CSS
import App from './App.tsx'; // Import your main App component

// Get the root DOM element
const rootElement = document.getElementById('root');

// Ensure the root element exists before creating the root
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* The App component will contain the BrowserRouter and all your routes */}
      <App />
    </StrictMode>,
  );
} else {
  console.error('Root element with ID "root" not found in the document.');
}