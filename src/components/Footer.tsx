import React from 'react';

function Footer() {
  return (
    <footer className="footer-section"> {/* Define footer-section in App.css for dark background and styling */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Portal Name */}
        <div className="logo text-xl font-bold text-text-light mb-4 md:mb-0">
          {/* Placeholder for Globe Icon */}
          <span className="globe-icon mr-2 inline-block">{/* Icon will go here */}</span>
          #MonthlyEarthDay
        </div>

        {/* Useful Links (Placeholder) */}
        <div className="footer-links text-text-light mb-4 md:mb-0">
          {/* Add actual links here */}
          <a href="#" className="hover:underline mr-4">Sobre nós</a>
          <a href="#" className="hover:underline mr-4">Contato</a>
          <a href="#" className="hover:underline mr-4">Termos de Uso</a>
          <a href="#" className="hover:underline">Privacidade</a>
        </div>

        {/* Social Media Icons (Placeholders) */}
        <div className="social-icons text-text-light text-2xl space-x-4 mb-4 md:mb-0">
          {/* Add actual social media icons here */}
          <span>📸</span> {/* Camera icon placeholder */}
          <span>📱</span> {/* Phone icon placeholder */}
          <span>🐦</span> {/* Bird icon placeholder */}
        </div>

        {/* Copyright Information */}
        <div className="copyright text-sm text-medium-gray">
          © 2023 #MonthlyEarthDay. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;