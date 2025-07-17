import React from 'react';
import { Link } from 'react-router-dom';

function BlogArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2>Blog Articles</h2>

      {/* Search and Filter Placeholders */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="input w-full mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {/* Placeholder Filter Tags */}
          <span className="tag">Environment</span>
          <span className="tag">Community</span>
          <span className="tag">News</span>
          <span className="tag tag-active">All</span>
        </div>
      </div>

      {/* Blog Article Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Article Card 1 */}
        <div className="card">
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div> {/* Image Placeholder */}
          <h3 className="text-xl font-semibold mb-2">Reducing Your Carbon Footprint</h3>
          <p className="text-dark-gray mb-4">Learn simple steps to reduce your environmental impact in your daily life...</p>
          <Link to="/blog/reducing-carbon-footprint" className="text-primary-green hover:underline">Read More</Link>
        </div>

        {/* Placeholder Article Card 2 */}
        <div className="card">
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div> {/* Image Placeholder */}
          <h3 className="text-xl font-semibold mb-2">The Importance of Local Cleanups</h3>
          <p className="text-dark-gray mb-4">Discover how community cleanups make a big difference locally and globally...</p>
          <Link to="/blog/local-cleanups" className="text-primary-green hover:underline">Read More</Link>
        </div>

        {/* Add more placeholder cards here */}
      </div>
    </div>
  );
}

export default BlogArticlesPage;