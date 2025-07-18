import { Link } from 'react-router-dom';
import Card from './Card'; // Import your Card component

// Purpose: Renders the main landing page of the application, showcasing the project's mission,
// impact, ways to participate, and previews of other sections.
function LandingPage() {
  return (
    <div className="landing-page"> {/* Main container div */}
      {/* Hero Section */}
      <section className="hero-section bg-green-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Monthly Earth Day: A Daily Movement</h1>
        <p className="text-xl mb-8">
          Join us for small daily actions that create a big impact on our planet.
        </p>
        <Link
          to="/about"
          className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Learn About Our Mission
        </Link>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We believe that climate change can be fought by combining small actions.
          Monthly Earth Day encourages you to adopt sustainable habits every day,
          transforming care for the planet into a routine.
        </p>
      </section>

      {/* Impact Section */}
      <section className="impact-section bg-gray-100 py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Daily Actions */}
          <Card>
            <h3 className="text-2xl font-bold mb-3 text-green-700">Daily Actions</h3>
            <p className="text-gray-600 mb-4">Thousands of sustainable actions carried out globally.</p>
            <Link
              to="/actions"
              className="text-green-600 font-semibold hover:underline mt-auto"
            >
              Learn More
            </Link>
          </Card>

          {/* Card 2: Engaged Community */}
          <Card>
            <h3 className="text-2xl font-bold mb-3 text-green-700">Engaged Community</h3>
            <p className="text-gray-600 mb-4">A growing network of individuals committed to the planet.</p>
            <Link
              to="/community"
              className="text-green-600 font-semibold hover:underline mt-auto"
            >
              Learn More
            </Link>
          </Card>

          {/* Card 3: Educational Resources */}
          <Card>
            <h3 className="text-2xl font-bold mb-3 text-green-700">Educational Resources</h3>
            <p className="text-gray-600 mb-4">Materials to learn and be inspired to live greener.</p>
            <Link
              to="/resources"
              className="text-green-600 font-semibold hover:underline mt-auto"
            >
              Learn More
            </Link>
          </Card>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="participate-section py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">How to Participate</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">1. Choose an Action</h3>
            <p className="text-gray-700">Select a simple, sustainable daily action.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">2. Log Your Impact</h3>
            <p className="text-gray-700">Share your actions and inspire the community.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">3. Invite Friends</h3>
            <p className="text-gray-700">Multiply the impact by inviting more people to the movement.</p>
          </div>
        </div>
        <Link
          to="/signup"
          className="mt-12 inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300"
        >
          Get Started Now
        </Link>
      </section>

      {/* Latest Actions Section */}
      <section className="latest-actions-section bg-gray-100 py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Latest Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 4: Planted a Tree */}
          <Card>
            <h3 className="text-2xl font-bold mb-3 text-green-700">Planted a Tree</h3>
            <p className="text-gray-600 mb-4">John planted a Yellow Ipe seedling in his garden.</p>
            <Link
              to="/actions/plant-tree"
              className="text-green-600 font-semibold hover:underline mt-auto"
            >
              View Action
            </Link>
          </Card>

          {/* Card 5: Recycling Completed */}
          <Card>
            <h3 className="text-2xl font-bold mb-3 text-green-700">Recycling Completed</h3>
            <p className="text-gray-600 mb-4">Mary separated and properly disposed of her week's recyclables.</p>
            <Link
              to="/actions/recycle"
              className="text-green-600 font-semibold hover:underline mt-auto"
            >
              View Action
            </Link>
          </Card>

          {/* Card 6: Water Conservation */}
          <Card>
            <h3 className="text-2xl font-bold mb-3 text-green-700">Water Conservation</h3>
            <p className="text-gray-600 mb-4">Carlos reduced his shower time to 5 minutes.</p>
            <Link
              to="/actions/save-water"
              className="text-green-600 font-semibold hover:underline mt-auto"
            >
              View Action
            </Link>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/actions"
            className="text-green-700 font-bold hover:underline"
          >
            View All Actions
          </Link>
        </div>
      </section>

      {/* Call to Action for Newsletter */}
      <section className="newsletter-cta bg-green-700 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
        <p className="text-xl mb-8">
          Receive sustainability tips and updates directly in your inbox.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow p-3 rounded-md text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-green-700 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer-section bg-gray-800 text-white py-10 px-4 text-center">
        <p className="mb-4">&copy; 2025 Monthly Earth Day. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Use</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <p className="mt-4">
          Twitter: <a href="https://x.com/highlyartistic" target="_blank" rel="noopener noreferrer" className="hover:underline">x.com/highlyartistic</a>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;