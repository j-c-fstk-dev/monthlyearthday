import React from 'react';
import Card from '../components/Card';

/**
 * TestimonialsPage component
 * Displays testimonials from participants and a placeholder for submitting new ones.
 */
function TestimonialsPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold dark-green-text mb-8 text-center">Testimonials</h1>
        <h2 className="text-3xl font-semibold text-dark-green mb-6">Testimonials</h2>

        {/*
          Leave Your Testimonial Button
          Placeholder functionality - submission is currently managed via an admin panel.
        */}
        <button className="btn btn-primary mb-8">
          Deixe seu Testemunho
        </button>
        <span className="text-sm text-gray-600 ml-4">
          (Envio de testemunhos gerenciado e aprovado via painel administrativo para o MVP)
        </span>

        {/*
          Testimonials List
          Displays testimonials using the reusable Card component.
        */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder Testimonial Card 1 */}
          <Card>
            <p className="mb-4">"Being a part of #MonthlyEarthDay has been incredibly fulfilling! It's amazing to see how small actions each month can add up to a big impact. The community is so inspiring!"</p>
            <p className="text-sm text-gray-600">- A Satisfied Participant</p>
          </Card>

          {/* Placeholder Testimonial Card 2 */}
          <Card>
            <p className="mb-4">"I love the focus on consistent action. It's easy to get overwhelmed, but knowing that there's a dedicated day each month makes it feel manageable and impactful. Great initiative!"</p>
            <p className="text-sm text-gray-600">- An Environmental Enthusiast</p>
        </Card>
        </div>{/* Closing div for testimonials grid */}
      </div>{/* Closing div for container */}
    </div> // Closing div for the main component div
  );
}

export default TestimonialsPage;