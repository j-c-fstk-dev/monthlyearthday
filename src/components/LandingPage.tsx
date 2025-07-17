import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page container">

      {/* Hero Section - Placeholder */}
      <section className="hero-section section text-center">
        <div className="container mx-auto px-4 py-16"> {/* Added container for spacing */}
          <h1 className="text-5xl font-bold text-text-light mb-4">Protegendo nosso planeta</h1> {/* Heading 1 */}
          <h2 className="text-4xl font-bold text-text-light mb-8">todo mês</h2> {/* Heading 2 */}
          <p className="text-lg text-text-light mb-8">Um movimento global para ações diárias em prol do meio ambiente</p> {/* Tagline */}
          <div className="flex justify-center space-x-4"> {/* Buttons container */}
            <Link to="/actions" className="btn btn-secondary">Saiba mais</Link> {/* Styled Link as button */}
            <Link to="/calendar" className="btn btn-outline">Agende sua ação</Link> {/* Styled Link as button */}
          </div>
        </div>
      </section>

      {/* About #MonthlyEarthDay Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text mb-4">About #MonthlyEarthDay</h2>
        <p className="text-dark-gray mb-4">
          At #MonthlyEarthDay, we believe every day is an opportunity to protect and celebrate our planet. Founded by Nick, who works hard to make this world a better place. Increased participation by group of environmentalists, community organizers, and everyday change-makers, our movement transforms the spirit of Earth Day into a monthly call to action. Our mission is to inspire, educate, and empower individuals and communities to take meaningful steps toward sustainability and environmental stewardship, on the 22nd of every month.
        </p>
        <p className="text-dark-gray">
          Through local cleanups, tree-planting initiatives, educational workshops, and digital campaigns, #MonthlyEarthDay fosters a global community united by a shared commitment to a healthier, greener future. We partner with organizations, schools, and volunteers to create impactful, hands-on opportunities that make a difference in our neighborhoods and beyond.
        </p>
        <p className="text-dark-gray mt-4">
          Join us in redefining environmental activism—because caring for our planet isn’t just an annual event, it’s a way of life. Together, let’s celebrate Earth Day every month.
        </p>
      </section>

      {/* Our Impact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text mb-4">Nosso Impacto Até Hoje</h2> {/* Added dark-green-text class */}
        <p className="text-dark-gray mb-4">
          Our #MonthlyEarthDay portal primarily focuses on tracking and showcasing environmental and social impact.
        </p>
        <p className="text-dark-gray">
          Environmental Impact: Through the actions we promote (such as litter collection, tree planting, reduction of plastic and water consumption, etc.), we aim to quantify and visualize direct improvements to the environment. For example, the amount of litter removed, the number of trees planted, or the collective carbon footprint reduction of participants. The idea is to show how individual and community actions contribute to a healthier planet.
        </p>
        <p className="text-dark-gray mt-4">
          Social Impact: We encourage community engagement, education, and inspiration. We want to highlight how people come together to make a difference, build stronger, more conscious communities, and positively influence their social circles. Testimonials and the community feed will be crucial in demonstrating this connection and the sense of belonging to a global movement.
        </p>
        {/* Impact metrics */}
        <div className="flex flex-wrap justify-around mt-8"> {/* Use flex-wrap for mobile stacking */}
          <div className="impact-metric card"> {/* Applied card class */}
            <div className="icon text-ocean-blue"> {/* Added color class */}
              {/* Placeholder for wave icon - Replace with actual icon */}
 🌊
            </div>
            <div className="number">25,600</div>
            <div className="description">toneladas de lixo coletados</div>
          </div>
          <div className="impact-metric card"> {/* Applied card class */}
            <div className="icon text-primary-green"> {/* Added color class */}
              {/* Placeholder for tree icon - Replace with actual icon */}🌲</div>
 <div className="number">12,450</div>
            <div className="description">árvores plantadas</div>
          </div>
          {/* Added the third impact metric */}
          <div className="impact-metric card">
            <div className="icon text-earth-brown">
              {/* Placeholder for city/location icon */}📍</div>
            <div className="number">38</div>
            <div className="description">cidades envolvidas</div>
          </div>
        </div>
      </section>

      {/* Latest Actions Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text mb-4">Últimas Ações</h2>
        <div className="card">
          {/* Placeholder for action image */}
          <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
          {/* Placeholder for action title */}
          <h3 className="text-xl font-semibold dark-green-text mb-2">Limpeza Costeira</h3>
          {/* Placeholder for action description */}
          <p className="text-dark-gray mb-4">Junte-se a nós para limpar as praias e proteger nossos oceanos.</p>
          {/* Call-to-action link/button */}
          <Link to="/actions" className="btn btn-outline">Saiba mais</Link>
        </div>
      </section>

      {/* How to Participate Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text text-center mb-8">Como Participar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Using grid for layout */}
          <div className="how-to-step text-center">
            <div className="step-number bg-primary-green text-text-light rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold dark-green-text mb-2">Escolha uma causa</h3>
            <p className="text-dark-gray">
              Saiba mais sobre as Causas ambientais que você pode apoiar.
            </p>
          </div>
          <div className="how-to-step text-center">
            <div className="step-number bg-primary-green text-text-light rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold dark-green-text mb-2">Agende sua ação</h3>
            <p className="text-dark-gray">
              Encontre uma ação e junte-se à comunidade em um evento.
            </p>
          </div>
          <div className="how-to-step text-center">
            <div className="step-number bg-primary-green text-text-light rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold dark-green-text mb-2">Compartilhe</h3>
            <p className="text-dark-gray">
              Compartilhe sua ação e inspire outros a participarem!
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="section newsletter-section text-center">
        <h2 className="text-3xl font-semibold text-text-light mb-4">Fique por dentro das novidades</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input type="email" placeholder="Seu email" className="input w-full md:w-auto" />
          <button className="btn btn-secondary w-full md:w-auto">
            Inscrever
          </button>
        </div>
      </section>

      {/* Community Hub Preview Section - Moved the content related to Community Hub */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text mb-4">Community Hub</h2> {/* Reverted heading to Community Hub */}
        {/* Content related to community hub */}
        <Link to="/community" className="text-primary-green hover:underline font-semibold mt-4 inline-block">Join the Conversation</Link>
      </section>

      {/* Meet Our Founder Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text mb-4">Meet Our Founder - Nick</h2>
        <p className="text-dark-gray">
          Born on Earth Day, our founder Nick has always felt a deep connection to the planet. A lifelong environmentalist, Nick’s love for nature was sparked by childhood adventures in the wilderness, where he marveled at the beauty of wildlife and untouched landscapes. His passion drives #MonthlyEarthDay’s vision to make environmental care a year-round commitment. Whether hiking through forests, fishing, observing local wildlife, or leading community cleanups, Nick inspires others to protect our planet with the same enthusiasm he’s carried since his first Earth Day. His belief is simple: every step toward sustainability counts, and together, we can create a thriving future for all living things.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold dark-green-text mb-4">Contact Us</h2>
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