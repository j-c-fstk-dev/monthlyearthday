import React from 'react';

function TestimonialsPage() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-dark-green mb-6">Testimonials</h2>

        {/* Leave Your Testimonial Button */}
        <button className="btn btn-primary mb-8">
          Leave Your Testimonial
        </button>

        {/* Testimonials List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder Testimonial Card 1 */}
          <div className="card">
            <p className="mb-4">"Being a part of #MonthlyEarthDay has been incredibly fulfilling! It's amazing to see how small actions each month can add up to a big impact. The community is so inspiring!"</p>
            <p className="text-sm text-gray-600">- A Satisfied Participant</p>
          </div>

          {/* Placeholder Testimonial Card 2 */}
          <div className="card">
            <p className="mb-4">"I love the focus on consistent action. It's easy to get overwhelmed, but knowing that there's a dedicated day each month makes it feel manageable and impactful. Great initiative!"</p>
            <p className="text-sm text-gray-600">- An Environmental Enthusiast</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;