import { Link } from 'react-router-dom';
import Card from '../components/Card';
// Import the Card component for displaying article previews

function BlogArticlesPage() {
  // BlogArticlesPage component displays a list of blog article previews.
  // It includes placeholders for search and filter functionality
  // and uses the reusable Card component for each article preview.


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold dark-green-text mb-8 text-center">Blog Articles</h1> {/* Added styling classes */}
      
      {/* Search and Filter Placeholders */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search articles..."
          className="input w-full mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {/* Placeholder Filter Tags */}
          <span className="tag">All</span> {/* Placeholder tag */}
          <span className="tag">Environmental</span> {/* Placeholder tag */}
          <span className="tag">Community</span> {/* Placeholder tag */}
          <span className="tag">Tips</span> {/* Placeholder tag */}
        </div>
      </div>
      {/* Note about coming soon */}

      {/* Placeholder message indicating search and filter are coming soon */}
      {/* Placeholder message for search and filter */}
      <p className="text-dark-gray text-sm mb-6">Search and filter functionality coming soon.</p>
      
      {/* Blog Article Previews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Article Card 1 */} 
        <Card>
          {/* Placeholder for the article image */}
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div> {/* Image Placeholder */}
          <h3 className="text-xl font-semibold mb-2">Reducing Your Carbon Footprint</h3>
          <p className="text-dark-gray mb-4">Learn simple steps to reduce your environmental impact in your daily life...</p>
          <Link to="/blog/reducing-carbon-footprint" className="text-primary-green hover:underline">Read More</Link>
        </Card>

        {/* Placeholder Article Card 2 */} 
 <Card>
          {/* Placeholder for the article image */}
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div> {/* Image Placeholder */}
          <h3 className="text-xl font-semibold mb-2">The Power of Community Action</h3>
          <p className="text-dark-gray mb-4">Discover how communities coming together can create significant positive change for the environment...</p>
          <Link to="/blog/community-action-power" className="text-primary-green hover:underline">Read More</Link> {/* Styled Link */}
        </Card>

        {/* Placeholder Article Card 3 */}
        <Card>
          {/* Placeholder for the article image */}
          <div className="w-full h-48 bg-gray-300 rounded-md mb-4"></div> {/* Image Placeholder */}
          <h3 className="text-xl font-semibold mb-2">Simple Tips for Sustainable Living</h3>
          <p className="text-dark-gray mb-4">Quick and easy tips you can implement today to live a more sustainable life...</p>
          <Link to="/blog/sustainable-living-tips" className="text-primary-green hover:underline">Read More</Link> {/* Styled Link */}
        </Card>
      
      </div> {/* Closing tag for the grid */}
    </div> /* Closing tag for the main container div */
  );
}
export default BlogArticlesPage;