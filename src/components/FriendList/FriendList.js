import React from 'react';
import './FriendList.css'

const FriendList = (props) => {
    return (
        <div className='friend-list'>
            <h2>Friend Added: {props.friend.length}</h2>
        </div>
    );
};

export default FriendList;