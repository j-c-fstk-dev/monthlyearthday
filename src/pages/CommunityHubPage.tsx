import React from 'react';
import Card from '../components/Card';

// CommunityHubPage component displays the community feed with various types of posts.
function CommunityHubPage() {
  return (
    <div>
      {/* Page Heading */}
      <h2 className="text-3xl font-semibold text-dark-green mb-4">Community Hub Feed</h2>

      {/* Placeholder for Search and Filter */}
      {/* Search and Filter Placeholders */}
      <div className="mb-6">
        <input type="text" placeholder="Search posts..." className="input mb-2" />
        <div className="flex flex-wrap gap-2">
          <span className="tag cursor-pointer">All Posts</span>
          <span className="tag cursor-pointer">Text</span>
          <span className="tag cursor-pointer">Images</span>
          <span className="tag cursor-pointer">Polls</span>
          <span className="tag cursor-pointer">Embedded</span>
          {/* Add more filter tags here */}
        </div>
      </div>
      {/* Note about Search and Filter */}
      <p className="mb-6 text-dark-gray italic text-sm">
        Search and filter functionality are coming soon.
      </p>

      {/* Note about Curated Content and Admin Submission */}
      {/* Placeholder Message */}
      <p className="mb-6 text-dark-gray italic">
        The community feed currently displays curated content as examples of what user-generated content will look like in the future. Content submission is managed via an admin panel for this initial version.
      </p>
      {/* Community Feed */}
      <div className="community-feed space-y-6">
        {/* Placeholder Text Post */}
        {/* Card for a text-only post */}
        <Card>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-medium-gray rounded-full mr-4"></div> {/* Placeholder Profile Picture */}
            <div className="font-semibold text-dark-gray">User Name</div> {/* Placeholder Username */}
          </div>
          <p className="text-dark-gray">This is a placeholder text post in the community feed. Sharing some thoughts on #MonthlyEarthDay actions!</p>
        </Card>

        {/* Placeholder Image Post */}
        {/* Card for a post with an image */}
        <Card>
           <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-medium-gray rounded-full mr-4"></div> {/* Placeholder Profile Picture */}
            <div className="font-semibold text-dark-gray">User Name</div> {/* Placeholder Username */}
          </div>
          <p className="text-dark-gray mb-4">Here's a photo from our recent cleanup!</p>
          <div className="w-full h-48 bg-medium-gray rounded-md mb-4"></div> {/* Placeholder Image */}
        </Card>

        {/* Placeholder Poll Post */}
        {/* Card for a poll post */}
        <Card>
           <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-medium-gray rounded-full mr-4"></div> {/* Placeholder Profile Picture */}
            <div className="font-semibold text-dark-gray">User Name</div> {/* Placeholder Username */}
          </div>
          <p className="text-dark-gray mb-4">What's your favorite action for this month?</p>
          <div className="space-y-2">
            <div className="bg-light-gray p-2 rounded-md cursor-pointer hover:bg-medium-gray transition-colors">Option A (Votes)</div>
            <div className="bg-light-gray p-2 rounded-md cursor-pointer hover:bg-medium-gray transition-colors">Option B (Votes)</div>
            {/* Add more poll options here */}
          </div>
          {/* Note about Voting/Poll Functionality */}
          <p className="mt-2 text-dark-gray italic text-sm">
            Voting here is a placeholder for future actions or relevant topics and might have limited functionality in this initial version.
          </p>
        {/* Placeholder Embedded X (Twitter) Post Card */}
 </Card>
        <Card>
           {/* Placeholder for embedded content */}
           <p className="text-dark-gray text-center italic">Placeholder for embedded X (Twitter) post</p>
        </Card>
      </div>
    </div>
  );
}

export default CommunityHubPage;