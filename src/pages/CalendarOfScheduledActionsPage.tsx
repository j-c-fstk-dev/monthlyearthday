import Card from '../components/Card';

// CalendarOfScheduledActionsPage component
function CalendarOfScheduledActionsPage() {
  return (
    <div>
 <h2 className="text-3xl font-semibold text-dark-green mb-4">Calendar of Scheduled Actions</h2>


      {/* MVP Note */}
      <p className="text-dark-gray mb-4">
        This calendar provides a preview of upcoming events. Event submission and management are currently handled externally for the MVP.
      </p>
      {/* Placeholder for Calendar Visualization */}
      <div className="calendar-placeholder h-64 bg-medium-gray rounded-lg mb-8 flex items-center justify-center text-dark-gray">
        Calendar Visualization Placeholder
 {/* This div serves as a placeholder for an actual calendar component */}
      </div>

      {/* List View of Upcoming Events */}
      <section>
 <h3 className="text-2xl font-semibold text-dark-green mb-4">Upcoming Events</h3>
 <div className="space-y-4">
 {/* Placeholder Event Card 1 */}
 <Card>
 <h4 className="text-xl font-bold">Community Beach Cleanup</h4>
 <p className="text-dark-gray">Date: October 22, 2023</p>
 <p className="text-dark-gray">Time: 9:00 AM - 12:00 PM</p>
 <p className="text-dark-gray mt-2">Join us for a morning of cleaning up our local beach. Bags and gloves will be provided.</p>
 </Card>

 {/* Placeholder Event Card 2 */}
 <Card>
 <h4 className="text-xl font-bold">Urban Tree Planting Initiative</h4>
 <p className="text-dark-gray">Date: November 22, 2023</p>
 <p className="text-dark-gray">Time: 10:00 AM - 1:00 PM</p>
 <p className="text-dark-gray mt-2">Help us plant new trees in the city park to enhance urban greenery.</p>
 </Card>
        </div>
      </section>
    </div>
  );
}

export default CalendarOfScheduledActionsPage;