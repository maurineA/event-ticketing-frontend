import React, {useState, useEffect} from 'react';
import axios from 'axios';

function CompanyInfo() {
  const [userData, setUserData] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        // Fetch user's company data
        const response = await axios.get('/company', config);
        setUserData(response.data);
        console.log(response.data);
        
        // Fetch company events
        const eventsResponse = await axios.get('/companyevents', config);
        setEvents(eventsResponse.data);
        console.log(eventsResponse.data);
      } catch(error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1>
        Hello: {userData.company_name ? userData.company_name : 'User'}
      </h1>
      <div>
            <p className="text-gray-600">
                <a href="/createevent" className="text-blue-500 hover:underline">
                  Create An Event
              </a>
            </p>
          </div>
      <h2 className="text-2xl font-bold mb-4">Company Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index} className="mb-8">
            <div className="bg-gray-200 rounded-lg p-4">
              <p className="text-xl font-semibold">{event.event_name.toUpperCase()}</p>
              <p className="text-gray-700">{event.description.toUpperCase()}</p>
              <div className="flex items-center mt-2">
                <p className="mr-4">
                  <strong>Start Date:</strong> {event.start_date}
                </p>
                <p>
                  <strong>End Date:</strong> {event.end_date}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <p className="mr-4">
                  <strong>Venue:</strong> {event.venue_name}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-semibold">Ticket Categories:</p>
                <ul>
                  {Object.entries(event.ticket_categories).map(([category, quantity]) => (
                    <li key={category} className="ml-4">
                      {category}: {quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyInfo;