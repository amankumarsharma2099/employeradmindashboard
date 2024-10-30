import React, { useContext } from 'react';
import './Workload.css';
import { StoreContext } from '../../Context/StoreContext';

function Workload() {
    const { user_list } = useContext(StoreContext);

    return (
        <div className='workloads'>
          <div className="wrk">
          <h3 >Workload</h3>
          <button >View all</button>
          </div>
            
            
                <div className='user-display-list'>
                    {user_list.map((user, index) => (
                        <div key={index} className='user-container'>
                            <img src={user.user_image} alt={user.user_name} className='user-image' />
                            <h4 className='user-name'>{user.user_name}</h4>
                            <p className='user-designation'>{user.user_designation}</p>
                            <span className='user-rank'>{user.rank}</span>
                        </div>
                    ))}
                </div>
            </div>
        
    );
}

export default Workload;
