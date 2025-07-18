import { Link } from 'react-router-dom';
import { useState } from 'react'; // <-- ADICIONE esta linha para importar useState

// Header component for navigation and mobile menu
function Header() {
  // State to control the visibility of the mobile navigation overlay
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-section">
      {/* Container for the header content */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Portal Name */}
          <div className="logo-container flex items-center text-text-light"> {/* Container for logo and text */}
            {/* Placeholder for globe icon - replace with actual logo later */}
            <div className="globe-icon w-6 h-6 mr-2 bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(\'https://via.placeholder.com/24/ffffff/000000?text=🌎\')' }}></div> {/* Placeholder for globe icon */}
            <span className="portal-name text-xl font-bold">#MonthlyEarthDay</span> {/* Portal name */}
          </div>

        {/* Desktop Navigation (Hidden on Mobile) */}
        {/* Displays navigation links for larger screens */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-text-light hover:underline">Home</Link>
          <Link to="/blog" className="text-text-light hover:underline">Blog</Link>
          <Link to="/actions" className="text-text-light hover:underline">Actions</Link>
          <Link to="/calendar" className="text-text-light hover:underline">Calendar</Link>
          <Link to="/community" className="text-text-light hover:underline">Community</Link>
          <Link to="/testimonials" className="text-text-light hover:underline">Testimonials</Link>
        </nav>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-primary-green z-50 flex flex-col items-center py-8">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-text-light text-2xl" onClick={toggleMobileMenu}>
            X
          </button>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-4 text-center">
            <Link to="/" className="text-text-light text-xl" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/blog" className="text-text-light text-xl" onClick={toggleMobileMenu}>Blog</Link>
            <Link to="/actions" className="text-text-light text-xl" onClick={toggleMobileMenu}>Actions</Link>
            <Link to="/calendar" className="text-text-light text-xl" onClick={toggleMobileMenu}>Calendar</Link>
            <Link to="/community" className="text-text-light text-xl" onClick={toggleMobileMenu}>Community</Link>
            <Link to="/testimonials" className="text-text-light text-xl" onClick={toggleMobileMenu}>Testimonials</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;