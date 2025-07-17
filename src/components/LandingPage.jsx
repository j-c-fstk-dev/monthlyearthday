import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-dark-green mb-8">Welcome to #MonthlyEarthDay!</h1>

      {/* Hero Section - Placeholder */}
      <section className="mb-12 text-center">
        <p className="text-xl text-dark-gray">Join a global movement to make a difference for our planet, one month at a time.</p>
        {/* Add a prominent Call to Action button here later */}
      </section>

      {/* About #MonthlyEarthDay Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-green mb-4">About #MonthlyEarthDay</h2>
        <p className="text-dark-gray mb-4">
          At #MonthlyEarthDay, we believe every day is an opportunity to protect and celebrate our planet. Founded by Nick, who works hard to make this world a better place. Increased participation by group of environmentalists, community organizers, and everyday change-makers, our movement transforms the spirit of Earth Day into a monthly call to action. Our mission is to inspire, educate, and empower individuals and communities to take meaningful steps toward sustainability and environmental stewardship, on the 22nd of every month.
        </p>
        <p className="text-dark-gray">
          Through local cleanups, tree-planting initiatives, educational workshops, and digital campaigns, #MonthlyEarthDay fosters a global community united by a shared commitment to a healthier, greener future. We partner with organizations, schools, and volunteers to create impactful, hands-on opportunities that make a difference in our neighborhoods and beyond.
        </p>
        <p className="text-dark-gray mt-4">
          Join us in redefining environmental activism—because caring for the Earth isn’t just an annual event, it’s a way of life. Together, let’s celebrate Earth Day every month.
        </p>
      </section>

      {/* Our Impact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-green mb-4">Our Impact</h2>
        <p className="text-dark-gray mb-4">
          Our #MonthlyEarthDay portal primarily focuses on tracking and showcasing environmental and social impact.
        </p>
        <p className="text-dark-gray">
          Environmental Impact: Through the actions we promote (such as litter collection, tree planting, reduction of plastic and water consumption, etc.), we aim to quantify and visualize direct improvements to the environment. For example, the amount of litter removed, the number of trees planted, or the collective carbon footprint reduction of participants. The idea is to show how individual and community actions contribute to a healthier planet.
        </p>
        <p className="text-dark-gray mt-4">
          Social Impact: We encourage community engagement, education, and inspiration. We want to highlight how people come together to make a difference, build stronger, more conscious communities, and positively influence their social circles. Testimonials and the community feed will be crucial in demonstrating this connection and the sense of belonging to a global movement.
        </p>
        {/* Add impact statistics or visualizations here later */}
      </section>

      {/* Community Hub Preview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-green mb-4">Community Hub</h2>
        <p className="text-dark-gray mb-4">
          Connect with fellow Earth advocates from around the world! Our community feed is a place to share your experiences, celebrate achievements, find inspiration, and see how others are making a difference.
        </p>
        <p className="text-dark-gray">
          The community hub on #MonthlyEarthDay serves as a vibrant space for engagement and interaction. Here you can view posts that include text, images, videos, polls, and even embedded posts from X (formerly Twitter), participate in voting and polls on future actions or relevant topics, and share and see experiences, which fosters a sense of inspiration and reinforces the collective impact of actions.
        </p>
        {/* Link to Community Page */}
        <Link to="/community" className="text-primary-green hover:underline font-semibold mt-4 inline-block">Join the Conversation</Link>
      </section>

      {/* Meet Our Founder Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-green mb-4">Meet Our Founder - Nick</h2>
        <p className="text-dark-gray">
          Born on Earth Day, our founder Nick has always felt a deep connection to the planet. A lifelong environmentalist, Nick’s love for nature was sparked by childhood adventures in the wilderness, where he marveled at the beauty of wildlife and untouched landscapes. His passion drives #MonthlyEarthDay’s vision to make environmental care a year-round commitment. Whether hiking through forests, fishing, observing local wildlife, or leading community cleanups, Nick inspires others to protect our planet with the same enthusiasm he’s carried since his first Earth Day. His belief is simple: every step toward sustainability counts, and together, we can create a thriving future for all living things.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-dark-green mb-4">Contact Us</h2>
        <p className="text-dark-gray mb-2">
          Email: <a href="mailto:MonthlyEarthDay@gmail.com" className="text-primary-green hover:underline">MonthlyEarthDay@gmail.com</a>
        </p>
        <p className="text-dark-gray">
          Twitter: <a href="https://x.com/highlyartistic" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">x.com/highlyartistic</a>
        </p>
      </section>
    </div>
  );
}

export default LandingPage;