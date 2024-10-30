import {React,useContext} from 'react';
import { AiOutlineSync, AiOutlinePaperClip } from 'react-icons/ai'; // Import icons from 'ai' instead of 'ci'
import './ActivityStream.css';
import { StoreContext } from '../../Context/StoreContext';

function ActivityStream() {
  const {user_list } = useContext(StoreContext);
  return (
    <div className="activity-stream">
      <h2>Activity Stream</h2>
      {user_list.slice(0, 2).map((user, index) => (
        <div key={index} className="activity-entry">
          <div className="user-info">
            <img src={user.user_image} alt={`${user.user_name} profile`} className="user-image" />
            <div>
              <p className="user-name">{user.user_name}</p>
              <p className="user-designation">{user.user_designation}</p>
            </div>
          </div>
          <div className="activity">
            {index % 2 === 0 ? (
              <div className="activity-item">
                <AiOutlineSync className="activity-icon" /> {/* Changed icon to AiOutlineSync */}
                <p>Updated the status of Mind Map task to In Progress</p>
              </div>
            ) : (
              <div className="activity-item">
                <AiOutlinePaperClip className="activity-icon" /> {/* Changed icon to AiOutlinePaperClip */}
                <p>Attached files to the task</p>
              </div>
            )}
          </div>
        </div>
      ))}
      <p className="view-more">View more</p>
    </div>
  );
}

export default ActivityStream;
