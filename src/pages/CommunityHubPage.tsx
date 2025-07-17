import React from 'react';

function CommunityHubPage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-dark-green mb-4">Community Hub Feed</h2>

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

      {/* Community Feed */}
      <div className="community-feed space-y-6">
        {/* Placeholder Text Post Card */}
        <div className="card">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-medium-gray rounded-full mr-4"></div> {/* Placeholder Profile Picture */}
            <div className="font-semibold text-dark-gray">User Name</div> {/* Placeholder Username */}
          </div>
          <p className="text-dark-gray">This is a placeholder text post in the community feed. Sharing some thoughts on #MonthlyEarthDay actions!</p>
        </div>

        {/* Placeholder Image Post Card */}
        <div className="card">
           <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-medium-gray rounded-full mr-4"></div> {/* Placeholder Profile Picture */}
            <div className="font-semibold text-dark-gray">User Name</div> {/* Placeholder Username */}
          </div>
          <p className="text-dark-gray mb-4">Here's a photo from our recent cleanup!</p>
          <div className="w-full h-48 bg-medium-gray rounded-md mb-4"></div> {/* Placeholder Image */}
          {/* Add image source and alt text here later */}
        </div>

        {/* Placeholder Poll Post Card */}
        <div className="card">
           <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-medium-gray rounded-full mr-4"></div> {/* Placeholder Profile Picture */}
            <div className="font-semibold text-dark-gray">User Name</div> {/* Placeholder Username */}
          </div>
          <p className="text-dark-gray mb-4">What's your favorite action for this month?</p>
          <div className="space-y-2">
            <div className="bg-light-gray p-2 rounded-md cursor-pointer hover:bg-medium-gray">Option A (Votes)</div>
            <div className="bg-light-gray p-2 rounded-md cursor-pointer hover:bg-medium-gray">Option B (Votes)</div>
            {/* Add more poll options here */}
          </div>
        </div>

        {/* Placeholder Embedded X (Twitter) Post Card */}
        <div className="card">
           {/* Placeholder for embedded content */}
           <p className="text-dark-gray text-center italic">Placeholder for embedded X (Twitter) post</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityHubPage;