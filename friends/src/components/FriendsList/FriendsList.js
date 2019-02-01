import React from 'react';

import Friend from '../Friend/Friend';

const FriendsList = props => {
    return(
        <div>
            <h2>Friends List</h2>
            
            {props.friends.map((friend, index) => {
                return <Friend key={index} friend={friend} />;
            })}
        </div>
    );
};

export default FriendsList;