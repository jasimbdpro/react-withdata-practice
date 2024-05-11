import React from 'react';
import './FriendList.css'

const FriendList = (props) => {
    const friend = props.friend;
    const totalFollower = friend.reduce((acc, person) => acc + parseInt(person.followers, 10), 0)


    return (
        <div className='friend-list'>
            <h2>Friend Added: {friend.length}</h2>
            <p>Total followers: {totalFollower}</p>

        </div>
    );
};

export default FriendList;