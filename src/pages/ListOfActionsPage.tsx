import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

/**
 * ListOfActionsPage component
 * Displays a list of environmental actions that users can take.
 * Includes placeholders for search and filter functionality.
 */
function ListOfActionsPage() {
  const actions = [
    // List of predefined actions
    { title: 'Pick Up Litter', description: 'Clean up trash where you see it or lead/join a clean up event.' },
    { title: 'Plant Trees', description: 'Plant trees where possible or lead/join a tree planting event.' },
    { title: 'Carpool', description: 'Share a ride and carpool when possible to cut down on emissions and save gas.' },
    { title: 'Use Reusable Bags', description: 'Bring reusable bags to the grocery store to reduce plastic waste.' },
    { title: 'Switch to a Reusable Water Bottle', description: 'Ditch single-use plastic bottles for a durable, reusable one.' },
    { title: 'Turn Off Lights', description: 'Switch off lights and unplug electronics when not in use to save energy.' },
    { title: 'Reduce Water Waste', description: 'Take shorter showers and fix leaky faucets to conserve water.' },
    { title: 'Recycle Properly', description: 'Learn your local recycling rules and sort waste correctly.' },
    { title: 'Compost Food Scraps', description: 'Start a small compost bin for food scraps to reduce landfill waste.' },
    { title: 'Choose Eco-Friendly Products', description: 'Opt for biodegradable or sustainable household items, like bamboo toothbrushes.' },
    { title: 'Walk or Bike Short Distances', description: 'Skip the car for short trips to reduce emissions.' },
    { title: 'Plant Native Species', description: 'Add native plants to your garden to support local wildlife and ecosystems.' },
    { title: 'Reduce Meat Consumption', description: 'Try one meat-free day a week to lower your environmental footprint.' },
    { title: 'Shop Secondhand', description: 'Buy clothes or goods from thrift stores to reduce demand for new production.' },
    { title: 'Use Public Transit', description: 'Take buses or trains when possible to cut down on fuel use.' },
    { title: 'Avoid Single-Use Plastics', description: 'Say no to plastic straws, cutlery, and takeout containers.' },
    { title: 'Support Local Farmers', description: 'Buy produce and meat from local markets to reduce transport emissions.' },
    { title: 'Educate Yourself', description: 'Follow #MonthlyEarthDay on social media for tips and join local cleanups to stay engaged.' },
  ];

  // Render the list of actions
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">List of Actions</h1>

      {/* Search and Filter Placeholders */}
      <div className="mb-6">
        <input type="text" placeholder="Search actions..." className="input mb-4" />
        <div className="flex flex-wrap">
          {/* Placeholder for filter tags */}
          <span className="tag mr-2 mb-2">All</span>
          <span className="tag mr-2 mb-2">Cleanup</span>
          <span className="tag mr-2 mb-2">Planting</span>
          {/* Add more placeholder tags as needed */}
        </div>
      </div>

      {/* Coming Soon Message for Search and Filter */}
      <p className="text-dark-gray text-sm italic mb-6">Search and filter functionality are coming soon.</p>


      {/* Display actions using the Card component */}
      <div className="action-list">
        {actions.map((action, index) => (
          <Card key={index}>
            <h3 className="text-lg font-semibold mb-2 dark-green-text">
              {action.title}
            </h3>
            <p className="text-dark-gray">{action.description}</p>
           {/* Content for each action */}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ListOfActionsPage;