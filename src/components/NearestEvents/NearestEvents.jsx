import React, { useContext } from 'react';
import './NearestEvents.css';
import { StoreContext } from '../../Context/StoreContext';
import { FaClock } from 'react-icons/fa'; // Icon for the time indicator

function NearestEvents() {
  const { employee_data } = useContext(StoreContext);

  // Get today's date in "MM-DD" format
  const today = new Date();
  const currentMonthDay = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  // Filter employees whose birthday is today
  const birthdayUsers = employee_data.filter(employee => {
    const [, month, day] = employee.dob.split('-');
    return `${month}-${day}` === currentMonthDay;
  });

  return (
    <div className='Nearest-Events'>
      <div className="header">
        <h2>Nearest Events</h2>
        <a href="#view-all">View all</a>
      </div>
      {birthdayUsers.length > 0 ? (
        birthdayUsers.map((employee, index) => (
          <div key={index} className="event">
            <div className="event-bar" style={{ backgroundColor: '#D488F4' }}></div>
            <div className="event-details">
              <p className="event-title">{employee.user_name.slice(0, 4)}'s Birthday</p>
              <p className="event-time">Today | 6:00 PM</p> {/* Adjust the time as needed */}
            </div>
            <div className="event-extra">
              <FaClock />
              <span>4h</span>
            </div>
          </div>
        ))
      ) : (
        <p>No birthdays today.</p>
      )}
    </div>
  );
}

export default NearestEvents;
